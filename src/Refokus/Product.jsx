import React from 'react'
import Button from './Button'

function Product({val,mover,count}) {
  return (
    <div className='w-full  text-white '>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-md h-[14rem] mx-auto text-white flex items-center justify-between '>
            <h1 className='text-5xl capitalize '>{val.title}</h1>
            <div className='dets w-[260px] text-justify min-w-[260px] '>
                <p className='mb-5 leading-1 text-sm'>{val.description}</p>
                <div className='flex items-center justify-between'>
                    {val.live && <Button/>}
                    {val.case && <Button title='Case Study' />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
