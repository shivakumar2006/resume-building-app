import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Homepage = lazy(() => import("../pages/Homepage"));
const Authentication = lazy(() => import("../pages/Authentication"));

const queryClient = new QueryClient();

const App = () => {

    return (
        <QueryClientProvider client={queryClient}>
       <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/auth" element={<Authentication />} /> 
        </Routes>
       </Suspense>
       <ToastContainer position="top-right" theme="dark" />
       <ReactQueryDevtools initialIsOpen={false} />
       </QueryClientProvider>
    )
}

export default App;