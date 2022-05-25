import React from 'react';
import { useState } from 'react';
const BookingModel = ({items, setItems}) => {
    const[number, setNumber] = useState(100)

    const {name, img, price ,description, orderQuantity, availableQuantity } = items;
    


 
    const handleIncrement =()=>{
        console.log('click increment');  
       
  }

    const handleDecrement =()=>{
        console.log('click Decrement'); 
        
    }


    const handleBooking = event =>{
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const phone = event.target.phone.value
     
        console.log(name, email, phone);
        // setItems(null)

    }

    return (
        <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
       
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">

                <div className="card p-5 bg-yellow-300 ">
                <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h4 className='text-2xl text-primary font-bold text-center fonts-bold'>Purchase item : {name.slice(0,20)} </h4>
          <form onSubmit={handleBooking} >
           
            <div className="card-body items-center text-center">
            <input type="text" name="name" placeholder='Name'  className="input input-bordered w-full max-w-xs" />
            <input type="text" name="email" placeholder='Email'  className="input input-bordered w-full max-w-xs" />
            <input type="number" name="phone" placeholder='phone'  className="input input-bordered w-full max-w-xs" />
            <label htmlFor="">Available Quantity:</label>
            <input type="number" disabled value={availableQuantity}  name="availableQuantity" className='input input-bordered w-full max-w-xs'  />
            <label htmlFor="">Order Quantity:</label>
            <div className="flex">
            <button onClick={()=> handleIncrement()} className='btn mr-5 btn-circle'>+</button>
            <input type="number"   name="orderQuantity"  className='input input-bordered w-full max-w-xs' />
            <button onClick={() => handleDecrement()} className='btn ml-5 btn-circle'>-</button>
            </div>
            <input type="text" name="price" disabled value={price}  className='input input-bordered w-full max-w-xs' />
            <input type="submit" value="Submit" className="btn btn-white w-full max-w-xs" />
         
            </div>
          </form>
        </div>
            </div>
        </div>
    </div>
    );
};

export default BookingModel;