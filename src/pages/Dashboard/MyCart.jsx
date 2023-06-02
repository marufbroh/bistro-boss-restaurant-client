import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../hooks/useCart';
import SectionTitle from '../../components/SectionTitle';
import { FaTrashAlt } from 'react-icons/fa';

const MyCart = () => {
    const [cart] = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            {/* <SectionTitle subHeading={"---My Cart---"} heading={"WANNA ADD MORE?"} /> */}
            <div className='flex justify-evenly font-semibold uppercase items-center mb-3'>
                <h3 className='text-3xl'>Total Oders: {cart.length}</h3>
                <h3 className='text-3xl'>Total Price: ${total}</h3>
                <button className='btn btn-warning btn-sm'>Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td className='text-end'>{item.price}</td>
                                <td>
                                    <button className="btn btn-warning btn-xs"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;