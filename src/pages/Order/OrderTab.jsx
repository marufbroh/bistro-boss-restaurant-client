import React from 'react';
import FoodCard from '../../components/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
            {
                items.map((item, index) => <FoodCard key={index} item={item} />)
            }
        </div>
    );
};

export default OrderTab;