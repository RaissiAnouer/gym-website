import React from 'react'

const NewsBox = () => {
    return (
        <form className=' sm:w-1/3 flex items-center sm:gap-3 mx-auto my-6 pl-3 '>
            <input className=' py-3 sm:flex-4 outline-none bg-gray-200 rounded-3xl px-3' type="email" placeholder='Enter your email' required />
            <button type='submit' className='py-3 px-10 sm:mx-[-80px] bg-[#8FFF00] rounded-3xl hover:scale-110 transition-all ease-in-out'>SUBMIT</button>
        </form>
    )
}

export default NewsBox
