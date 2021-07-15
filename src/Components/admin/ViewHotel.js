import React from "react";

function ViewHotel() {
  return (
    <div className="admin_space">
      <h1>View Hotels</h1>
      <div className="container customer_cont">
        <table className="table table-bordered ">
          <tr>
            <th>Sr No.</th>
            <th>Hotel Name</th>
            <th>Hotel Owner</th>
            <th>Location</th>
            <th>Contact No</th>
            <th>View</th>
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
            } */}
          <tr>
            <td>1</td>
            <td>Hotel Arrow</td>
            <td>Prakhar Agarwal</td>
            <td> Near Pearl Clinic Pilibhit bypass road Bareilly, 243001</td>
            <td>123456789</td>
            <td>
              <button className="btn btn-primary">View</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Hotel Radiance</td>
            <td>Anas Hussain</td>
            <td> Mfc,Railway Station Civil lines 243001</td>
            <td>987654321</td>
            <td>
              <button className="btn btn-primary">View</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sobtis Continental </td>
            <td>Yash Kushwah</td>
            <td> Green Park Bisalpur Road</td>
            <td>987654321</td>
            <td>
              <button className="btn btn-primary">View</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ViewHotel;
