import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div class="card w-96 pt-10 mx-auto bg-base-100 shadow-xl">
          <div className='p-2 text-center'>
          <h4 className='text-2xl font-bold'>User Profile</h4>
          </div>
        <div class="card-body text-white bg-primary">
          <h2 class="card-title">{user.displayName}</h2>
          <p>{user.email}</p>
          <div class="card-actions ">
            <button class="btn btn-secondary">contact</button>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;