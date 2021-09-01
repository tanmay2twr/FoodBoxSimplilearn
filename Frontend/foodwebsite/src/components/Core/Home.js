import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Products from "../../components/Products";

function Home(props) {
  const [allFood, setAllFood] = useState([]);

  useEffect(() => {
    getAllFood();
  }, []);
  const getAllFood = () => {
    if (props.calledFrom === "Admin") {
      axios
        .get("http://localhost:9091/fooditem/getAllFoodItemsAdmin")
        .then((response) => response.data)
        .then((data) => {
          setAllFood(data);
        });
    } else {
      axios
        .get("http://localhost:9091/fooditem/getAllFoodItemsUser")
        .then((response) => response.data)
        .then((data) => {
          setAllFood(data);
        });
    }
  };
  return (
    <div>
      <Products data={allFood} calledFrom={props.calledFrom} />
    </div>
  );
}

export default Home;
