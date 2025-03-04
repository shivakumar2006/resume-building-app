import React from 'react';
import CircleLoader from "react-spinners/CircleLoader";

const MainSpinner = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <CircleLoader color="#498FCD" size={80} />
    </div>
  )
}

export default MainSpinner;