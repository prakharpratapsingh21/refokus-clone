import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
function Button({title="Start a Project"}) {
  return (
    <div className='w-fit text-black py-1 px-3 rounded-2xl flex items-center gap-3 bg-white '>
        <a className='font-medium text-xs' href="#">{title}</a>
        <a href="#"><BsArrowReturnRight className='mt-2 text-xs'/></a>
    </div>
  )
}

export default Button