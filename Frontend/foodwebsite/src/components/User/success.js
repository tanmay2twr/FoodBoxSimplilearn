import React, { Component } from "react";
import NavbarUser from './NavbarUser'
export default class success extends Component {
  render() {
    const { id } = this.props.match.params;
    return (<>
    <NavbarUser/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div class="container text-center">
        <div>Transaction with ID: {id} is Successfull...</div>
        <div>
          <a href="/ordersummary>"> Click here</a> to view your order summary
        </div>
      </div><br/><br/><br/><br/><br/><br/><br/><br/></>
    );
  }
}
