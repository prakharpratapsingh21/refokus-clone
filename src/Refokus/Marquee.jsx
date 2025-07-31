import React from 'react'


function Marquee({imageurls}) {
  return (
    <div className=' flex w-full py-5 gap-10  whitespace-nowrap overflow-hidden'>
       {imageurls.map((url,index)=> <img src={url} key={index} className='flex-shrink-0'/>)} 
       {imageurls.map((url,index)=> <img src={url} key={index} className='flex-shrink-0'/>)}
    </div>
  )
}

export default Marquee