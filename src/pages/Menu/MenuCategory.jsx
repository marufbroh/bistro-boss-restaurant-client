import React from 'react';
import MenuItem from '../Shared/MenuItem';
import Cover from '../Shared/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className='my-12'>

            {title && <div className='my-12'>
                <Cover img={coverImg} title={`${title}s`} />
            </div>}

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto'>
                {
                    items.map((menuItem, index) => <MenuItem key={index} menuItem={menuItem} />)
                }
            </div>
            <div className='text-center'>
                <Link to={`/order/${title}`} className="btn btn-outline mt-6 border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</Link>
            </div>
        </div>
    );
};

export default MenuCategory;