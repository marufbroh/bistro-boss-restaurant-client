import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useMenu from '../../hooks/useMenu';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Manage Items</title>
            </Helmet>
            <div className='w-full h-full px-10'>
                <SectionTitle heading={"MANAGE ALL ITEMS"} subHeading={"---Hurry Up!---"} />
                <h3 className='text-3xl font-semibold mb-2'>Total Items {menu.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button className="btn btn-warning"><FaRegEdit /></button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-error"><FaTrashAlt /></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default ManageItems;