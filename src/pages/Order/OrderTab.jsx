import React from 'react';
import FoodCard from '../../components/FoodCard';

const OrderTab = ({items}) => {
    console.log(items);
    return (
        <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
            {
                items.map((item) => <FoodCard key={item._id} item={item} />)
            }
        </div>
    );
};

export default OrderTab;