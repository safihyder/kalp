import React from 'react'
import { useParams } from 'react-router-dom'
import feeddata from '../../data/feeds.json'
const FeedElement = () => {
  let { feedid } = useParams()
  return (
    <div className=' flex justify-center w-[100vw] min-h-[100vh]'>
      {
         feeddata.map(({detailContent,heading,img})=>{
          if(feedid === heading){
  feedid = feedid.split('-').map(e => e[0].toUpperCase() + e.slice(1) + ' ');
          return <div className='w-[90vw] mt-5 mb-10 min-h-[90vh] rounded-3xl bg-[#222627] py-5 flex tablet:flex-row flex-col items-center justify-around shadow-lg shadow-[#45b1df]'>
          <div className='tablet:w-[40%] flex items-center justify-center'>
            <img className='rounded w-[150px] phone:w-[250px]' src={img} alt="" />
          </div>
          <div className='tablet:w-[60%] flex flex-col items-center'>
            <h1 className='text-white text-4xl phone:text-5xl font-bold mt-3 text-center mb-2'><span>{feedid}</span></h1>
            <p className='text-white text-justify w-[80%] text-sm  mt-3 text-center leading-7'>
              {detailContent}
            </p>
          </div>
        </div>
          }
        })
      
      }
    </div>
  )
}

export default FeedElement