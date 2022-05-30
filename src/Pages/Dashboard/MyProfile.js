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
          <h2 class="card-title"> User Name : {user.displayName}</h2>
          <p> User Email: {user.email}</p>
         
          <div>
            <label htmlFor="">Education:</label>
            <input type="text" placeholder="Type here" class="input text-black input-bordered w-full max-w-xs" />
          </div>
          <div>
            <label htmlFor="">Location:</label>
            <input type="text" placeholder="Type here" class="input text-black input-bordered w-full max-w-xs" />
          </div>
          <div>
            <label htmlFor="">Number:</label>
            <input type="text" placeholder="Type here" class="input text-black input-bordered w-full max-w-xs" />
          </div>
          <div>
            <label htmlFor="">PhotoUrl:</label>
            <input type="file" placeholder="Type here" class="input text-black input-bordered w-full max-w-xs" />
          </div>
          <div className='text-center mt-2'>
          <button class="btn btn-wide btn-secondary">submit</button>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;