import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import registerAnimation from '../assets/animations/registerAnimation.json';
import Lottie from 'lottie-react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { AuthContext } from '../Contexts/AuthContext';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[0-9]/.test(password)) {
            setError("Password must contain at least one number.");
            return;
        }
        if (!/[!@#$%^&*]/.test(password)) {
            setError("Password must include at least one special character: !@#$%^&*");
            return;
        }

        setError('');

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div className="hero bg-base-200 md:min-h-screen md:px-0 px-4 md:pt-0 md:pb-0 pb-52 pt-20">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-full max-w-4xl">

                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-center mb-4">Register now</h1>
                        <form onSubmit={handleRegister}>
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

                            {error && (
                                <div className="text-red-600 text-sm mt-1">{error}</div>
                            )}

                            <div className='mt-5'>
                                <input
                                    type="submit"
                                    className='btn bg-primary w-full text-white border-none rounded-none font-medium shadow-md hover:bg-secondary hover:scale-105 transition duration-300 ease-in-out'
                                    value="Register"
                                />
                            </div>
                        </form>

                        <div className="mb-3 mt-3">
                            <p className="text-sm">
                                Already have an account?{" "}
                                <Link to='/login' className='underline hover:text-primary'>
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center lg:text-left hidden md:block w-full max-w-md">
                    <Lottie animationData={registerAnimation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Register;