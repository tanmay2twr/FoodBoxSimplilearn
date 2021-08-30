import React from "react";
import { Link } from "react-router-dom";
import Home from "../Core/Home";
import NavbarAdmin from "./NavbarAdmin";

export default function AdminDashboard() {
  return (
    <div>
      <NavbarAdmin/>
      <Home calledFrom="Admin"/>
    </div>
  );
}
