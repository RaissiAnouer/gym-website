import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const Coaches = () => {
    return (
        <>
            <div className='px-[1vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-10 bg-[#1A1A1A] text-white py-30'>
                <Title text={'OUR COACHES'} />
                <p className='text-white py-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6  '>
                    <div className='flex flex-col '>
                        <img className='rounded-xl w-full ' src={assets.amine} alt="" />
                        <p className='text-2xl font-semibold pt-3'>Coach amine</p>
                        <p className='text-sm font-thin'>CROSSFIT COACH</p>
                    </div>
                    <div className='flex flex-col '>
                        <img className='rounded-xl w-full' src={assets.ahmed} alt="" />
                        <p className='text-2xl font-semibold pt-3'>Coach Ahmed</p>
                        <p className='text-sm font-thin'>CROSSFIT COACH</p>
                    </div>
                    <div className='flex flex-col '>
                        <img className='rounded-xl w-full' src={assets.amira} alt="" />
                        <p className='text-2xl font-semibold pt-3'>Coach amira</p>
                        <p className='text-sm font-thin'>CROSS FIT COACH</p>
                    </div>
                    <div className='flex flex-col '>
                        <img className='rounded-xl w-full' src={assets.asma} alt="" />
                        <p className='text-2xl font-semibold pt-3'>Coach asma</p>
                        <p className='text-sm font-thin'>CROSS FIT COACH</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Coaches