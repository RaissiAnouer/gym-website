import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const ServicesCards = () => {
    return (
        <div className='flex flex-col   text-white sm:flex-row items-center my-20  [&_div]:rounded-xl justify-between [&_div]:px-6 [&_div]:py-6 gap-5 '>

            <div className='[h-340px] text-black sm:h-[300px] bg-[#8FFF00] w-auto flex flex-col sm:w-2/7 justify-between text-center  transition-all ease-in-out '>
                <img className='w-20 mx-auto ' src={assets.dumbels} alt="" />
                <h1 className='font-bold'>STRENGTH TRAINING</h1>
                <p className='hidden sm:block'>Build muscle, get stronger, and tone your body with expert-led programs</p>

                <Link to={`/`} className='flex cursor-pointer mt-5 text-center mx-auto'>
                    <p className='text-xs font-bold '>LEARN MORE</p>
                    <img className='w-3 mx-2     ' src={assets.barrow} alt="" />
                </Link>
            </div>

            <div
                className='h:auto sm:h-[300px] bg-[#1A1A1A]  flex flex-col w-auto sm:w-2/7  justify-between text-center   '>
                <img className='w-20 mx-auto ' src={assets.wrunning} alt="" />
                <h1 className='font-bold text-2xl'>Cardio & Endurance </h1>
                <p className='hidden sm:block ' >Boost your stamina with state-of-the-art cardio equipment and group classes</p>
                <Link to={`/`} className='flex cursor-pointer mt-5 text-center mx-auto'>
                    <p className='text-xs font-bold '>LEARN MORE</p>
                    <img className='w-4 mx-2  ' src={assets.arrow} alt="" />
                </Link>
            </div>
            <div className='h-auto sm:h-[300px] flex flex-col w-auto  bg-[#1A1A1A]  sm:w-2/7 justify-between text-center  transition-all ease-in-out '>
                <img className='w-20 mx-auto ' src={assets.nutration} alt="" />
                <h1 className='font-bold'>Nutrition Guidance</h1>
                <p className='hidden sm:block text-xs'>Discover how to properly fuel your body to enhance performance, speed up recovery, and achieve your fitness goals more efficiently.</p>

                <Link to={`/`} className='flex cursor-pointer mt-5 text-center mx-auto'>
                    <p className='text-xs font-bold '>LEARN MORE</p>
                    <img className='w-4 mx-2  ' src={assets.arrow} alt="" />
                </Link>
            </div>


        </div >
    )
}

export default ServicesCards