import React from 'react'; 
import { Link } from 'react-router-dom';
import {Logo} from "../assets";

const Footer = () => {
    return (
        <div className='w-full flex items-center justify-between border-t border-gray-500'>
            <div className='flex items-center justify-center gap-4 mt-5'>
                <img src={Logo} className='w-8 h-auto object-conatin' alt="" />
                <p>Expressume</p>
            </div>
            <div className='flex items-center justify-center gap-4 mt-5 cursor-pointer text-blue-600'>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/privacypolicy">Privacy Policy</Link>
            </div>
        </div>
    )
}

export default Footer;