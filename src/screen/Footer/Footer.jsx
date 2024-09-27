import React from 'react'
import SocialIcons from '../../components/SocialIcons/SocialIcons'

const Footer = () => {
  
  return (
    <div className='flex flex-row justify-around h-[80vh]  pt-10 relative mb-32' >
        <div className='flex flex-col items-center justify-center'>
        <img className='phone:visible invisible' src="./kalpLogo.png" alt="" width={200} height={200} />
        </div>
        <div className='flex flex-col items-center tablet-w-fit w-[90%] absolute'>
          <h1 className='mb-10 tablet:text-4xl text-3xl font-bold text-white'>Developer Details</h1>
          
            {/* <h1 className='mt-10 text-3xl text-white'>Khatamul Ambia Library</h1> */}
            <SocialIcons/>
            <h2 className='mt-10 text-2xl text-white text-center'>Created with love by <span className='text-[#45b1df] 
            underline underline-offset-2 '><a href="https://my-portfolio-tawny-three-51.vercel.app/" target='_blank'>Safi_Hyder</a></span></h2>
        </div>
        <div className='flex flex-col items-center justify-center'>
        {/* <div className='flex flex-col items-center justify-center w-[200px] h-[200px] border-[1px] rounded-[50%] border-[#45b1df]'> */}
            {/* <img src="./bluebook.png" alt=""  width={150}/> */}
        <img className='phone:visible invisible'  src='./kalpLogo.png' alt="" width={200} height={200} />

          {/* </div> */}
        </div>
    </div>
  )
}

export default Footer