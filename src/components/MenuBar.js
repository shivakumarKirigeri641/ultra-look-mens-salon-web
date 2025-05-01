import React from 'react'
import { useSelector } from 'react-redux'
import MenuBarGeneral from './MenuBarGeneral';
import MenuBarAdmin from './MenuBarAdmin';
import MenuBarStaff from './MenuBarStaff';
const MenuBar = () => {
  const staff = useSelector((store)=>store.staff);
  const admin = useSelector((store)=>store.admin);
  return (
    <div className='bg-[#3E5879]'>
      {
        !staff && !admin && (
          <MenuBarGeneral/>
        )
      }
      {
        staff && (
          <MenuBarStaff/>
        )
      }
      {
        admin && (
          <MenuBarAdmin/>
        )
      }
    </div>    
  )
}

export default MenuBar