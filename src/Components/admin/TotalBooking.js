import React from "react";

function TotalBooking() {
  return (
    <div className="admin_space">
      <h1>Booking Information</h1>
      <div className="container customer_cont">
        <table className="table table-bordered ">
          <tr>
            <th>Sr No.</th>
            <th>Order Id</th>
            <th>Hotel Name</th>
            <th>Booking Date</th>
            <th>Check-In & Check-Out Date</th>
            <th>No of Guest</th>
            <th>Customer Details</th>
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
            <td>87248hdfjahsdj</td>
            <td>Hotel Arrow</td>
            <td>13 Aug 2020</td>
            <td>
              16 Aug 2020
              <br />
              17 Aug 2020
            </td>
            <td>1</td>
            <td>
              Prashant Singh
              <br />
              ak@x.com
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>87jfh342dfjahsdj</td>
            <td>Hotel Geet</td>
            <td>14 July 2020</td>
            <td>
              14 July 2020
              <br />
              15 July 2020
            </td>
            <td>1</td>
            <td>
              Prakhar Agarwal
              <br />
              prakhar@gmail.com
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>8724jhjhdfjahsdj</td>
            <td>Sobtis Continental</td>
            <td>10 Sept 2020</td>
            <td>
              16 Sept 2020
              <br />
              17 Sept 2020
            </td>
            <td>1</td>
            <td>
              Anas Hussain
              <br />
              anas@gmail.com
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default TotalBooking;
