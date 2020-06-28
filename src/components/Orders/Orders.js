import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Order from '../Order/Order';

const Orders = () => {
    const [data, setData] = useState([]);
    const [statuses, setStatuses] = useState([]);
    
    useEffect(() => {
        const getOrders = async () => {
            const response = await axios.get(process.env.REACT_APP_API + '/orders');
            setData(response.data);
        }

        const getStatuses = async () => {
            const response = await axios.get(process.env.REACT_APP_API + '/statuses');
            setStatuses(response.data);
        }
        getOrders();
        getStatuses();
    }, []);

    return (
        <>
            <h1>Orders</h1>
            {!(statuses.length && data.length) ? 
                <h2>Loading...</h2>
            :
                data.map(order => (
                    <Order
                        key={order.id}
                        agency={order.agency.title}
                        campaign={order.campaign}
                        items={order.items}
                        statuses={statuses}
                    />
                ))
            }
        </>
    )
}

export default Orders;