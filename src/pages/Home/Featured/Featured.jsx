import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-sec bg-fixed my-12 py-12 text-white">
            <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"} />
            <div className='flex flex-col lg:flex-row justify-center items-center gap-12 container mx-auto bg-black bg-opacity-60 rounded-lg p-4'>
                <div className='lg:w-1/2'>
                    <img className='rounded-lg' src={featuredImg} alt="" />
                </div>
                <div className='lg:w-1/2'>
                    <p>March 20, 2023</p>
                    <p className='uppercase'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsum possimus, mollitia odio odit, beatae qui maxime autem perferendis quasi tempora voluptate? Deleniti quo itaque consequatur. Aspernatur harum asperiores rem fugiat animi voluptas facilis corrupti nam, velit obcaecati voluptates distinctio recusandae, dolorem assumenda explicabo quo reprehenderit nihil magni iure. Temporibus.</p>
                    <button className="btn btn-outline mt-6 border-0 border-b-4 text-white">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;