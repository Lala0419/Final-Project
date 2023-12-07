import React, { useState } from 'react';
import './Admin.scss';
import AdminEmail from '../../components/admin-email/admin-email';
// import AdminEstimateList from '../../components/admin-estimate/AdminEstimateList';
import EstimateList from '../../components/estimate-list/EstimateList';

function Admin() {
  const [adminDisplay, setAdminDisplay] = useState('estimate');

  const switchAdmin = () => setAdminDisplay(adminDisplay === 'email' ? 'estimate' : 'email');

  return (
    <div>
      <span className="button" onClick={switchAdmin}>
        Show {adminDisplay === 'email' ? 'Estimate' : 'Email'} List
      </span>
      {adminDisplay === 'email' && <AdminEmail />}
      {adminDisplay === 'estimate' && <EstimateList />}
    </div>
  );
}

export default Admin;
