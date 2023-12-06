import React from 'react';
import './Admin.scss';
import AdminEmail from '../../components/admin-email/admin-email';
import AdminEstimateList from '../../components/admin-estimate/AdminEstimateList';
import EstimateList from '../../components/estimate-list/EstimateList';

function Admin() {
  return (
    <div>
      <AdminEmail />
      <AdminEstimateList />
      <EstimateList />
    </div>
  );
}

export default Admin;
