import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-md mx-auto py-10 flex gap-2'>
            <Card width={"basis-2/5"} start={false} para={true}/>
            <Card width={"basis-3/5"} start={true} para={false} hover="hover:bg-violet-500"/>
        </div>
    </div>
  )
}

export default Cards