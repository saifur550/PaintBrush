import React from 'react';
import img  from '../../Assets/link/user.jpeg'
import img1  from '../../Assets/link/project-1.png'
import img2  from '../../Assets/link/project-5.png'
import img3  from '../../Assets/link/project-3.png'

const MyPortfolio = () => {
    return (<> 
        <div className=' h-screen max-w-7xl mx-auto px-10'>
            <div class="hero min-h-screen bg-gray-100">
  <div class="hero-content flex-col lg:flex-row">
    <img  style={{width:'500px'}} src={img} />
    <div>
      <h1 class="text-5xl font-bold">Hello, I’m Saifur Rahman</h1>
      <p class="py-6">Passionate to work as a MERN Stack Web Developer for a software firm where I can leverage my talents in Web Design, Front-End and Back-End Web Development to give excellent customer service..</p>
      <button class="btn btn-primary">Contact</button>
    </div>
  </div>
</div>
        </div>

        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3">
        <div class=" bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-2xs title-font font-medium text-gray-400 mb-1">project-1</h2>
        <img style={{height:'500px'}} className='mx-auto'  src={img1} alt="" />
        <div className='mt-5'>
            <a className='text-primary font-bold' target="_blank" href="https://email-password-auth-413ec.web.app/">Live Link</a>
        </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class=" bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-2xs title-font font-medium text-gray-400 mb-1">project-2</h2>
        <img style={{height:'500px'}} className='mx-auto' src={img2} alt="" />
        <div className='mt-5'>
            <a className='text-primary font-bold' target="_blank" href="https://manage-a-simple-development.web.app/">Live Link</a>
        </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class=" bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-2xs title-font font-medium text-gray-400 mb-1">project-3</h2>
        <img style={{height:'500px'}} className='mx-auto' src={img3} alt="" />
        <div className='mt-5'>
            <a className='text-primary font-bold' target="_blank" href="https://saifurassignment03.netlify.app/">Live Link</a>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
};

export default MyPortfolio;