import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = ({tool, setItems}) => {
    const navigate = useNavigate();

    return (
        <div className="card  lg:max-w-lg bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={tool.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{tool.name.slice(0,23)}</h2>
                <p>{tool.description.slice(0,92)}</p>
                <h4>Order Quantity: {tool.orderQuantity}</h4>
                <h4>Available Quantity : {tool.availableQuantity}</h4>
                <h4>Price : {tool.price}</h4>
                 <button onClick={()=>navigate("/purchase")} className="btn btn-primary btn-block"> 
                 Details
                  </button>
            </div>
        </div>
    );
};

export default Tool;