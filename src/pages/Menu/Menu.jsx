import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title={"our menu"} subTitle={"Would you like to try a dish?"} />
            <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"} />
            {/* offered menu items */}
            <MenuCategory items={offered} />
            {/* dessert menu items */}
            <MenuCategory items={dessert} title={"dessert"} coverImg={dessertImg} />
            {/* pizza menu items */}
            <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImg} />
            {/* salad menu items */}
            <MenuCategory items={salad} title={"salad"} coverImg={saladImg} />
            {/* soup menu items */}
            <MenuCategory items={soup} title={"soup"} coverImg={soupImg} />
        </div>
    );
};

export default Menu;