import React from 'react'
import { useParams } from 'react-router-dom'
const FeedElement = () => {
    let {feedid}=useParams()
    feedid=feedid.split('-').map(e=>e[0].toUpperCase()+e.slice(1)+' ');
  return (
    <div className='flex text-center bg-orange-500 text-3xl items-center justify-center  p-4'>Feed: {feedid} </div>
  
  )
}

export default FeedElement