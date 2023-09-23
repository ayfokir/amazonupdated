import React, { useContext } from 'react'
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from 'react-router-dom';
import './SubNavbaratSmallDevice.css'
import {auth} from '../Firbase'
import { StateContext } from '../StateProvider/Stateprovider';
function SubNavbaratSmallDevice ({value})
{
      const [state, dispatch] = useContext(StateContext);

      const handleAuthentication = () => {
        if (state.user) {
          auth.signOut();
        }
      };
  return (
    <>
      <div className="ayfo">
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
    </>
  );
}

export default SubNavbaratSmallDevice


