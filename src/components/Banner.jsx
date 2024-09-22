import React from 'react'

function Banner() {
  return (
    <div className='bg-black text-white py-16'>
      <div className='max-w-3xl mx-auto px-4 text-center'>
        <img 
          src="https://developer.apple.com/assets/elements/icons/app-store/app-store-256x256_2x.png" 
          alt="App Store" 
          className='w-16 h-16 mx-auto mb-6' 
        />
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>Submit your apps and games</h1>
        <h2 className='text-xl mb-8'>App Store submissions are now open for the latest OS releases.</h2>
        <img 
          src="https://developer.apple.com/home/images/tile-submit-18/large_2x.png" 
          alt="App submissions" 
          className="w-full mx-auto mt-8"
        />
      </div>
    </div>
  )
}

export default Banner