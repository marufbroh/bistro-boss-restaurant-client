import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Helmet } from 'react-helmet-async';

const Payment = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>
            <div className='w-full'>
                <SectionTitle heading={"Payment"} subHeading={"---please process---"} />
            </div>
        </>

    );
};

export default Payment;