import React from 'react'
import Product from './Product'
import {motion} from 'framer-motion'; 
import { useState } from 'react';

function Products() {
    var products=[
        {
            title:"arqitel",
             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, porro. Ad consectetur officia officiis ea laboriosam bjah jkhgzs bsjj", 
            live: true, 
            case:false,
        },
        {
            title:"TTR",
             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, porro. Ad consectetur officia officiis ea laboriosam bjah jkhgzs bsjj", 
            live: true, 
            case:false,
        },
        {
            title:"YIR 2023",
             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, porro. Ad consectetur officia officiis ea laboriosam bjah jkhgzs bsjj", 
            live: true, 
            case:false,
        },
        {
            title:"yahoo",
             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, porro. Ad consectetur officia officiis ea laboriosam bjah jkhgzs bsjj", 
            live: true, 
            case:true,
        },
        {
            title:"rainfall",
             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, porro. Ad consectetur officia officiis ea laboriosam bjah jkhgzs bsjj", 
            live: true, 
            case:true,
        },
    ]

    const [pos, setpos] = useState(0);
    const mover=(val)=>{
        setpos(val*14);
    }

  return (
    <div className='relative mt-10 mb-28'>
        {products.map((elem,index)=>(
            <Product val={elem} key={index} mover={mover} count={index}/>
        ))}
        <div className='absolute top-0 w-full  pointer-events-none'>
            <motion.div 
                initial={{y:pos, x:"-50%"}}
                animate={{y:pos+'rem'}}
                transition={{ease: [0.76, 0, 0.24, 1], duration:0.5}} 
                className='window w-64 h-[14rem] left-[45%]  absolute overflow-hidden'> 

                <motion.div 
                animate={{y: -pos+ 'rem'}}  
                className=' w-full h-full bg-zinc-200'> 
                <video className="w-full h-full object-cover" 
                src={'./layoutland-43.mp4'} controls autoPlay loop muted></video>
                </motion.div>
                
                <motion.div 
                animate={{y: -pos+ 'rem'}}  
                className=' w-full h-full bg-zinc-300'> </motion.div>
                <motion.div 
                animate={{y: -pos+ 'rem'}}  
                className=' w-full h-full bg-zinc-400'> </motion.div>
                <motion.div 
                animate={{y: -pos+ 'rem'}}  
                className=' w-full h-full bg-zinc-500'> </motion.div>
                <motion.div 
                animate={{y: -pos+ 'rem'}}  
                className=' w-full h-full bg-zinc-600'> </motion.div>
            </motion.div>
        </div>

        
    </div>
  )
}

export default Products