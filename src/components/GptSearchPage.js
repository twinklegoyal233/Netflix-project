import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_LOGO } from '../utils/constant'

const GptSearchPage = () => {
  return (
    <div>
        <div className='relative'  >
        <img alt='bg-logo' className='absolute inset-0 bg-cover bg-no-repeat -z-10  w-screen'  src={BG_LOGO}  />

        </div>
      <GptSearchBar/>
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearchPage
