import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Axios from "axios";
function AddHotel() {
  const [values, setvalues] = useState({
    hotelname: "",
    hotelowner: "",
    address: "",
    city: "",
    zip: "",
    phno: "",
    facilities: "",
    totalroom: "",
    price: "",
    images: [],
  });
  // **********Image handle****************
  const handleImage = (e) => {
    const formdata = new FormData();
    formdata.append("file", e.target.files[0]);
    formdata.append("upload_preset", "a8m2awyk");
    Axios.post(
      "https://api.cloudinary.com/v1_1/di4hthzbz/image/upload",
      formdata
    )
      .then((res) => {
        setvalues({ ...values, images: [...values.images, res.data.url] });
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  // **************Value handle****************
  const handleChange = (e) => {
    var { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log("form data", values);
  };
  return (
    <div className="admin_space">
      <div className="container customer_cont">
        <div className="card" style={{ padding: "20px" }}>
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
            ADD NEW HOTEL
          </h1>
          <Form onSubmit={submit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridHotelName">
                <Form.Label>Hotel Name</Form.Label>
                <Form.Control
                  name="hotelname"
                  value={values.hotelname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Hotel Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridowner">
                <Form.Label>Hotel Owner</Form.Label>
                <Form.Control
                  name="hotelowner"
                  value={values.hotelowner}
                  onChange={handleChange}
                  type="text"
                  placeholder="Hotel Owner"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                value={values.address}
                onChange={handleChange}
                placeholder="1234 Main St"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridcontact">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                name="phno"
                value={values.phno}
                onChange={handleChange}
                placeholder="Contact No"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridfacility">
              <Form.Label>Facilities</Form.Label>
              <Form.Control
                name="facilities"
                value={values.facilities}
                onChange={handleChange}
                placeholder="Provided Facilities"
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTotal">
                <Form.Label>Total Rooms</Form.Label>
                <Form.Control
                  name="totalroom"
                  value={values.totalroom}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridprice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Form.Group>
              <Form.File
                onChange={handleImage}
                id="exampleFormControlFile1"
                label="Select Hotel Image"
              />
            </Form.Group>
            <Row>
              <Col>
                {" "}
                <Form.Group>
                  <Form.File
                    onChange={handleImage}
                    id="exampleFormControlFile1"
                    label="Select Sub Image"
                  />
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group>
                  <Form.File
                    onChange={handleImage}
                    id="exampleFormControlFile1"
                    label="Select Sub Image"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <Form.Group>
                  <Form.File
                    onChange={handleImage}
                    id="exampleFormControlFile1"
                    label="Select Sub Image"
                  />
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group>
                  <Form.File
                    onChange={handleImage}
                    id="exampleFormControlFile1"
                    label="Select Sub Image"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button className="btn-block" variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddHotel;
