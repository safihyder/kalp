import React, { forwardRef } from 'react'
import Card from '../../components/Card/Card'
import Explorebtn from '../../components/Explorebtn/Explorebtn'
import feeddata from '../../data/feeds.json'


const Feed = forwardRef((props,ref) => {
  
  return (
    <div ref={ref} id='feed' className='flex flex-col items-center justify-center mb-20 h-fit tablet:h-[90vh]'>
        <div className='flex flex-col tablet:flex-row items-center justify-around'>
        {
          feeddata.map(({content,heading,img})=>{
            return <Card heading={heading} content={content} key={heading} img={img}/>
          })
        }
        </div>
        <div className='flex flex-row items-center justify-end gap-20'>
            <Explorebtn/>
        </div>
    </div>
  )
})

export default Feed