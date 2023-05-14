import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider } from "firebase/auth";



const Login = () => {

    const { loginUser, providerLogin } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const provider = new GoogleAuthProvider();

    const handleLoginForm = (data) => {
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('User Login Successfully');
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleLogin = ()=>{
        providerLogin(provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error=> {
            console.log(error)
        })
    }


    return (
        <div className="hero bg-base-100">
            <div className="hero-content w-full max-w-[500px] flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-4xl font-semibold'>Login Now</h1>
                        <form onSubmit={handleSubmit(handleLoginForm)}>
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className="form-control ">
                            <button onClick={handleGoogleLogin} className="btn btn-primary">Login With Google</button>
                        </div>

                        <div className="form-control mt-6">
                            <div className='flex items-center justify-between'>
                                <span>Create an account</span>
                                <Link to='/register'>
                                    <span className='text-primary'>Please Register</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;