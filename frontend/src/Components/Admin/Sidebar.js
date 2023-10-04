import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom'
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockPersonIcon from "@mui/icons-material/LockPerson";
const Sidebar = () =>
{
    return (
      <div className="sidebar">
        <ul>
          <Link
            to="/addmin"
            className="sidebar_part"
            style={{ textDecoration: "none" }}
          >
            <HouseSidingIcon />
            <li>Dashboard</li>
          </Link>
          <Link to="/addmin/products" className="sidebar_part">
            <EnhancedEncryptionIcon />
            <li>Products</li>
          </Link>
          <Link to="/addmin/postProducts" className="sidebar_part">
            <ShoppingCartIcon />
            <li>Add Products</li>
          </Link>
          <Link to="/addmin/orders" className="sidebar_part">
            <LockPersonIcon />
            <li>Orders</li>
          </Link>
        </ul>
      </div>
    );
}

export default Sidebar;
