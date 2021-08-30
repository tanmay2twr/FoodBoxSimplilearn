// import React from "react";
// import ImageUploading from "react-images-uploading";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function AddFoodItem() {
//   const [images, setImages] = React.useState([]);
//   const [cuisineid, setCuisine] = useState();
//   const [title, setTitle] = useState();
//   const [description, setDescription] = useState();
//   const [price, setPrice] = useState();
//   const [allCuisine, setAllCuisine] = useState([]);
//   const [offer, setOffer] = useState();
//   const [status, setStatus] = useState();
//   const maxNumber = 69;

//   useEffect(() => {
//     getAllCuisine();
//   }, []);

//   const getAllCuisine = () => {
//     axios
//       .get("http://localhost:9091/fooditem/getAllCuisines")
//       .then((response) => response.data)
//       .then((data) => {
//         console.log(data);
//         setAllCuisine([...data]);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("file", images[0]);
//     const config = {
//       headers: {
//         "content-type": "multipart/form-data",
//       },
//     };
//     axios
//       .post(`http://localhost:9091/fooditem/fileupload`, formData, config)
//       .then((response) => {
//         console.log(response);
//         console.log("Food added succesfully!");
//         alert("submit Successfully!!!");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   const onChange = (imageList, addUpdateIndex) => {
//     // data for submit
//     console.log(imageList, addUpdateIndex);
//     setImages(imageList);
//   };

//   return (
//     <div className="App">
//       <ImageUploading
//         single
//         value={images}
//         onChange={onChange}
//         maxNumber={maxNumber}
//         dataURLKey="data_url"
//       >
//         {({
//           imageList,
//           onImageUpload,
//           onImageRemove,
//           isDragging,
//           dragProps,
//         }) => (
//           // write your building UI
//           <div className="upload__image-wrapper">
//             <button
//               style={isDragging ? { color: "red" } : undefined}
//               onClick={onImageUpload}
//               {...dragProps}
//             >
//               Click Here To Upload
//             </button>
//             &nbsp;
//             {imageList.map((image, index) => (
//               <div key={index} className="image-item">
//                 <img src={image["data_url"]} alt="" width="500" />
//                 <div className="image-item__btn-wrapper">
//                   <div>{image["data_url"]}</div>
//                   <button onClick={() => onImageRemove(index)}>Remove</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </ImageUploading>
//       <div>
//         <Form style={{ padding: 60 }} onSubmit={handleSubmit}>
//           <Form.Group
//             className="mb-3"
//             controlId="formBasicEmail"
//             style={{ width: 350, paddingBottom: 10 }}
//           >
//             <label type="select" />
//             <select
//               class="form-control "
//               name="country"
//               value={cuisineid}
//               onChange={(event) => {
//                 setCuisine(event.target.value);
//               }}
//             >
//               {allCuisine.map((e, key) => {
//                 return (
//                   <option key={key} vaAddFoodItemlue={e.id}>
//                     {e.cuisine}
//                   </option>
//                 );
//               })}
//             </select>
//           </Form.Group>
//           <Form.Group
//             className="mb-3"
//             controlId="formBasicEmail"
//             style={{ width: 350, paddingBottom: 10 }}
//           >
//             <Form.Control
//               type="text"
//               placeholder="Title"
//               name="title"
//               value={title}
//               onChange={(event) => {
//                 setTitle(event.target.value);
//               }}
//             />
//           </Form.Group>
//           <Form.Group
//             className="mb-3"
//             controlId="formBasicEmail"
//             style={{ width: 350 }}
//           >
//             <Form.Control
//               type="text"
//               placeholder="Description"
//               name="description"
//               value={description}
//               onChange={(event) => {
//                 setDescription(event.target.value);
//               }}
//             />
//           </Form.Group>
//           <Form.Group
//             className="mb-3"
//             controlId="formBasicEmail"
//             style={{ width: 350 }}
//           >
//             <Form.Control
//               type="text"
//               name="price"
//               placeholder="Price"
//               value={price}
//               onChange={(event) => {
//                 setPrice(event.target.value);
//               }}
//             />
//           </Form.Group>
//           <Form.Group
//             className="mb-3"
//             controlId="formBasicEmail"
//             style={{ width: 350 }}
//           >
//             <label type="select" />
//             <select
//               class="form-control "
//               name="status"
//               value={status}
//               onChange={(event) => {
//                 setStatus(event.target.value);
//               }}
//             >
//               <option value={1}>enabAddFoodItem
//             controlId="formBasicEmail"
//             style={{ width: 350 }}
//           >
//             <Form.Control
//               type="number"
//               name="offer"
//               placeholder="Offer"
//               value={offer}
//               onChange={(event) => {
//                 setOffer(event.target.value);
//               }}
//             />
//           </Form.Group>
//           <Button
//             type="submit"
//             variant="success"
//             size="md"
//             style={{ width: 150 }}
//           >
//             Submit
//           </Button>AddFoodItem
import React from 'react'
import axios, { post } from 'axios';

class AddFoodItem extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }

  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  fileUpload(file){
    const url = 'http://localhost:9091/fooditem/fileupload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
   )
  }
}



export default AddFoodItem