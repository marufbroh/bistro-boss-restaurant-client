import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()


    const handleAddToCart = (item) => {
        // console.log(item);
        if (user) {
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(item)
            })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item successfully added',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                    
                })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                }
              })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className='relative'>
                <img src={image} alt="Shoes" className="rounded-xl w-full h-64" />
                <div className="badge absolute top-5 right-5">${price}</div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 mt-6 border-0 border-b-4">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;