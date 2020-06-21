import React from 'react';

const Order = props => {
    const { id, agency, status, campaign, product, quantity } = props;
    const { unit_number, street_number, street_name, suburb_name } = campaign;

    const handleDownload = () => {
        console.log(`download artwork for ${id}`)
    }

    const changeStatus = () => {
        console.log(`change status for ${id}`)
    }

    return (
        <>
            <p>{agency} - {unit_number}/{street_number} {street_name}, {suburb_name}</p>
            <p onClick={handleDownload}>Download Artwork</p> | <p onClick={changeStatus}>Change status</p> | <p>{status}</p>
            <p>{quantity} x {product}</p>
        </>
    )
}

export default Order;