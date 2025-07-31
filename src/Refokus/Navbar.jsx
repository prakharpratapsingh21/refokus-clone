import React from 'react'
import Button from './Button'
function Navbar() {
  return (
    <div className='max-w-screen-md mx-auto p-5 flex items-center justify-between '>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='links flex gap-8 ml-10 text-white'>
            {["Home", "Work", "Culture","", "News"].map((elem,index)=> (
                elem.length ===0 ? <span key={index} className='w-[2px] h-5 bg-zinc-500'></span> : <a key={index} className='text-xs flex items-center gap-1 font-["satoshi_variable"] font-extralight' href='#'>
                {index===1 ? (<span style={{boxShadow: "0 0 0.45em #00FF19"}} className='inline-block w-1 h-1 bg-green-400 rounded-full'></span>): null}
                {elem}</a>
            ))}
        </div>
        <div> <Button/> </div>
    </div>
  )
}

export default Navbar


