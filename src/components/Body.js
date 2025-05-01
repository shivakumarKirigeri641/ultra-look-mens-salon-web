import React from 'react'
import Header from './Header';
import Footer from './Footer';
import MenuBar from '../components/Menus/MenuBar';
import { Outlet } from 'react-router'

const Body = () => {
  return (
    <div>
        <Header/>
        <MenuBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body