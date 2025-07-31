import React from 'react'
import Stripe from './Stripe'

function Stripes() {
  var data=[
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg", number:48},
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275ff2309d9d743ec75_doxel.svg", number:2},
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg", number:11},
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg", number:48},
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275ff2309d9d743ec75_doxel.svg", number:2},
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg", number:11},
  ]
  return (
    <div className='flex items-center mt-12'>
     {data.map((elem,index)=>( 
      <Stripe key={index} val={elem}/>)
     )}
    </div>
  )
}

export default Stripes