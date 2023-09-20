import React from 'react'

const Loader = () => {
  return (
    <div className='fixed w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.7)] z-[9]'>
        <div className='fixed left-[50%] top-[50%] -translate-y-50% -translate-x-50% z-[999]'>
           <span className="loading loading-bars loading-md text-white"></span>
           <span className="loading loading-bars loading-md text-white"></span>
           <span className="loading loading-bars loading-md text-white"></span>
           <span className="loading loading-bars loading-md text-white"></span>
        </div>
    </div>
  )
}

export default Loader