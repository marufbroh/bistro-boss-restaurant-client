import React, { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../../components/FoodCard';
import OrderTab from './OrderTab';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Cover img={orderCover} title={"OUR SHOP"} subTitle={"Would you like to try a dish?"} />
            <div className='container mx-auto my-12'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="tabs">
                        <Tab className="tab tab-lifted">Salad</Tab>
                        <Tab className="tab tab-lifted">Pizza</Tab>
                        <Tab className="tab tab-lifted">Soup</Tab>
                        <Tab className="tab tab-lifted">Desserts</Tab>
                        <Tab className="tab tab-lifted">Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}/>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default Order;