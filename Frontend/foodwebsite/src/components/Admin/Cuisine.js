import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import NavbarAdmin from "./NavbarAdmin";

const Cuisine = () => {
  const [allCuisine, setAllCuisine] = useState([]);
  useEffect(() => {
    getAllCuisine();
  }, []);
  const getAllCuisine = () => {
    axios
      .get("http://localhost:9091/fooditem/getAllCuisines")
      .then((response) => {
        setAllCuisine(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const deleteCuisine = (id) => {
    axios
      .post(`http://localhost:9091/fooditem/deleteCuisine?id=${id}`)
      .then((response) => {
        alert("cuisine deleted");
        getAllCuisine();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <>
      <NavbarAdmin />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Cuisine ID</th>
              <th>Cuisine Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allCuisine.length &&
              allCuisine.map((cuis, index) => (
                <tr key={index}>
                  <td>{cuis.id}</td>
                  <td>{cuis.cuisine}</td>
                  <td>
                    <button
                      class="btn btn-danger"
                      value="delete"
                      onClick={() => {
                        deleteCuisine(cuis.id);
                      }}
                    >
                      Delete
                    </button>
                    &nbsp;
                    <button class="btn btn-success " value="edit">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <button
          onClick={() => {
            console.log(allCuisine);
          }}
        />
        <button
          class="btn btn-primary"
          onClick={() => {
            window.location.href = "/addCuisine";
          }}
        >
          Add Cuisine
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Cuisine;
