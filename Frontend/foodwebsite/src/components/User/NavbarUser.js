import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import "./NavbarUser.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function NavbarUser() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            FoodBox
            <i class="fas fa-pizza-slice" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <>
              <li className="nav-item">
                <Link
                  to="/user/dashboard"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Dasboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/user/dashboard"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Add Photo
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link
                  to="/changepassword/user"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Change Password
                </Link>
              </li>
              `
              <li className="nav-item">
                <Link
                  to="/cart/0"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  View Cart{" "}
                </Link>
              </li>
              `
            </>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavbarUser;
