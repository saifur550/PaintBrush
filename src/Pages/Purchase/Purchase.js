import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BookingModel from '../PurchasesItem/BookingModel';
import PurchaseItem from './PurchaseItem';


const Purchase = () => {
    const [tools, setTools] = useState([])
    const [items, setItems] = useState(null)

    useEffect( ()=>{
        fetch('https://warm-hamlet-43437.herokuapp.com/tool')
        .then(res=>res.json())
        .then(data=> setTools(data))
        
    }, [])
    return (
        <div className="bg-purple-100 py-28">
            <div className=' max-w-7xl mx-auto px-12'>
        <div className='text-center '>
            <h3 className='text-primary  text-4xl font-bold uppercase'>Our Tools</h3>
            <h4 className='text-1xl my-5'> Specially developed for DIY decorators, <br />
             the success of  has always been down to how we continually develop products to meet your needs.</h4>
        </div>
        <div className='grid mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                tools.map(tool =><PurchaseItem
                    key={tool._id}
                    tool={tool}
                    setItems={setItems}
                ></PurchaseItem>)
            }
        </div>
        {
            items && <BookingModel
             items={items}
             setItems={setItems}
             ></BookingModel>
        }
    </div>
       </div>
    );
};

export default Purchase;