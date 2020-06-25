import React from 'react';
import OrderItem from './OrderItem';
import { OrderContainer, TopContainer } from './styles';

const Order = props => {
    const { agency, campaign, items, statuses } = props;
    const { unit_number, street_number, street_name, suburb_name } = campaign;

    return (
        <OrderContainer>
            <TopContainer>
                <p>{agency} - {unit_number}{unit_number && '/'}{street_number} {street_name}, {suburb_name}</p>
            </TopContainer>
            {items.map(item => (
                <OrderItem
                    key={item.id}
                    item={item}
                    statuses={statuses}
                />
            ))}
        </OrderContainer>
    )
}

export default Order;