import React, { Component } from "react";
import "./style.css";
import img1 from "../../images/product-2.jpg";
import axios from "axios";

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: "",
      confirmpassword: "",
      role: 1,
    };
  }
  handleChange = (name) => (event) => {
    this.setState({ ...this.state, [name]: event.target.value });
  };
  checkPassword = (event) => {
    if (this.state.password === this.state.confirmpassword) {
      this.handleSubmit(event);
    } else {
      alert("Password not matched!!!");
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    let formData = {
      fullname: this.state.fullname,
      email: this.state.email,
      password: this.state.password,
      role: 1,
    };
    axios
      .post("http://localhost:9091/user/registerUser", formData)
      .then((response) => {
        console.log(response);
        console.log("Sign up Successfull!!!");
        if (response.status === 200) {
          window.location.href = "/signin";
          console.log(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  };

  render() {
    const { fullname, email, password, confirmpassword } = this.state;

    return (
      <div>
        <section>
          <div className="containerUser">
            <div className="user singupBx">
              <div class="formBox">
                <form onSubmit={this.checkPassword}>
                  <h2>Create an account</h2>
                  <input
                    type="text"
                    name=""
                    placeholder="Username"
                    autofocus="autofocus"
                    value={fullname}
                    onChange={this.handleChange("fullname")}
                  />
                  <input
                    type="email"
                    name=""
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange("email")}
                  />
                  <input
                    type="password"
                    name=""
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange("password")}
                  />
                  <input
                    type="password"
                    name=""
                    placeholder="Confirm Password"
                    value={confirmpassword}
                    onChange={this.handleChange("confirmpassword")}
                  />
                  <input type="submit" name="" value="Sign Up" />
                  <p class="signup">
                    Already have an account?
                    <a
                      href="#"
                      onClick={() => {
                        window.location.href = "/signin ";
                      }}
                    >
                      Sign in
                    </a>
                  </p>
                </form>
              </div>
              <div className="imgBox">
                <img src={img1}></img>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Signup;
