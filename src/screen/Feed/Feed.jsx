import React, { forwardRef } from 'react'
import Card from '../../components/Card/Card'
import Explorebtn from '../../components/Explorebtn/Explorebtn'



const Feed = forwardRef((props,ref) => {
  return (
    <div ref={ref} id='feed' className='flex flex-col items-center justify-center mb-20 h-fit tablet:h-[90vh]'>
        <div className='flex flex-col tablet:flex-row items-center justify-around'>
        <Card heeading={"Sunday Classes"} content={"Imam Mehdi (aj) and our responsibilities"} img={'./SundayClass.png'}/>
        <Card heeading={"Book Reading"} content={"Give your 15 minutes for everyday book reading"} img={'./bookreading.png'}/>
        <Card heeading={"Ali(as) Day"} content={"Ali(as) day is an initiative to remark the attributes of Imam Ali (as) among children"} img={'./aliday.png'}/>
        </div>
        <div className='flex flex-row items-center justify-end gap-20'>
            <Explorebtn/>
        </div>
    </div>
  )
})

export default Feed