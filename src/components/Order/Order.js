import React, { useState } from 'react';
import axios from 'axios';
import { TopContainer, BottomContainer } from './styles';

const Order = props => {
    const [status, setStatus] = useState(props.status);
    const { id, agency, campaign, product, quantity } = props;
    const { unit_number, street_number, street_name, suburb_name } = campaign;

    const handleDownload = () => {
        console.log(`download artwork for ${id}`)
    }

    const changeStatus = async () => {
        const response = await axios.get(process.env.REACT_APP_API + `/order/${id}/status`);
        setStatus(response.data)
    }

    return (
        <>
            <TopContainer>
                <p>{agency} - {unit_number}/{street_number} {street_name}, {suburb_name}</p>
            </TopContainer>
            <BottomContainer status={status}>
                <p>{quantity} x {product}</p>
                <p><span onClick={handleDownload}>Download Artwork</span> | <span onClick={changeStatus}>Change status</span> | <span>{status}</span></p> 
            </BottomContainer>
        </>
    )
}

export default Order;