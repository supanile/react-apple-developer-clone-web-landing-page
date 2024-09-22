import React from 'react'

function Products() {
  return (
    <div>
        <ul className='flex flex-wrap'>
            <li className='w-full md:w-[50%] h-[592px] bg-[#f5f5f7] border-[6px] border-solid border=[#fff]'>
                <a href="#">
                    <div className='text-center'>
                        <h3 className='text-[32px] font-bold mt-[50px]' >visionOS 2</h3>
                        <div className='flex justify-center'>
                            <img className='w-[440px] h-[257px] mt-[100px]' src="https://developer.apple.com/visionos/images/visionos-overview-large_2x.png?1" alt="" />
                        </div>
                    </div>
                </a>
            </li>
            <li className='w-full md:w-[50%] h-[592px] bg-[#f5f5f7] border-[6px] border-solid border=[#fff]'>
                <a href="#">
                    <div className='text-center'>
                        <h3 className='text-[32px] font-bold mt-[50px]' >iOS 18</h3>
                        <div className='flex justify-center'>
                            <img className='w-[165px] h-[330px] mt-[70px]' src="https://developer.apple.com/home/images/tile-ios-18/ios-18-large_2x.webp" alt="" />
                        </div>
                    </div>
                </a>
            </li>
            <li className='w-full md:w-[50%] h-[592px] bg-[#f5f5f7] border-[6px] border-solid border=[#fff]'>
                <a href="#">
                    <div className='text-center'>
                        <h3 className='text-[32px] font-bold mt-[50px]' >iPadOS 18</h3>
                        <div className='flex justify-center'>
                            <img className='w-[439px] h-[318px] mt-[70px]' src="https://developer.apple.com/home/images/tile-ipados-18/ipados-18-large_2x.webp" alt="" />
                        </div>
                    </div>
                </a>
            </li>
            <li className='w-full md:w-[50%] h-[592px] bg-[#f5f5f7] border-[6px] border-solid border=[#fff]'>
                <a href="#">
                    <div className='text-center'>
                        <h3 className='text-[32px] font-bold mt-[50px]' >macOS Sequoia</h3>
                        <div className='flex justify-center'>
                            <img className='w-[576px] h-[336px] mt-[50px]' src="https://developer.apple.com/home/images/tile-macos-15/macos-15-large_2x.webp" alt="" />
                        </div>
                    </div>
                </a>
            </li>
            <li className='w-full md:w-[50%] h-[592px] bg-[#f5f5f7] border-[6px] border-solid border=[#fff]'>
                <a href="#">
                    <div className='text-center'>
                        <h3 className='text-[32px] font-bold mt-[50px]' >watchOS 11</h3>
                        <div className='flex justify-center'>
                            <img className='w-[191px] h-[319px] mt-[100px]' src="https://developer.apple.com/home/images/tile-watchos-11/watchos-11-large_2x.webp" alt="" />
                        </div>
                    </div>
                </a>
            </li>
            <li className='w-full md:w-[50%] h-[592px] bg-[#f5f5f7] border-[6px] border-solid border=[#fff]'>
                <a href="#">
                    <div className='text-center'>
                        <h3 className='text-[32px] font-bold mt-[50px]' >tvOS 18</h3>
                        <div className='flex justify-center'>
                            <img className='w-[500px] h-[280px] mt-[100px]' src="https://developer.apple.com/home/images/tile-tvos/tvos-device-b.png"  alt="" />
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Products