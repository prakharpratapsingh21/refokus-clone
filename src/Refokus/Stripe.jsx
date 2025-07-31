import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-6 py-3 flex justify-between items-center border-b-[1px] border-r-[1px] border-t-[1px]'>
       <img src={val.url} alt="" />
       <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe