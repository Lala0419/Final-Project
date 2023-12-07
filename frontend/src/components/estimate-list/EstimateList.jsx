import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useMemo } from 'react';
import axios from 'axios';
import { css } from '@emotion/react';

const datagridSx = {
  borderRadius: 2,
  '& .MuiDataGrid-main': { borderRadius: 2 },
  '& div[data-rowIndex][role="row"]': {
    color: '#212529',
    fontSize: 14,
    //risky
    minHeight: '70px !important',

    '& div': {
      minHeight: '70px !important',
      // height: 50,
      lineHeight: '25px !important'
    }
  },
  '& .MuiDataGrid-virtualScrollerRenderZone': {
    '& .MuiDataGrid-row': {
      '&:nth-child(2n)': { backgroundColor: 'rgba(235, 235, 235, .7)' }
    }
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: '#212529',
    color: '#ffffff',
    fontSize: 14,
    height: 'unset !important'
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    whiteSpace: 'normal',
    lineHeight: 'normal'
  },

  '& .MuiDataGrid-cellContent': {
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    textAlign: 'center'
  },
  '& .wrap-text-cell': {
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    display: 'flex',
    alignItems: 'center' // Vertically center the content
  },
  '& .MuiDataGrid-row': {
    display: 'flex',
    alignItems: 'center' // Vertically center the row content
  },
  '& .MuiTablePagination-displayedRows': {
    fontSize: 14
  }
};
const wrapTextCellStyle = css`
  white-space: normal;
  word-wrap: break-word;
`;

const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

const EstimateList = () => {
  const [estimateLists, setEstimateLists] = useState([]);

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
      {
        field: 'id',
        headerName: 'S/N',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        align: 'center',
        flex: 0.5,
        maxWidth: 100
      },
      {
        field: 'first_name',
        headerName: 'Name',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        maxWidth: 100
      },
      {
        field: 'last_name',
        headerName: 'Last Name',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        maxWidth: 100
      },
      {
        field: 'phone_number',
        headerName: 'Phone Number',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        maxWidth: 150,
        filterable: false,
        disableColumnMenu: true,
        sortable: false
      },
      {
        field: 'email_address',
        headerName: 'Email Address',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        align: 'center',
        flex: 2,
        maxWidth: 400,
        filterable: false,
        disableColumnMenu: true,
        sortable: false
      },
      {
        field: 'home_address',
        headerName: 'Home Address',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        align: 'center',
        flex: 2,
        maxWidth: 400,
        disableColumnMenu: true,
        sortable: false
      },
      {
        field: 'service',
        headerName: 'Service Rquested',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        align: 'center',
        flex: 2.5,
        maxWidth: 400,
        disableColumnMenu: true,
        sortable: false
      },
      {
        field: 'additional_info',
        headerName: 'Additional Info',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        align: 'center',
        flex: 2.5,
        maxWidth: 400,
        disableColumnMenu: true,
        sortable: false,
        cellClassName: wrapTextCellStyle
      },
      {
        field: 'request_status',
        headerName: 'Status',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
        align: 'center',
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
    <>
      <Typography variant="h3" component="h3" sx={{ textAlign: 'left', mt: 3, mb: 3 }}>
        Customer Estimate requests
      </Typography>
      <div style={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            ...rows.initialState,
            pagination: { paginationModel: { pageSize: 7 } }
          }}
          pageSizeOptions={[5, 10, 25]}
          onCellEditCommit={handleCellEditCommit}
          isCellEditable={() => true}
          loading={!estimateLists.length}
          getRowId={(row) => {
            const rowId = row.id;
            console.log('Row ID:', rowId);
            return rowId;
          }}
          sx={datagridSx}
        />
      </div>
    </>
  );
};

export default EstimateList;
