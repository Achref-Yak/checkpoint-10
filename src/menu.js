import React from 'react';
import {Route,Link, BrowserRouter} from "react-router-dom";

const Menu = ()=>{
    return (<div className="menu">
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/friends">friends</Link></li>
          <li><Link to="/profile">profile</Link></li>
      </ul>
    </div>)
  }

export default Menu;