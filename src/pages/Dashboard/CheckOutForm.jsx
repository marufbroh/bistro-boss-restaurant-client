import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const CheckOutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");

    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user.email || "unknown",
                        name: user.displayName || "anonymous",
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError)
        }

        console.log(paymentIntent);
        setProcessing(false)
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id)
        }

    }
    return (
        <form className='w-2/3' onSubmit={handleSubmit}>
            <CardElement
                className='border p-5'
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {cardError && <p className='text-red-600'>{cardError}</p>}
            {transactionId && <p className='text-green-600'>Payment succeeded with transaction Id {transactionId}</p>}
            <button className='btn btn-wide mt-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form >
    );
};

export default CheckOutForm;