import React from "react";
import './admin-email.scss'

function AdminEmail() {

  return (
    <div className="admin" >
      <table className="admin_table">
        <tr className="admin_table-header">
          <th>Name</th>
          <th>Email</th>
        </tr>
        <tr className="admin_table-info">
          <td>Sasha</td>
          <td>test.test@mail.com</td>
        </tr>
      </table>
    </div>
  )
}

export default AdminEmail;