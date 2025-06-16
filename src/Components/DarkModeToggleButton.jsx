import React from 'react';
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from 'react-icons/fa';
import { useDarkMode } from '../Contexts/ThemeContext';

const DarkModeToggleButton = () => {
    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className={`btn  p-2 rounded-full border-none transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 
                ${darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-yellow-300 focus:ring-yellow-400"
                    : "bg-gray-300 hover:bg-gray-200 text-gray-800 focus:ring-gray-400"}
            `}>
            {darkMode ? <IoMdSunny className="text-2xl" /> : <FaMoon className="text-2xl" />}
        </button>
    );
};

export default DarkModeToggleButton;