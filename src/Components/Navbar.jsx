import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "All Packages", to: "/packages" },
        { name: "About Us", to: "/about" },
    ];
    const mobNavLinks = [
        { name: "Home", to: "/" },
        { name: "All Packages", to: "/packages" },
        { name: "About Us", to: "/about" },
        { name: 'Login', to: '/login' }
    ];

    return (
        <nav className="bg-base-100 text-base-content shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src="/logo.png" alt="Logo" className="h-8 w-8" />
                    <span className="text-xl font-bold">TourMate</span>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.to} className="hover:text-primary transition">{link.name}</Link>
                    ))}
                </div>

                <div className="flex gap-4">
                    <label className="swap swap-rotate">
                        <input type="checkbox" className="theme-controller" value="dark" />
                        <Sun className="swap-off w-6 h-6" />
                        <Moon className="swap-on w-6 h-6" />
                    </label>

                    <Link to='/login'>
                        <button className="btn-primary bg-red-400">Login</button>
                    </Link>
                </div>



                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-base-content focus:outline-none">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div className={`fixed top-0 left-0 w-full h-full bg-base-200 text-base-content transform transition-transform duration-500 z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

                <div className="flex justify-between items-center p-4 border-b border-base-200">
                    <div className="flex items-center space-x-2">
                        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
                        <span className="text-xl font-bold">TourMate</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="focus:outline-none"> <X className="w-6 h-6" /> </button>
                </div>

                <div className="flex flex-col items-start px-6 py-8 space-y-6">
                    {mobNavLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            className="text-lg hover:text-primary transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;