import React, { useState, useEffect } from "react";

function CustomerQuiries() {
  const [quries, setQuries] = useState({});
  return (
    <div className="admin_space">
      <h1>Customer Queries</h1>
      <div className="container customer_cont">
        <table className="table table-bordered ">
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Mob No.</th>
            <th>E-mail</th>
            <th>Querry</th>
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
            <td>Prahant Singh</td>
            <td>1234567890</td>
            <td>ak@x.com</td>
            <td>
              <p>I am not getting discount</p>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Prakhar Agarwal</td>
            <td>12378567890</td>
            <td>prakhar@x.com</td>
            <td>
              <p>I am not getting discount</p>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Yash Kushwah</td>
            <td>12387890</td>
            <td>yash@gmail.com</td>
            <td>
              <p>I am facing login issues.</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CustomerQuiries;
