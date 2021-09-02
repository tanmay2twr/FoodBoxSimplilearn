import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import NavbarUser from "./NavbarUser";
import StripePayment from "./StripePayment";
import { useParams } from "react-router";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Cart() {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState();
  const [total, setTotal] = useState();
  let { id } = useParams();
  const [check, setCheck] = useState(id);

  console.log(id);
  useEffect(() => {
    axios
      .get(
        `http://localhost:9091/foodcart/getCartItems?userId=${localStorage.getItem(
          "email"
        )}`
      )
      .then((response) => response.data)
      .then((data) => {
        setCartItems(data);
        console.log(cartItems);
        let subTotal = data.reduce((subTotal, data) => {
          subTotal +=
            (data.price - (data.offer * data.price) / 100) * data.quantity;
          return subTotal;
        }, 0);
        setSubTotal(subTotal);
        setTotal(subTotal + (subTotal * 5) / 100);
        if (check != 0) {
          axios
            .delete(
              `http://localhost:9091/foodcart/emptycart?userId=${localStorage.getItem(
                "email"
              )}`
            )
            .then((response) => response.data)
            .then((data) => {
              console.log("success");
            });
        }
      });
  }, []);

  return (
    <>
      <NavbarUser />
      {check != 0 && (
        <div class="container text-center">
          {" "}
          <br /> <br />
          <div>Transaction with ID: {check} is Successfull...</div> <br />
          <h1 className="text-center mt-3">Order Summary</h1>
        </div>
      )}
      {check == 0 && <h1 className="text-center mt-3">My Cart</h1>}
      <div className="container my-5">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="spanning table">
            ""
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Details
                </TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Desc</TableCell>
                <TableCell align="right">Qty.</TableCell>
                <TableCell align="right">Unit</TableCell>
                <TableCell align="right">Sum</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems &&
                cartItems.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.title}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">
                      {row.price - (row.offer * row.price) / 100}
                    </TableCell>
                    <TableCell align="right">
                      {(row.price - (row.offer * row.price) / 100) *
                        row.quantity}
                    </TableCell>
                  </TableRow>
                ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">{subTotal}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align="right">5%</TableCell>
                <TableCell align="right">{(subTotal * 5) / 100}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{total}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div> 
      {check == 0 && <StripePayment total={total} />}
      <br />
     
    </>
  );
}
