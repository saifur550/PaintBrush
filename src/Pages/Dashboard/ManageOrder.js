import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';

const ManageOrder = () => {
    const { data: orders, isLoading, refetch } = useQuery('users', () => fetch('https://warm-hamlet-43437.herokuapp.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
          <div>
          <h4 className='text-center text-purple-800 text-2xl font-bold  py-5'>Manage All Order {orders.length}</h4>
          </div>
          <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           orders.map(order=><OrderRow
                           key={order._id}
                           order={order}
                           refetch={refetch}
                           ></OrderRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default ManageOrder;