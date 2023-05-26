import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopulerMenu from './PopulerMenu';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopulerMenu />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;