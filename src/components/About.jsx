import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className='px-[1vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-30'>
            <Title text={'ABOUT OUR GYM '} />
            <img className='w-full  rounded-3xl mt-10' src={assets.image2} alt="" />
            <div className='flex flex-col sm:flex-row items-center pt-10 gap-8'>
                <p className='text-white sm:w-2/3'>At our gym, we believe fitness is more than just a workout—it's a lifestyle. Our facility is equipped with state-of-the-art equipment, expert trainers, and a supportive community that’s dedicated to helping you become your strongest self. Whether you're a beginner or an athlete, we offer personalized programs, energizing group classes.</p>
                <button className='bg-[#8FFF00] text-xl font-bold py-3 px-13 rounded-xl'>8 YEARS</button>
            </div>
            <div className='flex flex-col sm:flex-row mt-10'>
                <img className='p-2 rounded-full w-auto sm:w-60 border-l-5 border-to  border-[#8FFF00] ' src={assets.image3} alt="" />
                <img className=' mx-3 p-2 rounded-full hidden sm:w-60 sm:block border-t-5 border-r-5  border-[#8FFF00] ' src={assets.image4} alt="" />
                <div className='flex flex-col mt-10 mx-15 text-white'>
                    <h1 className=' text-2xl font-semibold  '><span className='text-orange-400'>Lorem ipsum </span>dolor <br />sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,</p>
                </div>
                <div className='flex flex-col mt-10 mx-15 text-white'>
                    <h1 className=' text-2xl font-semibold  '><span className='text-orange-400'>Lorem ipsum </span>dolor <br />sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,</p>
                </div>
            </div>

        </div>
    )
}

export default About