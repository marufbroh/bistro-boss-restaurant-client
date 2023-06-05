import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../hooks/useCart';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>
            <div className='w-full'>
                <SectionTitle heading={"Payment"} subHeading={"---please process---"} />
                <Elements stripe={stripePromise}>
                    <CheckOutForm price={price} />
                </Elements>
            </div>
        </>

    );
};

export default Payment;