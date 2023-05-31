import React from 'react';

const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className='relative'>
                <img src={image} alt="Shoes" className="rounded-xl w-full h-64" />
                <div className="badge absolute top-5 right-5">${price}</div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                <button className="btn btn-outline bg-slate-100 mt-6 border-0 border-b-4">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;