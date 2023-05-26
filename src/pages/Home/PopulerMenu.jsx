import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import MenuItem from '../Shared/MenuItem';

const PopulerMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const populerMenu = data.filter(item => item.category === 'popular');
                setMenu(populerMenu)
            })
    }, [])
    // console.log(menu);
    return (
        <section className='container mx-auto my-12'>
            <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"} />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    menu.map((menuItem, index) => <MenuItem key={index} menuItem={menuItem} />)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline mt-6 border-0 border-b-4">View full menu</button>
            </div>
        </section>
    );
};

export default PopulerMenu;