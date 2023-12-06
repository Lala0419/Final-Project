import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useMemo } from 'react';
import axios from 'axios';

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

const EstimateList = () => {
  const [estimateLists, setEstimateLists] = useState([]);

  const [rowId, setRowId] = useState(null);

  //fetch all the estimates from database
  const getAllEstimates = () => {
    axios
      .get(`${URL}${PORT}/api/v1/customers`)
      .then((res) => {
        const result = res.data;
        setEstimateLists(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllEstimates();
  }, []);

  const handleOption = (params) => {
    const { id, field, value } = params;
    console.log('Cell Edit:', { id, field, value });
    const updatedEstimateLists = [...estimateLists];
    const updatedRow = updatedEstimateLists.find((row) => row.id === id);

    if (updatedRow && field === 'request_status') {
      // Update the local state
      updatedRow[field] = value;
      setEstimateLists(updatedEstimateLists);

      // axios
      //   .patch(`${URL}${PORT}/api/v1/customers/${row.id}`, {
      //     ...row,
      //     request_status: selectedOption.value
      //   })
      //   .then((res) => {
      //     setEstimateRow(res.data);
      //   })
      //   .catch((error) => {
      //     console.log('error', error);
      //   });
      axios
        .patch(`${URL}${PORT}/api/v1/customers/${id}`, {
          request_status: value
        })
        .then((res) => {
          // Handle the response if needed
          console.log('Update successful:', res.data);
          const updatedEstimateLists = estimateLists.map((row) =>
            row.id === id ? { ...row, request_status: value } : row
          );
          setEstimateLists(updatedEstimateLists);
          console.log(estimateLists);
        })
        .catch((error) => {
          console.error('Error updating status:', error);
        });
    }
  };
  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'S/N', flex: 1, maxWidth: 100 },
      { field: 'first_name', headerName: 'Name', flex: 1, maxWidth: 100 },
      { field: 'last_name', headerName: 'Last Name', flex: 1, maxWidth: 100 },
      { field: 'phone_number', headerName: 'Phone Number', flex: 1, maxWidth: 100 },
      {
        field: 'email_address',
        headerName: 'Email Address',
        flex: 1,
        maxWidth: 400,
        filterable: false
      },
      { field: 'home_address', headerName: 'Home Address', flex: 1, maxWidth: 400 },
      { field: 'service', headerName: 'Service Rquested', flex: 1, maxWidth: 400 },
      { field: 'additional_info', headerName: 'Additional Info', flex: 1, maxWidth: 400 },
      {
        field: 'request_status',
        headerName: 'Status',
        flex: 1,
        maxWidth: 150,
        type: 'singleSelect',
        valueOptions: [
          { value: 'pending', label: 'Pending' },
          { value: 'in process', label: 'In Process' },
          { value: 'completed', label: 'Completed' },
          { value: 'canceled', label: 'Canceled' }
        ],
        editable: true
      }
    ],
    []
  );

  const rows = estimateLists;
  const handleCellEditCommit = (params) => {
    console.log('onCellEditCommit triggered:', params);
    handleOption(params);
  };
  return (
    <Box
      sx={{
        height: 400,
        width: '100%'
      }}
    >
      <Typography variant="h3" component="h3" sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
        EstimateList
      </Typography>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          onCellEditCommit={handleCellEditCommit}
          isCellEditable={() => true}
          pageSize={5}
          rowsPerPageOptions={[10, 15, 20]}
          loading={!estimateLists.length}
          getRowId={(row) => {
            const rowId = row.id;
            console.log('Row ID:', rowId);
            return rowId;
          }}
        />
      </div>
    </Box>
  );
};

export default EstimateList;
