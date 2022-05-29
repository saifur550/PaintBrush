import React from 'react';

const OrderRow = ({order}) => {
    const { email } = order;
    return (
        <tr>
            <th>*</th>
            <td>{email}</td>
            <td><button class="btn  btn-outline">Remove User</button></td>
        </tr>
    );
};

export default OrderRow;