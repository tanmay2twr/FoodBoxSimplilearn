import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const AddCuisine = () => {
  const [cuisine, setCuisine] = useState();
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:9091/fooditem/addCuisine?cuisine=${cuisine}`)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        window.location.href = "/cuisine";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          style={{ width: 350, paddingBottom: 10 }}
        >
          <Form.Control
            type="text"
            placeholder="Cuisine"
            name="cuisine"
            value={cuisine}
            onChange={(event) => {
              setCuisine(event.target.value);
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
  );
};

export default AddCuisine;
