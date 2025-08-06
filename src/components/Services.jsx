import React from 'react'
import Title from './Title'
import ServicesCards from './ServicesCards'

const Services = () => {
    return (
        <div className='px-[1vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <Title text={'OUR SERVICES'} />
            <ServicesCards />
        </div>



    )
}

export default Services