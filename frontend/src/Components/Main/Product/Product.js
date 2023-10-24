import React, { useContext, useEffect } from 'react'
import './Product.css';
import { useStatevalue } from '../../StateProvider/Stateprovider';
import { StateContext } from '../../StateProvider/Stateprovider';
import { Link } from 'react-router-dom';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import { IconButton } from "@mui/material";
function Product ( { id, title, image, price, rating, admin } )
{
  // const [ { basket }, dispatch ] = useStatevalue(); or we can use just like below
  const [{ basket }, dispatch] = useContext(StateContext);

  let updated = "/update/" + id;    
  let deleted = "/delete/" + id;    

  function deletes (e){ 
      e.preventDefault();
      fetch(`http://localhost:7000/delete`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
      id: id
    })
  }).then((response) => {
    response.json();
    console.log(response);
    toast.success("Product Deleted Successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });  
  });
    setTimeout( () =>
    {
      window.location.reload( false );
   
    }, 800 )
}








  // console.log("this is the basket"+ basket)
  //useStatevalue(): used to push and pull
  //dispatch: push
  //basket: pull (consume data)
  const addToBasket = () => {
    dispatch({
      // click sinareg happen yemetareg, dispach(action)
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className='title'>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price} </strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      {!admin ? (
        <button onClick={addToBasket}>Add to Basket</button>
      ) : (
        <div className="update_and_delete">
          <Link to={updated}>
              <button className="update">
                
              <IconButton>
                <EditIcon sx={{ color: "green" }} className="editIcon" />
              </IconButton>
            </button>
          </Link>
          <button className="delete" onClick={deletes}>
            <DeleteIcon sx={{ color: "red" }} className="deleteIcon" />{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default Product




