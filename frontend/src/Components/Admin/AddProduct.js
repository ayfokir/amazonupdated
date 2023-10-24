import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import { Link} from "react-router-dom";
import Header from '../Header/Header';
import './AddProduct.css'
import Footer from '../Footer/Footer'; 
import { toast } from 'react-toastify'
import  axios  from 'axios';
function EditProduct ()
{
    const [product_title, setProductTitle] = useState("");
    const [product_image, setProductimage] = useState("");
    const [product_price, setProductPrice] = useState("");
    const [product_rating, setProductRating] = useState("");
  //Write a function to handle the form submission  
  function handleSubmit(event) {
    console.log(product_image);
    // Prevent the default behaviour of the form submission
    event.preventDefault();
    const formatData = new FormData();
    formatData.append("image", product_image);
    console.log(formatData);

    // Prepare the data to be sent to the server
    const data = {
      product_title: product_title,
      product_price: product_price,
      product_rating: product_rating
    };
    console.log(data);  

    //Send the data to the server
    const dataUrl = `http://localhost:7000/add-product`;
    const imageUrl = `http://localhost:7000/upload`;
    if ( product_price && product_rating && product_title )
    { 
      console.log("yes ayfo ")
      axios
        .post(dataUrl, data)  
        .then((response) => {
          console.log(response.data);
         toast.success("Product Added Successfully", {
           position: "top-center",
           autoClose: 1000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light"
         } ); 
        })
        .catch((ex) => {
          console.log(ex.message);
        });
        document.getElementById("addProductForm").reset();
      }
    if (product_image)  
    {
      axios
        .post(imageUrl, formatData)
        .then((response) => {
          console.log(response.data);
          alert("Product Added!");
        })
        .catch((ex) => {
          console.log(ex.message);
        });
    }
      
  }
  
    function update() {
  //Prepare the data to be sent to the server
    const data = {
      product_title: product_title,
      product_price: product_price,
      product_rating: product_rating
    };
      console.log( data );
      
    //Send the data to the server
    const dataUrl = `http://localhost:7000/add-product`;
      if ( product_price || product_rating || product_title )
      {
        axios
          .post(dataUrl, data)
          .then((response) => {
            console.log(response.data);
            console.log("temelshalehu");
             toast.success("Product Added Successfully", {
               position: "top-center",
               autoClose: 1000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "light"
             } );
            })
            .catch((ex) => {
              console.log(ex.message);
            });
            document.getElementById("addProductForm").reset();
            
      }
      
      if ( product_image )
      {
        const formatData = new FormData();
        formatData.append("image", product_image);
        console.log(formatData);    
       const imageUrl = `http://localhost:7000/upload`; 
      axios
          .post(imageUrl, formatData)
          .then((response) => {
            console.log(response.data);
            console.log("temelshalehu");
            alert( "Product Image Added Successfully!" );
          })
          .catch((ex) => {
            console.log(ex.message);
          });    
    }
  }
  
useEffect(() => {
  document.getElementById("title").focus();
}, []);
  
  return (
    <>
      <Header />
      <div className="editproductsPage">
     <Sidebar />
        <div className='editproductsPage_edit'>
            <div className='editproductsPage_publish' >
            <Link to="/addmin/products" ><button className='button1'>Go to Products</button></Link>
            <h1 className='h1'>Post Products</h1>
              <button onClick={update} className='button2'>Publish now</button>
            </div>
    <div className='edit_Product'>
      <form onSubmit={handleSubmit} id="addProductForm" >
        <label htmlFor="title"> Product Title</label><br />
        <input type="text" id="title" name="title"  onChange={event => setProductTitle(event.target.value)} /><br />
        <label htmlFor="price">Product Price</label><br />
        <input type="text" id="price" name="price" onChange={event => setProductPrice(event.target.value)} /><br />
        <label htmlFor="rating">Product Rating</label><br />
        <input type="text" id="rating" name="rating"  onChange={event => setProductRating(event.target.value)} /><br /><br />
              {/* <input type="submit" value="Submit" /> */ }
        {/* <div className='image'>
        <label htmlFor="image" >Product Image Link</label><br />
        <input type="text" id="image" name="image" value={product_image} onChange={event => setProductimage(event.target.value)}/>  <br/>
        </div> */}
        <div className='fileInput'>
        <label htmlFor="image">Add Image</label><br />
        <input type="file" id="image" className='addImage' name="image"  onChange={ event => setProductimage( event.target.files[0] ) } />
        </div> <br />
        <button type='submit' className='edit_Product_button'>Add Product</button>
        </form>
          </div>
          
        </div>
        </div>
        <Footer />
    </>
  );
}

export default EditProduct
