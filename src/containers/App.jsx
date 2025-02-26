import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom"; 

const Homepage = lazy(() => import("../pages/Homepage"));
const Authentication = lazy(() => import("../pages/Authentication"))

const App = () => {
    return (
       <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/auth" element={<Authentication />} /> 
        </Routes>
       </Suspense>
    )
}

export default App;