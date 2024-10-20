import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

import "../CSS/Navbar/dropdown.css";

export default function Dropdown() {
    const [down, setDown] = useState(false);


    const showdown = ()=> {
        setDown(true);
    }

    const hidedown = ()=> {
        setDown(false);
    }


    // console.log(userId);

  return (
    <div>
      <div className="account" onMouseEnter={showdown} onMouseLeave={hidedown}>
        
      <li>My Account</li>
      
      {(down) ? 
      <>
      <div className="list" onMouseEnter={showdown}>
          <ul>
            {/* <li> */}

              {/* <NavLink to="/profile"> */}
                <li>Profile</li>
                {/* </NavLink> */}
            {/* </li> */}
            <hr />

            
                {/* <NavLink to="/" onClick={logout}> */}
                <li>Log Out</li>
                {/* </NavLink> */}
                
              {/* <Link to={"/"}>Log Out</Link> */}
            
          </ul>
        </div>
        </>
         : 
        null}
      
        </div>
    </div>
  );
}
