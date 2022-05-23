import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Tool from './Tool';

const Tools = () => {

    const [tools, setTools] = useState([])

    useEffect( ()=>{
        fetch('fake.json')
        .then(res=>res.json())
        .then(data=> setTools(data))
        
    }, [])

    return (
        <div className='my-28'>
        <div className='text-center'>
            <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
            <h2 className='text-4xl'>Services We Provide : {tools.length}</h2>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                tools?.slice(0,6)?.map(tool =><Tool
                    key={tool._id}
                    tool={tool}
                ></Tool>)
            }
        </div>
    </div>
    );
};

export default Tools;