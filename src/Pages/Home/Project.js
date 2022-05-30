import React from "react";
import projet1 from '../../Assets/Project/a4.jpeg'
import projet2 from '../../Assets//Project/a1.jpg'
import projet3 from '../../Assets/Project/a2.jpg'
import projet4 from '../../Assets/Project/project4.jpeg'
import projet5 from '../../Assets/Project/project1.jpeg'
import projet01 from '../../Assets/Project/a3.jpeg'
import projet02 from '../../Assets/Project/project3.jpeg'
import projet03 from '../../Assets/Project/project3.jpeg'
import projet04 from '../../Assets/Project/project3.jpeg'

const Project = () => {
  return (


    <>
   <div className="mt-28 text-center mb-5">
   <h4 className="text-primary    text-4xl font-bold uppercase">Our Recent Project </h4>
    <p className="mb-10"></p>
   </div>
    <div className="hero project-bg min-h-screen">
      <div className=" bg-opacity-60">
        
      </div>
      <div className="hero-content text-center text-neutral-content">
         
      <section className="overflow-hidden text-gray-100 ">
  <div className="container mb-28 px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={projet1}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
           src={projet2}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={projet3}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={projet4}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
             src={projet5}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
             src={projet01}/>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    </div>
    </>
  );
};

export default Project;
