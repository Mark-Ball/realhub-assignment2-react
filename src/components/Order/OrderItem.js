import React, { useState } from 'react';
import { BottomContainer } from './styles';
import axios from 'axios';

const OrderItem = props => {
    const { item, statuses } = props;
    const { id, title, quantity, artwork_id, status_id } = item;
    const [status, setStatus] = useState(statuses[status_id - 1]);

    const handleDownload = async () => {
        const response = await axios.get(process.env.REACT_APP_API + `/artwork/url/${artwork_id}`);
        window.location = response.data;
    }

    const handleSelect = async event => {
        const statusId = event.target.value;
        const response = await axios.post(process.env.REACT_APP_API + `/order_items/${id}/change_status`,
            { status: statusId }
        );
        setStatus(() => {
            if (response.data) {
                return statuses[statusId - 1];
            }
        });
    }

    return (
        <BottomContainer>
            <p>{quantity} x {title}</p>
            <div>
                {artwork_id && <span onClick={handleDownload}>Download Artwork</span>}
                {<select value={status.id} onChange={handleSelect}>
                    {statuses.map((s, index) => (
                        <option 
                            key={index}
                            value={index + 1}
                        >
                            {s.title}
                        </option>
                    ))}
                
                </select>}
            </div>
        </BottomContainer>
    )
}

export default OrderItem;