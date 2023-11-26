import React from "react";
import "./Admin.scss";
import AdminEmail from "../../components/admin-email/admin-email";
import AdminEstimateList from "../../components/admin-estimate/AdminEstimateList";

function Admin() {

  return (
    <div>
      <AdminEmail />
      <AdminEstimateList />

    </div>
  )
}

export default Admin;