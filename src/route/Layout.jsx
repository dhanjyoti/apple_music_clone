import React from 'react'
import SideNavbar from '../components/SideNavbar'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import "./layout.css";

const Layout = () => {
  return (
    <div className='mainContainer'>
        <SideNavbar/>
        <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
            <Header/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout