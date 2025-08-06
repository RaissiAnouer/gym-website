import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
import NewsBox from './NewBox'

const Trial = () => {
    return (
        <div>
            <div className="relative bg-cover  bg-center sm:max-h-screen " style={{ backgroundImage: `url(${assets.strong})` }}>
                <div className="absolute inset-0 bg-black/60 z-0" />
                <div className="relative z-10  sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex flex-col justify-center items-center  ">
                    <Title text={'CET YOUR FIRST TRIAL VISIT'} />
                    <p className='text-white text-xs sm:text-base py-5 sm:py-10 mx-10 sm:mx-50 text-center'>Curious about our gym? Come experience it for yourself – no commitment needed! Your first trial visit gives you full access to our state-of-the-art equipment, group classes, and expert trainers.
                    </p>
                    <NewsBox />
                </div>

            </div>
        </div>
    )
}

export default Trial  