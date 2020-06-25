import React, { useState } from 'react';
import { BottomContainer } from './styles';
import axios from 'axios';

const OrderItem = props => {
    const [status, setStatus] = useState(props.status);
    const { item, statuses } = props;
    const { id, title, quantity, artwork_id, status_id } = item;

    const handleDownload = async () => {
        const response = await axios.get(process.env.REACT_APP_API + `/artwork/url/${artwork_id}`);
        window.location = response.data;
    }

    const handleSelect = async event => {
        const response = await axios.post(process.env.REACT_APP_API + `/order_items/${id}/change_status`,
            { status: event.target.value }
        );
        console.log(response);
    }

    return (
        <BottomContainer>
            <p>{quantity} x {title}</p>
            <p>{artwork_id && <span onClick={handleDownload}>Download Artwork</span>}
                {artwork_id && ' | '}
            </p>
            <select onChange={handleSelect}>
                {statuses.map((s, index) => (
                    <option key={index} value={index}>{s.title}</option>
                ))}
            </select>
        </BottomContainer>
    )
}

export default OrderItem;