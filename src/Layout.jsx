import React from 'react'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './screen/Footer/Footer'
import Loader from './components/Animations/Loader'

const Layout = () => {
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
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout