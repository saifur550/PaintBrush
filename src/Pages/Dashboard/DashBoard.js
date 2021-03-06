import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../../hooks/UseAdmin';

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdmin(user);
    return (
        <div class="drawer  max-w-7xl mx-auto  drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
                <h2 className='text-2xl font-bold ms-10 text-center'>Welcome to your paint brush </h2>
                <Outlet></Outlet>
            </div>
        <div class="drawer-side ml-10  bg-yellow-500 h-5/6 rounded mr-10">
          <label for="dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-40  side-clr ">
            {/* <!-- Sidebar content here --> */}
            <li className='mb-2' ><Link to="/dashboard">My Order</Link></li>
            <li className='mb-2' ><Link to="/dashboard/addReview"> Add Review</Link></li>
            <li className='mb-2' ><Link to="/dashboard/myProfile"> My Profile</Link></li>
            {admin && <li className='mb-2' ><Link to="/dashboard/manageOrder"> Manage All Orders</Link></li>}
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;