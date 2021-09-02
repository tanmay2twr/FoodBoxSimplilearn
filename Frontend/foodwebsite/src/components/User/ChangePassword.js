import React, { Component } from "react";
import "./style.css";
import img from "../../images/pizza-1.jpg";
import axios from "axios";
import NavbarAdmin from "../Admin/NavbarAdmin";
import NavbarUser from "./NavbarUser";

export class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentpassword: "",
      newpassword: "",
      newconfirmpassword: "",
    };
  }
  handleChange = (name) => (event) => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  changePassword = (event) => {
    let flag = 0;
    if (this.state.newpassword === this.state.newconfirmpassword) {
      if (this.state.currentpassword !== this.state.newpassword) {
        flag++;
        this.handleSubmit(event);
      } else {
        alert("your current password/new password are same.");
      }
    }
    if (flag == 0) {
      alert("New Password/ Confirm Password are not matched!!!");
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .get(`http://localhost:8000/user/${localStorage.getItem("email")}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.password === this.state.currentpassword) {
          data.password = this.state.newpassword;
          axios.put(
            `http://localhost:8000/user/${localStorage.getItem("email")}`,
            data
          );
        } else {
          alert("Current Password Incorrect!!!");
        }
      });
  };

  render() {
    const { currentpassword, newpassword, newconfirmpassword } = this.state;
    const { from } = this.props.match.params;
    return (
      <>
      {from === "admin" ? (<NavbarAdmin/>): (<NavbarUser/>)}
      <div>
        <section>
          <div className="containerUser">
            <div className="user singinBx">
              <div className="imgBox">
                <img src={img}></img>
              </div>
              <div class="formBox">
                <form onSubmit={this.changePassword}>
                  <h2>Change Password</h2>
                  <input
                    type="password"
                    name=""
                    placeholder="Current Password"
                    value={currentpassword}
                    onChange={this.handleChange("currentpassword")}
                  />
                  <input
                    type="password"
                    name=""
                    placeholder="New Password"
                    value={newpassword}
                    onChange={this.handleChange("newpassword")}
                  />
                  <input
                    type="password"
                    name=""
                    placeholder="Confirm Password"
                    value={newconfirmpassword}
                    onChange={this.handleChange("newconfirmpassword")}
                  />
                  <input type="submit" name="" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div></>
    );
  }
}

export default ChangePassword;
