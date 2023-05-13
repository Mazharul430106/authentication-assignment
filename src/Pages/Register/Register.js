import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Register = () => {

    const { register, handleSubmit } = useForm();
    const handleRegisterForm = (data) => {
        console.log(data)
    }

    return (
        <div className="hero bg-base-100">
            <div className="hero-content w-full max-w-[500px] flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-4xl font-semibold'>Register Now</h1>
                        <form onSubmit={handleSubmit(handleRegisterForm)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} name='name' placeholder="enter your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" {...register('url', { required: true })} name='url' placeholder="enter your photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register('email', { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password', { required: true })} name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="form-control mt-6 ">
                            <div className='flex items-center justify-between'>
                                <span>All ready have an account</span>
                                <Link to='/login'>
                                    <span className='text-primary'>Please login</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;