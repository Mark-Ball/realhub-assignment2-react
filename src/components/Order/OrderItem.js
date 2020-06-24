import React, { useState } from 'react';
import { BottomContainer } from './styles';
import axios from 'axios';

const OrderItem = props => {
    const [status, setStatus] = useState(props.status);
    const { item } = props;
    const { id, title, quantity, artwork_id, status_id } = item;

    const handleDownload = async () => {
        const response = await axios.get(process.env.REACT_APP_API + `/artwork/url/${artwork_id}`);
        window.location = response.data;
    }

    const changeStatus = async () => {
        const response = await axios.get(process.env.REACT_APP_API + `/order/${id}/status`);
        setStatus(response.data)
    }

    return (
        <BottomContainer>
            <p>{quantity} x {title}</p>
            <p>{artwork_id && <span onClick={handleDownload}>Download Artwork</span>}
                {artwork_id && ' | '}
                <span onClick={changeStatus}>Change status</span> | <span>{status}</span></p> 
        </BottomContainer>
    )
}

export default OrderItem;