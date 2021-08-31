import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
const EditFoodItem = (props) => {
  let { id } = useParams();
  let { imageId } = useParams();
  const [cuisineid, setCuisine] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [allCuisine, setAllCuisine] = useState([]);
  const [offer, setOffer] = useState();
  const [status, setStatus] = useState();
  const [fooditem, setFooditem] = useState({
    cuisineid: "",
    title: "",
    description: "",
    price: "",
    offer: "",
    status: "",
  });
  useEffect(() => {
    console.log(props.id);
    getFoodItemByID(id);
    getAllCuisine();
  }, []);
  useEffect(() => {
    setCuisine(fooditem.cuisineid);
    setTitle(fooditem.title);
    setDescription(fooditem.description);
    setPrice(fooditem.price);
    setOffer(fooditem.offer);
    setStatus(fooditem.status);
  }, [fooditem]);
  const getFoodItemByID = (id) => {
    axios
      .post(`http://localhost:9091/fooditem/getFoodItemByID?id=${id}`)
      .then((response) => {
        setFooditem(response.data);
        console.log(response.data);
      });
  };
  const getAllCuisine = () => {
    axios
      .get("http://localhost:9091/fooditem/getAllCuisines")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setAllCuisine([...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = {
      id: id,
      cuisineid: cuisineid,
      title: title,
      description: description,
      price: price,
      offer: offer,
      status: status,
    };
    axios
      .post(`http://localhost:9091/fooditem/addFoodItem?id=${imageId}`, formData)
      .then((response) => {
        console.log(response);
        console.log("Food added succesfully!");
        alert("submit Successfully!!!");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  };

  return (
    <div>
      <div>
        <Form style={{ padding: 60 }} onSubmit={handleSubmit}>
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
  );
};

export default EditFoodItem;
