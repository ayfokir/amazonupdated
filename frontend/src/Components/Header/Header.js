import React, { useContext, useState } from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import AmazonLogo from '../../CommonResource/Icons/amazon-logo.png'
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
 import DehazeIcon from "@mui/icons-material/Dehaze";
import { Link } from 'react-router-dom';
import { StateContext, useStatevalue } from '../StateProvider/Stateprovider';
import { auth } from '../Firbase';
import SubNavbaratSmallDevice from './SubNavbaratSmallDevice';
function Header ()
{
  // const [ { basket, user }, dispatch ] = useStatevalue();   
  const [ state, dispatch ] = useContext( StateContext );
  const [ value, setValue ] = useState( false )
  
  const handleAuthentication = () =>
  {
    if ( state.user)
    {
      auth.signOut();
  }   
  }
  const handleNavbar = () =>
  {
    console.log( "yes you clicked" )
    
    if ( !value )
    {
      setValue((value) => (value = true));
    }
    else
    {
       setValue((value) => (value = false));
    }

    console.log( value );

  }

// ke data layer mamecha below
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header__logo" src={AmazonLogo} />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className= {`header__nav`} >
          <Link to={!state.user && "/login"} style={{ textDecoration: "none" }}>
            <div className="header__option" onClick={handleAuthentication}>
              <span className="header__optionLineOne">
                Hello {state.user ? state.user.email : "Gust"}
              </span>
              <span className="header__optionLineTwo">
                {state.user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Return </span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your </span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {state.basket.length}
              </span>
            </div>
          </Link>
        </div>

        <div className="dehazeIcon">
          {<DehazeIcon onClick={handleNavbar} />}
        </div>
      </div>
      {
        value? <SubNavbaratSmallDevice /> : ""
      }

    </>
  );
}

export default Header




