import React, { useEffect } from 'react'; 
import { Logo } from '../assets';
import { Footer } from "../containers";
import { AuthButtonWithProvider } from "../components";
import { useNavigate } from 'react-router-dom';
import {FaGoogle, FaGithub} from "react-icons/fa"
import { toast } from 'react-toastify';
import { useUser } from "../hooks/useUser";

const Authentication = () => {

    const notify = () => toast("Wow so easy!");
    const { data, isLoading, isError } = useUser();

    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoading && data) {
            navigate("/", { replace: true })
        }
    }, [isLoading, data])

    return (
        <div className='w-full h-screen overflow-hidden flex flex-col items-start justify-start px-6 py-4 gap-6'>
            {/* top section */}
            <img src={Logo} className='w-12 h-auto object-contain' alt="" />

            {/* mid section */}
            <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                <h1 className='text-3xl text-blue-600 lg:text-4xl'>Welcome to Expressume</h1>
                <p className='text-base text-gray-600'>express way to create resume</p>
                <p className='text-2xl'>Authenticate</p>
                <div className='w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-center gap-6'>
                    <AuthButtonWithProvider 
                        Icon={FaGoogle}
                        Label={"Signin with google"}
                        Provider="google"
                    />
                    <AuthButtonWithProvider 
                        Icon={FaGithub}
                        Label={"Signin with github"}
                        Provider="github"
                    />
                </div>
            </div>
                <button onClick={notify}>Click me</button>
            {/* bottom section */}
            <Footer />
        </div>
    )
}

export default Authentication;