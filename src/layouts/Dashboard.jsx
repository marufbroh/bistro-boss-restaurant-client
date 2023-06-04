import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaBars } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    
    return (
        <div className='container mx-auto border'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-100 text-base-content">
                        {
                            isAdmin ? <>
                                <li><Link><FaHome />Admin Home</Link></li>
                                <li><Link to={"/dashboard/additem"}><FaUtensils />Add an Items</Link></li>
                                <li><Link to={"/dashboard/manageitems"}><FaBars />Manage Items</Link></li>
                                <li><Link><FaBook />Manage Bookings</Link></li>
                                <li><Link to={"/dashboard/allusers"}><FaUsers />All Users</Link></li>
                            </> : <>
                                <li><Link><FaHome />User Home</Link></li>
                                <li><Link><FaCalendarAlt />Reservation</Link></li>
                                <li><Link><FaWallet />Payment History</Link></li>
                                <li><Link to={"/dashboard/mycart"}><FaShoppingCart />My Cart</Link></li>
                            </>
                        }
                        <div className="divider"></div>
                        <li><Link to={"/"}><FaHome />Home</Link></li>
                        <li><Link to={"/menu"}>Menu</Link></li>
                        <li><Link to={"/order/salad"}>Order</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;