import React, { useContext, useEffect, useRef, useState } from 'react';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin';


const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);
    const navigate = useNavigate()
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        // console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    const onSubmit = data => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://bistro-boss-server-gray-seven.vercel.app/users', {
                            method: "POST",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Profile Updated',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate("/")
                                }
                            })

                    }).catch((error) => {
                        // An error occurred
                        console.log(error);
                    });

            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" {...register("name", { required: true })} placeholder="your name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="url" name="photoURL" {...register("photoURL", { required: true })} placeholder="photo url" className="input input-bordered" />
                                    {errors.photoURL && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/ })} placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === "required" && <span className='text-red-600'>This field is required</span>}
                                    {errors.password?.type === "minLength" && <span className='text-red-600'>Six characters avobe please</span>}
                                    {errors.password?.type === "maxLength" && <span className='text-red-600'>Townty characters below please</span>}
                                    {errors.password?.type === "pattern" && <span className='text-red-600'>At least one letter and one number</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input type="text" name="captcha" ref={captchaRef} placeholder="type here" className="input input-bordered" />
                                    <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2' type='button'>Validate</button>
                                </div>
                                <div className="form-control mt-6">
                                    <input disabled={false} type="submit" value={"Sign Up"} className="btn btn-primary" />
                                </div>
                            </form>
                            <p>Already Registered? <Link className='hover:underline text-blue-600' to={"/login"}>Go to login</Link></p>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;