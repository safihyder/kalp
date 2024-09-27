import { useState, useEffect,useRef } from 'react'
import Home from './screen/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './screen/About/About'
import Contact from './screen/Contact/Contact'
import Feed from './screen/Feed/Feed'
import Footer from './screen/Footer/Footer'
import Loader from './components/Animations/Loader'
import './App.css'

function App() {
  const home = useRef(null);
  const feed = useRef(null);
  const contact = useRef(null);
  const about = useRef(null);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      // Simulate an API call
      setTimeout(() => {
          setLoading(false);
      }, 4000);
  }, []);
  if (loading) {
      return <div className='flex w-100 h-[100vh] items-center justify-center'><Loader /></div>
  }
  // Function to scroll to the section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
   <Navbar
   scrollToSection={scrollToSection} 
   home={home} 
   feed={feed} 
   contact={contact} 
   about={about} 
   />
    <Home ref={home}/>
    <Feed ref={feed}/>
    <Contact ref={contact}/>
    <About ref={about}/>
    <hr />
  </>
  )
}

export default App
