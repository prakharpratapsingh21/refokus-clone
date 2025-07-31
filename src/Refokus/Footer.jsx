import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-md mx-auto flex gap-6 '>
            <div className='basis-1/2'>
                <h1 className='text-[9vw] font-semibold tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex '>
                <div className='basis-1/3 '>
                    <h1 className='mb-4 text-zinc-500'>Socials</h1>
                    {["Instagram", "Twitter (X?)", "LinkedIn"].map((item,index) => <a key={index} className='flex flex-col text-zinc-500'>{item}</a>)}
                </div>

                <div className='basis-1/3'>
                    <h1 className=' mb-4 text-zinc-500'>Socials</h1>
                    {["Instagram", "Twitter (X?)", "LinkedIn"].map((item,index) => <a key={index} className='flex flex-col text-zinc-500'>{item}</a>)}
                </div>

                <div className='basis-1/2 flex flex-col items-end'>
                    <p className='text-sm text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto blanditiis nemo!</p>
                    <img className='mt-5' src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer