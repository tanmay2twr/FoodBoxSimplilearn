import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../User/NavbarUser.css";
const NavbarAdmin = () => {
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
            <i class="fas fa-pizza-slice" style={{ paddingLeft: 10 }} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <>
              <li className="nav-item">
                <Link
                  to="/admin/dashboard"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Dasboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/addfooditem"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Add Food
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/cuisine"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  View Cuisine
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link
                  to="/changepassword/admin"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Change Password
                </Link>
              </li>
            </>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarAdmin;
