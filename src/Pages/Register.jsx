import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import registerAnimation from '../assets/animations/registerAnimation.json';
import Lottie from 'lottie-react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { AuthContext } from '../Contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const { createUser, googleSignin, updateUser, setUser } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleGoogleSingUp = () => {
        googleSignin()
            .then(result => {
                console.log(result.user)
                navigate('/')
                toast.success("Registration successful!");
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Google sign-up failed: " + error.message);
            })
    }

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
                const user = result.user;
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoURL })
                    })
                    .catch(error => {
                        console.log(error)
                        setUser(user)
                    })

                navigate('/')
                toast.success("Registration successful!");
            })
            .catch(error => {
                console.log(error)
                toast.error("Google sign-up failed: " + error.message);
            })
    };

    return (
        <div className="hero md:min-h-screen md:px-0 px-4 md:pt-0 md:pb-0 pb-52 pt-20">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-full max-w-4xl ">

                <div className="card w-full max-w-sm shadow-2xl bg-gray-100 dark:bg-gray-900">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-center mb-4 text-black dark:text-white">Register now</h1>
                        <button onClick={handleGoogleSingUp} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        <p className="text-gray-900 dark:text-white text-center py-5">Or Continue with Email and Password</p>

                        <form onSubmit={handleRegister}>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text text-black dark:text-white">Name</span>
                                </label>
                                <input
                                    name='name'
                                    type="text"
                                    placeholder="Your Name"
                                    className="input w-full input-bordered border border-gray-300 dark:border-gray-600 p-4 text-black dark:text-white bg-gray-100 dark:bg-gray-700"
                                    required
                                />
                            </div>

                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text text-black dark:text-white">Photo URL</span>
                                </label>
                                <input
                                    name='photoURL'
                                    type="text"
                                    placeholder="Your Photo URL"
                                    className="input w-full input-bordered border border-gray-300 dark:border-gray-600 p-4 text-black dark:text-white bg-gray-100 dark:bg-gray-700"
                                    required
                                />
                            </div>

                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text text-black dark:text-white">Email</span>
                                </label>
                                <input
                                    name='email'
                                    type="email"
                                    placeholder="Your Email"
                                    className="input w-full input-bordered border border-gray-300 dark:border-gray-600 p-4 text-black dark:text-white bg-gray-100 dark:bg-gray-700"
                                    required
                                />
                            </div>

                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text text-black dark:text-white">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        name='password'
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Your Password"
                                        className="input w-full input-bordered border border-gray-300 dark:border-gray-600 p-4 text-black dark:text-white bg-gray-100 dark:bg-gray-700"
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
                                    className='btn bg-[#2C3892] w-full text-white border-none rounded-none font-medium shadow-md hover:bg-[#FA951E] hover:scale-105 transition duration-300 ease-in-out'
                                    value="Register"
                                />
                            </div>
                        </form>

                        <div className="mb-3 mt-3">
                            <p className="text-sm text-black dark:text-white">
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