import React, { useState, useEffect } from "react";
import "./AdminCont.css";
function Customer() {
  return (
    <div className="admin_space">
      <h1>Customer Information</h1>
      <div className="container customer_cont">
        <table className="table table-bordered ">
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Mob No.</th>
            <th>E-mail</th>
          </tr>

          {/* {Object.keys(quries)
            .map((key, index) => (
              <tr key={key}>
                <td>{index + 1}</td>
                <td>{quries[key].fname}</td>
                <td>{quries[key].phno}</td>
                <td>{quries[key].email}</td>
                <td>
                  <p>{quries[key].querry}</p>
                </td>
              </tr>

            ))
            .reverse()} */}
          <tr>
            <td>1</td>
            <td>Prashant</td>
            <td>1234567890</td>
            <td>ak@x.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Yash Kushwah</td>
            <td>1234598798</td>
            <td>yash@gmail.com</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Prakhar</td>
            <td>1234567890</td>
            <td>prakhar@gmail.com</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Anas Husain</td>
            <td>12765768798</td>
            <td>anas@gmail.com</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Customer;
