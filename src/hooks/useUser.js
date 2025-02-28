import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getUserDetail } from "../api";

const useUser = () => {
    const { data, isLoading, isError, refetch } = useQuery(
        "user",
        () =>
            new Promise((resolve, reject) => {
                getUserDetail((userDetail) => {
                    if (userDetail) {
                        resolve(userDetail);
                    } else {
                        reject(new Error("User not Found"));
                    }
                });
            }).catch((err) => {
                if (!err.message.includes("not include")) {
                    toast.error("Something went wrong...");
                }
            }),
        { refetchOnWindowFocus: false }
    );

    return { data, isLoading, isError, refetch };
};

export default useUser;
