import { MainSpinner } from "../components";
import useUser from "../hooks/useUser";

const Homepage = () => {
    return (
        <div className="w-full h-full bg-black text-white">
            Homepage
        </div>
    )

//     const { data: user, isLoading } = useUser();

//     if (isLoading) return <MainSpinner />

//     return (
//         <div>
//             <h1>Welcome {user?.email}!</h1>
//             <p>Your name: {user?.user_metadata?.full_name || "N/A"}</p>
//         </div>
//     );
};

export default Homepage;
