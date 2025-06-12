import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import websiteLogo from '../assets/website-logo.png';
import { AuthContext } from "../Contexts/AuthContext";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log("Signed out successfully")
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "All Packages", to: "/all-packages" },
        user && { name: "My Bookings", to: "/mybookings" },
        { name: "About Us", to: "/about" },
    ].filter(Boolean);;

    return (
        <nav className="bg-base-100 text-base-content shadow-md w-full z-50">
            <div className="max-w-7xl mx-auto px-4 md:px-0 flex justify-between items-center">

                <Link to='/'>
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <img src={websiteLogo} alt="Logo" className="w-24 md:w-36 p-1 md:p-2" />
                    </div>
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.to}
                            className={({ isActive }) =>
                                isActive ? "text-primary font-semibold" : "hover:text-primary transition"
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>


                <div className="hidden md:flex gap-4 items-center">
                    <input type="checkbox" value="dark" className="toggle theme-controller" />
                    {
                        user ?
                            <div className="relative">
                                <div tabIndex={0} role="button" className="avatar cursor-pointer" onClick={() => setIsDropDownOpen(prev => !prev)}>
                                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        {user?.photoURL ?
                                            <img src={user.photoURL} alt="User Avatar" referrerPolicy="no-referrer" />
                                            : <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" alt="Default Avatar" />
                                        }
                                    </div>
                                </div>
                                {isDropDownOpen && (
                                    <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 bg-base-100 shadow-lg rounded-lg w-60 p-4 space-y-2">
                                        <li className="py-2 flex items-center justify-center">
                                            <NavLink onClick={() => setIsDropDownOpen(false)} className={({ isActive }) =>
                                                isActive ? "text-primary font-semibold" : "hover:text-primary transition"
                                            } to='add-packages'>Add Packages</NavLink>
                                        </li>
                                        <li className="py-2 flex items-center justify-center">
                                            <NavLink onClick={() => setIsDropDownOpen(false)} className={({ isActive }) =>
                                                isActive ? "text-primary font-semibold" : "hover:text-primary transition "
                                            } to='manage-my-packages'>Manage My Packages</NavLink>
                                        </li>
                                        <li className="py-2">
                                            <button onClick={() => {
                                                handleLogOut();
                                                setIsDropDownOpen(false);
                                            }} className="btn bg-primary text-white hover:bg-secondary border-none w-full">
                                                Log Out
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </div>


                            :
                            <>
                                <Link to="/login">
                                    <button className="btn px-8 bg-primary text-white font-normal rounded-none hover:bg-secondary border-none shadow-none">Login</button>
                                </Link>
                            </>
                    }
                </div>

                <div className="md:hidden flex gap-3">
                    <button onClick={() => setIsOpen(true)} className="text-base-content focus:outline-none">
                        <Menu className="w-7 h-7" />
                    </button>
                </div>
            </div>

            <div className={`fixed top-0 left-0 w-full h-full bg-base-200 text-base-content transform transition-transform duration-500 z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-between items-center p-4 border-b border-base-200">
                    <img src={websiteLogo} alt="Logo" className="w-24" />
                    <button onClick={() => setIsOpen(false)} className="focus:outline-none">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex flex-col items-start px-6 py-6 space-y-6">
                    <div className="flex items-center gap-2">
                        <span className="text-sm">Dark Mode</span>
                        <input type="checkbox" value="dark" className="toggle theme-controller" />
                    </div>

                    {navLinks.map((link) => (
                        <NavLink key={link.name} to={link.to} onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-primary font-semibold" : "text-lg hover:text-primary transition"}>{link.name} </NavLink>))}

                    {
                        user &&
                        <li className="flex items-center">
                            <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-primary font-semibold" : "text-lg hover:text-primary transition"} to='add-packages'>Add Packages</NavLink>
                        </li>
                    }
                    {
                        user &&
                        <li className="flex items-center">
                            <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-primary font-semibold" : "text-lg hover:text-primary transition"} to='manage-my-packages'>Manage My Packages</NavLink>
                        </li>
                    }
                    {
                        user ?
                            <>
                                <button onClick={() => { setIsOpen(false); handleLogOut(); }} >Log Out</button>
                            </>
                            :
                            <>
                                <Link onClick={() => setIsOpen(false)} to={'/login'}>Login</Link>
                            </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;