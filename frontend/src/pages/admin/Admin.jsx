import React, { useState } from "react";
import "./Admin.scss";
import AdminEmail from "../../components/admin-email/admin-email";
import AdminEstimateList from "../../components/admin-estimate/AdminEstimateList";

function Admin() {

  const [adminDisplay, setAdminDisplay] = useState('email');

  const switchAdmin = () => setAdminDisplay(adminDisplay === 'email' ? 'estimate' : 'email');

  return (
    <div>
      <button className="button" onClick={switchAdmin} >Show {adminDisplay === 'email' ? 'Estimate' : 'Email'} List</button>
      {adminDisplay === 'email' && <AdminEmail />}
      {adminDisplay === 'estimate' && <AdminEstimateList />}
    </div>
  )
}

export default Admin;