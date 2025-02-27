import React from 'react'; 
import { FaChevronRight } from 'react-icons/fa';

const AuthButtonWithProvider = ({Icon, Label, Provider}) => {

    const handleClick = () => {
        switch(Provider) {
            case "GoogleAuthProvider":
                console.log("Google auth is clicked...");
                break;
            case "GitHubAuthProvider":
                console.log("Github auth is clicked...");
                break;
            default:
                console.log("not any auth is clicked...");
                break;
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