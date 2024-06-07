import React from 'react'

const VideoTitle = ({title, overview}) => {
  if (!title || !overview) {
    // Return null if title or overview is not available yet
    return null;
  }
  return (
    <div className='  pt-[20%] px-24  text-white absolute z-10'  >
      <h1 className='text-6xl font-bold' >{title}</h1>
      <p className='py-5 text-lg w-1/4' >{overview}</p>

    <div className='my-4 ' >
<button className=' px-8 py-1 bg-white text-black font-semibold rounded-lg hover:bg-opacity-80 '  > ▶ Play</button>
<button className=' px-8 py-1  bg-gray-400 text-white  font-semibold rounded-lg mx-2 hover:bg-opacity-80 '  > More Info</button>

    </div>

    </div>
  )
}


export default VideoTitle
