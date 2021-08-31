import React from "react";
import axios, { post } from "axios";

class ViewImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      image:''
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9091/fooditem//getDetail/22")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ image : `data:image/jpg;base64,${data}`  });
      });
  }

 
  render() {
    return (
      <div>
        <img src={this.state.image} alt="" />{" "}
      </div>
    );
  }
}
export default ViewImage;
