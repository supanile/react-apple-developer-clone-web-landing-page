import React from 'react'

function Promo() {
  return (
    <div>
        <ul className='flex flex-wrap'>
            <li className='w-full md:w-[50%] h-[592px] border-[6px] border-[#fff border-solid'>
                <div className="overflow-hidden text-center bg-[url('https://developer.apple.com/home/images/tile-apple-intelligence/apple-intelligence-large_2x.jpg')] bg-cover h-full bg-center">
                    <a href="#">
                        <h3 className="text-[40px] text-black font-bold mt-[52px]">Apple Intelligence</h3>
                        <p className='text-[21px]'>Deliver powerful, intuitive, and integrated <br /> personal intelligence.</p>
                    </a>
                </div>
            </li>

            <li className='w-full md:w-[50%] h-[592px] border-[6px] border-[#fff] border-solid'>
                <div className="overflow-hidden text-center bg-[url('https://developer.apple.com/home/images/tile-events-vision-promo/events-lab-coding-large_2x.jpg?5')] bg-cover h-full bg-center flex flex-col justify-center relative">
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <a href="#" className="flex flex-col justify-center items-center h-full py-8 relative z-10">
                        <div>
                            <h3 className="text-[40px] text-white font-bold mb-4">Meet with Apple</h3>
                            <p className='text-[21px] text-white mb-6'>
                                Join us in Cupertino on October 2 to learn how<br />
                                to create great visionOS apps for productivity<br />
                                and creativity.
                            </p>
                        </div>
                        <div className="flex justify-center gap-6 mt-4">
                            <span className="text-[#2997ff] hover:underline text-lg">Sign up now &gt;</span>
                            <span className="text-[#2997ff] hover:underline text-lg">Browse the full schedule &gt;</span>
                        </div>
                    </a>
                </div>
            </li>

            <li className='w-full md:w-[50%] h-[592px] border-[6px] border-[#fff border-solid'> 
                <div className="overflow-hidden text-center bg-[url('https://developer.apple.com/home/images/tile-event-sept24/large_2x.jpg')] bg-cover h-full bg-center flex flex-col justify-end pb-8">
                    <a href="#">
                        <h3 className="text-[40px] text-white font-bold mt-[52px]">Reply the Apple Event</h3>
                        <p className='text-[21px] text-white'>Stream all the big announcements from <br /> September 9.</p>
                    </a>
                </div>
            </li>

            <li className='w-full md:w-[50%] h-[592px] border-[6px] border-[#fff border-solid'>
                <div className="overflow-hidden text-center bg-[url('https://devimages-cdn.apple.com/wwdc-services/articles/images/121AB9CF-BAE9-4C92-BFE7-1B923E1C2972/2048.jpeg')] bg-cover h-full bg-center flex flex-col justify-end pb-8">
                    <a href="#">
                        <h3 className="text-[40px] text-white font-bold mt-[52px]">Hello Developer</h3>
                        <p className='text-[21px] text-white'>Read this month's guide to the latest developer <br /> activities, stories, and news.</p>
                    </a>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Promo