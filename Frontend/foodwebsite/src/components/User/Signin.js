import React, { Component } from "react";
import "./style.css";
import img from "../../images/pizza-1.jpg";
import axios from "axios";

export class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (name) => (event) => {
    this.setState({ ...this.state, [name]: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    let formData={
      email: this.state.email,
      password: this.state.password
    }
    axios
      .post(`http://localhost:9091/user/login`,formData)
      .then((response) => {
        console.log(response);
        if (response.data === 1) {
          localStorage.setItem("email", this.state.email)
          window.location.href = "/user/dashboard";
        } else {
          window.location.href = "/admin/dashboard";
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <section>
          <div className="containerUser">
            <div className="user singinBx">
              <div className="imgBox">
                <img src={img}></img>
              </div>
              <div class="formBox">
                <form onSubmit={this.onSubmit}>
                  <h2>Sign In</h2>
                  <input
                    type="email"
                    name=""
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange("email")}
                    autofocus="autofocus"
                  />
                  <input
                    type="password"
                    name=""
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange("password")}
                  />
                  <input type="submit" name="" value="Login" />
                  <p class="signup">
                    Don't have an account?
                    <a
                      href="#"
                      onClick={() => {
                        window.location.href = "/signup";
                      }}
                    >
                      Sign Up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Signin;
