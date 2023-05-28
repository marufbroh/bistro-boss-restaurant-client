import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopulerMenu from './PopulerMenu';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <PopulerMenu />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;