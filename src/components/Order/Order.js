import React from 'react';
import OrderItem from './OrderItem';
import { OrderContainer, TopContainer, BottomContainer } from './styles';

const Order = props => {

    const { agency, campaign, items } = props;
    const { unit_number, street_number, street_name, suburb_name } = campaign;

    console.log(items);

    return (
        <OrderContainer>
            <TopContainer>
                <p>{agency} - {unit_number}{unit_number && '/'}{street_number} {street_name}, {suburb_name}</p>
            </TopContainer>
            {items.map(item => (
                <OrderItem
                    key={item.id}
                    item={item}
                />
            ))}
        </OrderContainer>
    )
}

export default Order;