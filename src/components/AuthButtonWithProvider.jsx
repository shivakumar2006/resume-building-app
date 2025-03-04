import React from 'react'; 
import { FaChevronRight } from 'react-icons/fa';

import supabase from '../supabase';

const AuthButtonWithProvider = ({Icon, Label, Provider}) => {

    const handleClick = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({provider:Provider})
        if(error) {
            console.log("Authentication Error : , error");
        } else {
            console.log("UserSignedIn : ", data);
        }
    }

    return (
        <div onClick={handleClick} className='w-full px-4 py-3 flex items-center justify-between border-blue-600 rounded-md border-2 cursor-pointer group hover:bg-blue-600 active:scale-95 duration-150 hover:shadow-md'>
            <Icon className="text-txtPrimary text-xl group-hover:text-white" />
            <p className='text-txtPrimary text-lg group-hover:text-white'>{Label}</p>
            <FaChevronRight className='text-txtPrimary text-base group-hover:text-white' />
        </div>
    )
}

export default AuthButtonWithProvider;