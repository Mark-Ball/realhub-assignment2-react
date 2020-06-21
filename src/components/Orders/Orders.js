import React, { useEffect } from 'react';
import axios from 'axios';
import Order from '../Order/Order';

// mocked object from rails app
const response = [
    {
    "id": 1,
    "agency": {
        "id": 1,
        "title": "Ray White Chatswood"
    },
    "status": {
        "id": 2,
        "title": "Approved"
    },
    "campaign": {
        "id": 1,
        "unit_number": 4,
        "street_number": 221,
        "street_name": "Pacific Highway",
        "suburb_name": "Chatswood"
    },
    "title": "A4 Brochures",
    "quantity": 100
    }
]
const Orders = () => {
    // useEffect(async () => {
    //     const r = await axios.get('http://localhost:3000/orders');
    //     console.log(r);
    //     // also need to fix CORS in rails app
    // })

    return (
        <>
            <h1>Orders</h1>
            {response.map(order => (
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