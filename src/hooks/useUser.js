import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getUserDetail } from "../api";

const useUser = () => {

    return useQuery({
        queryKey: ["user"],
        queryFn: () => new Promise((resolve, reject) => {
            getUserDetail((userDetail) => {
                if(userDetail) {
                    console.log("user data is received : ", userDetail);
                    resolve(userDetail)
                } else {
                    reject(new Error("user not found..."));
                }
            })
        }),
        refetchOnWindowFocus: true,
        onError: (err) => {
            console.err("error in fetching user: ", err);
            if(!err.message.includes("not include")){
                toast.error("Something went wrong...");
            }
        }
    })
}

export default useUser;
