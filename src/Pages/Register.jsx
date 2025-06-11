import React from 'react';
import { Link } from 'react-router';
import registerAnimation from '../assets/animations/registerAnimation.json'
import Lottie from 'lottie-react';

const Register = () => {
    return (
        <div className="hero bg-base-200 md:min-h-screen md:px-0 px-4 md:pt-0 md:pb-0 pb-52 pt-20">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-full max-w-4xl">

                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-center mb-4">Register now</h1>
                        <form>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    name='name'
                                    type="text"
                                    placeholder="Your Name"
                                    className="input w-full input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    name='photoURL'
                                    type="text"
                                    placeholder="Your Photo URL"
                                    className="input w-full input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name='email'
                                    type="email"
                                    placeholder="Your Email"
                                    className="input w-full input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name='password'
                                    type="password"
                                    placeholder="Your Password"
                                    className="input w-full input-bordered"
                                    required
                                />
                            </div>
                            <div className='mt-5'>
                                <input type="submit" className='btn bg-primary w-full text-white border-none rounded-none font-medium shadow-md hover:bg-secondary hover:scale-105 transition duration-300 ease-in-out' value="Register" />
                            </div>
                        </form>
                        <div className="mb-3 mt-3">
                            <p className="text-sm">Already have an account? <Link to='/login' className='underline hover:text-primary'>Login</Link></p>
                        </div>
                    </div>
                </div>

                <div className="text-center lg:text-left hidden md:block">
                    <Lottie animationData={registerAnimation} loop={true}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Register;