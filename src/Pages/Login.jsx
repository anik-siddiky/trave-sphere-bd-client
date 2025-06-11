import React, { useState } from 'react';
import loginAnimation from '../assets/animations/loginAnimation.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="hero bg-base-200 md:min-h-screen md:px-0 px-4 md:pt-0 md:pb-0 pb-52 pt-20">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-full max-w-4xl">

                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-center mb-4">Login now</h1>
                        <form>
                            <div className="form-control mb-3">
                                <label htmlFor="email" className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="input w-full input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        name='password'
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Your Password"
                                        className="input w-full input-bordered pr-10"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-2 top-2.5 text-gray-500 hover:text-black"
                                        tabIndex={-1}
                                    >{showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />} </button>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <input type="submit" className='btn bg-primary w-full text-white border-none rounded-none font-medium shadow-md hover:bg-secondary hover:scale-105 transition duration-300 ease-in-out' value="Login" />
                            </div>
                        </form>
                        <div className="mb-3 mt-3">
                            <p className="text-sm">Don't have an account? <Link to='/register' className='underline hover:text-primary'>Register</Link></p>
                        </div>
                    </div>
                </div>

                <div className="text-center lg:text-left hidden md:block">
                    <Lottie animationData={loginAnimation} loop={true}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Login;