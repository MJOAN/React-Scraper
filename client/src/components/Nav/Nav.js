import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top" style={{ "background-color": "#20315A" }} >
    <div className="container-fluid">	
    <h1 class="text-center" style={{ 'color': '#fff' }} ><strong><i class="fa fa-newspaper-o"></i> New York Times Search</strong></h1>             

      <div className="navbar-header">
         <Link className="navbar-brand" to="/">
		</Link>          
         <ul className="nav navbar-nav navbar-right">
           <li>
             <Link to="/">Search</Link>
           </li>
           <li>
             <Link to="/saved">Saved Articles</Link>
           </li>
         </ul>
       </div>
      </div>
    </nav>;


export default Nav;
