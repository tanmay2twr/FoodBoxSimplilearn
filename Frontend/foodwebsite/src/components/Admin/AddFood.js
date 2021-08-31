import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios, { post } from "axios";
import NavbarAdmin from "./NavbarAdmin";

const AddFood = () => {
  const [cuisineid, setCuisine] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [allCuisine, setAllCuisine] = useState([]);
  const [offer, setOffer] = useState();
  const [status, setStatus] = useState();
  const [file, setFile] = useState();

  useEffect(() => {
    getAllCuisine();
  }, []);

  const getAllCuisine = () => {
    axios
      .get("http://localhost:9091/fooditem/getAllCuisines")
      .then((response) => response.data)
      .then((data) => {
        setAllCuisine([...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:9091/fooditem/fileupload";
    const formData = new FormData();
    let fileItems = {
      cuisineid: cuisineid,
      title: title,
      description: description,
      price: price,
      offer: offer,
      status: status,
    };
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    await post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        console.log("Food added succesfully!");
        axios.post(
          `http://localhost:9091/fooditem/addFoodItem?id=${response.data}`,
          fileItems
        );
        alert("submit Successfully!!!");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  };

  return (
    <>
      <NavbarAdmin />

      <div class="container">
        <div class="row">
          <div className="col-4"></div>
          <div className="col-4">
            <h1 class="mt-3">Add Food Item</h1>
            <Form class="my-5" onSubmit={handleSubmit}>
              <input type="file" onChange={onChange} />
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: 350, paddingBottom: 10 }}
              >
                <label type="select" />
                <select
                  class="form-control "
                  name="country"
                  value={cuisineid}
                  onChange={(event) => {
                    setCuisine(event.target.value);
                  }}
                >
                  {allCuisine.map((e, key) => {
                    return (
                      <option key={key} value={e.id}>
                        {e.cuisine}
                      </option>
                    );
                  })}
                </select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: 350, paddingBottom: 10 }}
              >
                <Form.Control
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: 350 }}
              >
                <Form.Control
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: 350 }}
              >
                <Form.Control
                  type="text"
                  name="price"
                  placeholder="Price"
                  value={price}
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: 350 }}
              >
                <label type="select" />
                <select
                  class="form-control "
                  name="status"
                  value={status}
                  onChange={(event) => {
                    setStatus(event.target.value);
                  }}
                >
                  <option value={1}>enable</option>
                  <option value={0}>disable</option>
                </select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: 350 }}
              >
                <Form.Control
                  type="number"
                  name="offer"
                  placeholder="Offer"
                  value={offer}
                  onChange={(event) => {
                    setOffer(event.target.value);
                  }}
                />
              </Form.Group>
              <Button
                type="submit"
                variant="success"
                size="md"
                style={{ width: 150 }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFood;
