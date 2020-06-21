import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Order from '../Order/Order';

// mocked object from rails app
// const response = [
//     {
//     "id": 1,
//     "agency": {
//         "id": 1,
//         "title": "Ray White Chatswood"
//     },
//     "status": {
//         "id": 2,
//         "title": "Approved"
//     },
//     "campaign": {
//         "id": 1,
//         "unit_number": 4,
//         "street_number": 221,
//         "street_name": "Pacific Highway",
//         "suburb_name": "Chatswood"
//     },
//     "title": "A4 Brochures",
//     "quantity": 100
//     }
// ]
const Orders = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const getOrders = async () => {
            const response = await axios.get(process.env.REACT_APP_API + '/orders');
            setData(response.data);
        }
        getOrders();
    }, []);

    return (
        <>
            <h1>Orders</h1>
            {data.map(order => (
                <Order
                    key={order.id}
                    id={order.id}
                    agency={order.agency.title}
                    status={order.status.title}
                    campaign={order.campaign}
                    product={order.title}
                    quantity={order.quantity}
                />
            ))}
        </>
    )
}

export default Orders;