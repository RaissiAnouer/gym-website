import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import LearnMore from './LearnMore';


const Hero = () => {
    const background = [assets.background, assets.background2, assets.background3]
    const [back, setBack] = useState(0)
    return (

        <div className="relative bg-cover  bg-center max-h-screen " style={{ backgroundImage: `url(${background[back]})` }}>
            <div className="absolute inset-0 bg-black/60 z-0" />   {/* ← Add this */}
            <div className="relative z-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                <div className="max-w-[1126px] mx-auto"></div>
                <Navbar />
                <div className='min-h-screen bg-cover bg-center text-white '>
                    <div className='w-full mt-20 '>
                        <div className=' flex justify-center mx-auto'></div>
                        <h1 className='text-3xl sm:text-[110px]   font-semibold sm:mt-6 text-center '> Work with <br /> Professionals</h1>
                        <p className='sm:mx-60 text-center text-sm font-thin mt-5'>Our gym classes are not just about building physical strength onfidence and improving mental health. Join us and see the difference for yourself.</p>
                    </div>
                    <div className='flex justify-center mt-10 items-center'>
                        <button className='hover:drop-shadow-[0_0_6px_#8FFF00] bg-[#8FFF00] rounded-full text-black px-5 py-2 mr-7 cursor-pointer transition-all duration-100 ease-in-out'>JOIN NOW</button>
                        <LearnMore link={'guides'} />
                    </div>
                    <div className='mt-8 flex justify-center '>
                        <img onClick={() => setBack(prev => prev !== 0 ? prev -= 1 : background.length - 1)} className='w-8  rotate-180 cursor-pointer  hover:bg-[#8FFF00] rounded-full transition-all duration-300 ease-in-out' src={assets.arrow_white} alt="" />
                        <img onClick={() => setBack(prev => prev === background.length - 1 ? prev = 0 : prev += 1)} className='w-8 ml-5 cursor-pointer  hover:bg-[#8FFF00] rounded-full transition-all duration-300 ease-in-out' src={assets.arrow_white} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero