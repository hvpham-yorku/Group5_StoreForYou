import React from "react";
import data from "./product.json";
import './ProductInfo.css'

function ProductInfo(){
    return(
        <div className="showinfo">
            {data.map((info)=>(
                <div key={info.num} className="datainfo">
                    <a href="/detail">
                    <img src={info.Image} alt='null' className="picture"></img>
                    </a><div className="name">{info.Name}</div>
                    <div className="price">{info.Price}</div>
                    
                </div>
            )
            )
            }

        </div>


    );

}

export default ProductInfo;