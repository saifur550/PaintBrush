import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModel = ({items, setItems}) => {
    let [num, setNum]= useState(150);

    const {_id, name, img, price ,description, orderQuantity, availableQuantity } = items;
    const [user] = useAuthState(auth);
    





    const handleBooking = event =>{
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const phone = event.target.phone.value
     
        console.log(name, email, phone , _id);
       


        const booking = {
            itemsId: _id,
            items: name,
            product:event.target.item.value,
            patient: user.email,
            personName: user.displayName,
            phone: event.target.phone.value,
            orderQuantity:event.target.orderQuantity.value,
            price:event.target.price.value
        }

         // setItems(null)

         fetch('https://warm-hamlet-43437.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
             toast('Booking Confirm')
               
            });
           
             setItems(null)
    }

    //  increment
    let incNum =()=>{
        if(num<150)
        {
        setNum(Number(num)+1);
      
        
        }

      };
      // decrement
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
                <img className='mx-auto' style={{width:'200px'}} src={img} alt="" />
          <form onSubmit={handleBooking} >
           
            <div className="card-body items-center text-center">
            <input type="text" name="item" disabled value={name}  className="input input-bordered w-full max-w-xs" />
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