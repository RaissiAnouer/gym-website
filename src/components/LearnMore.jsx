import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const LearnMore = ({ link }) => {
    return (
        <div>
            <Link to={`/${link}`} className='flex cursor-pointer'>
                <p>LEARN MORE</p>
                <img className='w-5 mx-auto' src={assets.arrow} alt="" />
            </Link>
        </div >
    )
}

export default LearnMore