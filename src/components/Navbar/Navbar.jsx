import React, {  useEffect,useRef } from 'react'
import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = ({scrollToSection,home,feed,contact,about}) => {
  const size=useWindowSize()
const [list, setlist] = useState({
    home: "Home",
    feed: "Feed",
    contact: "Contact",
    about: "About"
})

useEffect(() => {
  if(size.width < 440){
      setlist({
          home: <img src='./public/home.png' className='w-5 h-5' alt=''/>,
          feed: <img src='./public/feed.png' className='w-5 h-5' alt=''/>,
          contact: <img src='./public/contact.png' className='w-5 h-5' alt=''/>,
          about: <img src='./public/about.png' className='w-5 h-5' alt=''/>
      })
  }else{
      setlist({
          home: "Home",
          feed: "Feed",
          contact: "Contact",
          about: "About"
      })
  }
}, [size.width])

    return (
                <div className="fixed flex flex-wrap justify-center bottom-6 inset-x-0 px-2 z-20">
                    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black text-[#45b1df] px-10 py-2 rounded-2xl">
                        <ul className='flex flex-row gap-[2rem] items-center justify-between sm:gap-20'>
                        <li onClick={() => scrollToSection(home)} className=' cursor-pointer'> {list.home}</li>
                        <li onClick={() => scrollToSection(feed)}  className=' cursor-pointer'>{list.feed}</li>
                        <li onClick={() => scrollToSection(home)}  className=' cursor-pointer'> 
                     <Link to='/'><img src="./kalplogo.png" className="w-10 h-10" alt="" /></Link> </li>
                        <li onClick={() => scrollToSection(contact)}  className=' cursor-pointer'>{list.contact}</li>
                        <li onClick={() => scrollToSection(about)}  className=' cursor-pointer'> {list.about}</li>
                        </ul>
                    </div>
                </div>
    )
}

export default Navbar