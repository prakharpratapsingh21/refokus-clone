import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Card({width, start, para, hover="none"}) {
  return (
    <div className={` bg-zinc-700 p-5 rounded-xl ${hover} ${width} min-h-[300px] flex flex-col justify-between` }>
        <div className='w-full'>
            <div className='w-full flex items-center justify-between'>
                <h2>one head</h2>
                <FaArrowRightLong />
            </div>
            <h1 className='text-xl font-medium mt-5'>Second Heading here</h1>
        </div>

        <div className='down w-full'>
            {
                start && (
                    <>
                    <h1 className='text-6xl font-medium tracking-tight leading-none'>Start a project.</h1>
                    <button className='rounded-full px-5 py-1 border-[1px] mt-5'>Contact Us</button>
                    </> 
                )
            }
            {
            para && (
                <>
                    <p className='text-sm font-medium text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </>
            )
            }
        </div>
    </div>
  )
}

export default Card