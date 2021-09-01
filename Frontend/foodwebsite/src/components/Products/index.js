import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  ProductsContainer,
  ProductWrapper,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";

const Products = ({ data, calledFrom }) => {
  const [filterSearch, setFilterSearch] = useState(data);
  const [cuisine, setCuisine] = useState();
  const [cuisines, setCuisines] = useState([]);
  const [allFoodItems, setAllFoodItems] = useState([]);

  useEffect(() => {
    getAllFoodItems();
    getCuisines();
  }, []);
  useEffect(() => {
    setFilterSearch(data);
  }, [data]);

  const getAllFoodItems = () => {};

  const getCuisines = () => {
    axios
      .get("http://localhost:9091/fooditem/getAllCuisines")
      .then((response) => response.data)
      .then((data) => {
        setCuisines(data);
      });
  };

  const edit = (id, imageId) => {
    window.location.href = `/editfooditem/${id}/${imageId}`;
  };

  const handleSearchChange = (query) => {
    console.log("in search function");
    const filteredSearch = data.filter((eve) => {
      return eve.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilterSearch(filteredSearch);
  };

  const changeCuisine = (cuisine) => {
    if (cuisine === "All") {
      setFilterSearch(data);
    } else {
      let arr = data.filter((e) => {
        return e.cuisineid == cuisine;
      });
      setFilterSearch(arr);
    }
  };

  const addToCart = (event, product) => {
    product["quantity"] = event.target.value;
    let formData = {};
    if (event.target.value === "") {
      formData = {
        userId: localStorage.getItem("email"),
        foodItemId: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        quantity: 0,
        offer: product.offer,
      };
    } else {
      formData = {
        userId: localStorage.getItem("email"),
        foodItemId: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        quantity: event.target.value,
        offer: product.offer,
      };
    }
    console.log(formData);
    axios
      .post("http://localhost:9091/foodcart/addToCart", formData)
      .then((response) => {
        alert("successfull");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <div className="row" style={{ margin: 10 }}>
        <div className="col-4" style={{ paddingTop: 10 }}>
          <input
            class="form-control me-2 mx-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => {
              handleSearchChange(event.target.value);
            }}
          />
        </div>

        <div className="col-4">
          <h1></h1>
        </div>

        <div className="col-4 " style={{ marginTop: -14 }}>
          <label type="select" />
          <select
            class="form-control "
            name="country"
            value={cuisine}
            onChange={(event) => {
              setCuisine(event.target.value);
              changeCuisine(event.target.value);
            }}
          >
            <option value={"All"}>All cuisines</option>
            {cuisines.map((e) => {
              return <option value={e.id}>{e.cuisine}</option>;
            })}
          </select>
        </div>
      </div>
      <ProductsContainer>
        <ProductWrapper>
          {filterSearch.length ? (
            filterSearch.map((product, index) => {
              const image = `data:image/jpg;base64,${product.image}`;
              return (
                <ProductCard key={index}>
                  <ProductImg src={image} alt="Not available" />
                  <ProductInfo>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductDesc>{product.description}</ProductDesc>
                    <ProductPrice>
                      <del>{product.price}</del>{" "}
                      {product.price - (product.price * product.offer) / 100}
                    </ProductPrice>
                    {calledFrom === "User" && (
                      <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-helper-label">
                          Age
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          onChange={(event) => addToCart(event, product)}
                        >
                          <MenuItem value="">
                            <em>Add To Cart</em>
                          </MenuItem>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    {calledFrom === "Admin" && (
                      <ProductButton
                        onClick={() => {
                          edit(product.id, product.imageId);
                        }}
                        style={{ marginTop: 10 }}
                      >
                        Edit Item
                      </ProductButton>
                    )}
                  </ProductInfo>
                </ProductCard>
              );
            })
          ) : (
            <div
              class="alert alert-danger"
              style={{ width: "100%", textAlign: "center" }}
            >
              No Food Item !!!{" "}
            </div>
          )}
        </ProductWrapper>
      </ProductsContainer>
    </div>
  );
};

export default Products;
