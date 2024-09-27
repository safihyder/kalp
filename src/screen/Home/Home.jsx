import React, { forwardRef } from 'react'
import Intro from '../../components/Intro/Intro'

const Home = forwardRef((props,ref) => {
  return (
    <div ref={ref} className='w-[100vw] h-fit tablet:h-[100vh] flex items-center justify-center mb-20'>
    <div id='home' className='w-[98vw] h-fit tablet:h-[100vh]  rounded-lg bg-[#151313]'>
        <Intro/>
    </div>
    </div>
  )
})

export default Home