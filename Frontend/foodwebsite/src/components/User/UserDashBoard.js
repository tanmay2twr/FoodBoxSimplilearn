import React, { Component } from "react";
import Home from "../Core/Home";
import Gallery from "./Gallery";
import NavbarUser from "./NavbarUser";
export class UserDashBoard extends Component {
  render() {
    return (
      <div>
        <NavbarUser />
        <Gallery />
        <Home calledFrom="User" />
      </div>
    );
  }
}

export default UserDashBoard;
