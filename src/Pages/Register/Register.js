import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';


const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    // console.log(user)
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(null);


    const handleRegisterForm = (data, e) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;

                const profile = {
                    displayName : data.name,
                    photoURL: data.photoUrl
                }

                updateUser(profile)
                .then(()=>{})
                .catch(error=> console.log(error))


                toast.success('User Created Successfully')
                e.target.reset();
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
            })


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
                                <input type="url" {...register('photoUrl', { required: true })} name='photoUrl' placeholder="enter your photo" className="input input-bordered" />
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
                                    <a href="#" className="label-text-alt link link-hover text-[16px] text-red-600">{error}</a>
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