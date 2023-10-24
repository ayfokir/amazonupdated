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
            to="/admin"
            className="sidebar_part"
            style={{ textDecoration: "none" }}
          >
            <HouseSidingIcon />
            <li>Dashboard</li>
          </Link>
          <Link to="/admin/products" className="sidebar_part">
            <EnhancedEncryptionIcon />
            <li>Products</li>
          </Link>
          <Link to="/admin/postProducts" className="sidebar_part">
            <ShoppingCartIcon />
            <li>Add Products</li>
          </Link>
          <Link to="/admin/orders" className="sidebar_part">
            <LockPersonIcon />
            <li>Orders</li>
          </Link>
        </ul>
      </div>
    );
}

export default Sidebar;
