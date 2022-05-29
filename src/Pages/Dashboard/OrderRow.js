import React from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({order, refetch}) => {
    const { email, role  } = order;
    const setAdmin = () => {
        fetch(`https://warm-hamlet-43437.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(` set an  admin`);
                }

            })
    }
    return (
        <tr>
            <th>*</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={setAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn   btn-xs">Remove user</button></td>
        </tr>
    );
};

export default OrderRow;