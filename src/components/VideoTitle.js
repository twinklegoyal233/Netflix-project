import React from 'react'

const VideoTitle = ({title, overview}) => {
  if (!title || !overview) {
    // Return null if title or overview is not available yet
    return null;
  }
  return (
    <div className='  pt-[15%] px-6 md:px-24 md:pt-[21%] xl:pt-[18%]   text-white absolute z-10'  >
      <h1 className=' text-xl md:text-4xl xl:text-6xl font-bold' >{title}</h1>
      <p className=' hidden xl:text-md 2xl:text-lg  xl:inline-block  py-5 text-xs w-1/4' >{overview}</p>

    <div className='my-4 ' >
<button className=' px-6 py-2 md:px-8 md:py-1 bg-white text-black font-semibold rounded-lg hover:bg-opacity-80 '  > ▶ Play</button>
<button className='hidden lg:inline-block px-8 py-1  bg-gray-400 text-white  font-semibold rounded-lg mx-2 hover:bg-opacity-80 '  > More Info</button>

    </div>

    </div>
  )
}


export default VideoTitle
