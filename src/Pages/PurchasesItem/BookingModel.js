import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const BookingModel = ({items, setItems}) => {
    let [num, setNum]= useState(150);

    const {name, img, price ,description, orderQuantity, availableQuantity } = items;
    const [user, loading, error] = useAuthState(auth);
    





    const handleBooking = event =>{
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const phone = event.target.phone.value
     
        console.log(name, email, phone);
        // setItems(null)

    }

    // 
    let incNum =()=>{
        if(num<150)
        {
        setNum(Number(num)+1);
      
        
        }

      };
      let decNum = () => {
         if(num>0)
         {
          setNum(num - 1);
         }
      }

      let handleChange = (e)=>{
        setNum(e.target.value);
       }


    return (
        <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
       
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">

                <div className="card p-5 bg-yellow-300 ">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h4 className='text-2xl text-primary font-bold text-center fonts-bold'>Purchase item : {name.slice(0,20)} </h4>
          <form onSubmit={handleBooking} >
           
            <div className="card-body items-center text-center">
            <input type="text" name="name" disabled value={user?.displayName || ' '}  className="input input-bordered w-full max-w-xs" />
            <input type="text" name="email" disabled value={user?.email || ' '}  className="input input-bordered w-full max-w-xs" />
            <input type="number" name="phone" placeholder='phone'  className="input input-bordered w-full max-w-xs" />
            <label htmlFor="">Available Quantity:</label>
            <input type="number" disabled value={availableQuantity}  name="availableQuantity" className='input input-bordered w-full max-w-xs'  />
            <label htmlFor="">Order Quantity:</label>
            <div className="flex">
            <button onClick={incNum} className='btn mr-5 btn-circle'>+</button>
            <input type="number"   name="orderQuantity" value={num} onChange={handleChange} className='input input-bordered w-full max-w-xs' />
            <button onClick={decNum} className='btn ml-5 btn-circle'>-</button>
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