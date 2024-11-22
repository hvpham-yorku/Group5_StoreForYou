import React from "react";
import './Menu.css';

function Menu(){
    return(
        
            <div className="menu">
                <span ><a href="/home"><img id='home' src='/home.jpg' alt='null'></img></a></span>
                <span><a href="/login"><img id='login' src='/login.jpg' alt='null'></img> </a>  </span>
                <span><a href="/cart"><img id='cart' src='/cart.jpg' alt='null'></img> </a>     </span>
                <span><a href="/menu"><img id='menu' src='/menu.jpg' alt='null'></img>  </a>    </span>
        



             </div>
     
    );


}

export default Menu;