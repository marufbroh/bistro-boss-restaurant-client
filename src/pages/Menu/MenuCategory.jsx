import React from 'react';
import MenuItem from '../Shared/MenuItem';
import Cover from '../Shared/Cover';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className='my-12'>

            {title && <div className='my-12'>
                <Cover img={coverImg} title={title} />
            </div>}

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto'>
                {
                    items.map((menuItem, index) => <MenuItem key={index} menuItem={menuItem} />)
                }
            </div>
        </div>
    );
};

export default MenuCategory;