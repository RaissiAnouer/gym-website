import React from 'react'

const InfityScroller = ({ text1, text2 }) => {
    return (

        <div className="flex bg-[#8FFF00]  overflow-hidden whitespace-nowrap text-black absolute right-0  ">
            <div className='flex items-center md:justify-start [&_p]:mx-8 animate-infinite-scroll ' >
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
            <div className='flex items-center md:justify-start [&_p]:mx-8 animate-infinite-scroll aria-hidden="true" '>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
        </div>
    )

}

export default InfityScroller