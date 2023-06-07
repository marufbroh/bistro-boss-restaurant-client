import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import SectionTitle from '../../components/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://bistro-boss-server-gray-seven.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='container mx-auto my-12'>
            <SectionTitle subHeading={"---What Our Clients Say---"} heading={"TESTIMONIALS"} />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map(review => <SwiperSlide key={review._id}>
                    <div className='text-center p-8 lg:p-24 flex flex-col justify-center items-center space-y-6'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <p>{review.details}</p>
                        <h4 className='text-2xl font-bold text-yellow-500'>{review.name}</h4>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </section>
    );
};

export default Testimonials;