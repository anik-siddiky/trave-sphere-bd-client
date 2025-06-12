import React, { useContext, useState } from 'react';
import loginAnimation from '../assets/animations/loginAnimation.json'
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser, googleSignin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';

    const handleGoogleSingIn = () => {
        googleSignin()
            .then(result => {
                console.log(result.user)
                navigate(from);
                toast.success("Google Sign-In Successful!");
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Google Sign-In Failed: " + error.message);
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from);
                toast.success("Login Successful!");
            })
            .catch(error => {
                console.log(error)
                toast.error("Incorrect Email or Password.");
            })
    }

    return (
        <div className="hero bg-base-200 md:min-h-screen md:px-0 px-4 md:pt-0 md:pb-0 pb-52 pt-20">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-full max-w-4xl">

                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-center mb-4">Login now</h1>

                        <button onClick={handleGoogleSingIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        <div className="divider">OR</div>

                        <form onSubmit={handleLogin}>
                            <div className="form-control mb-3">
                                <label htmlFor="email" className="label">
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