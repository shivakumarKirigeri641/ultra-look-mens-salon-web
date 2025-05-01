import React from 'react'
import { useSelector } from 'react-redux'
import MenuBarGeneral from '../Menus/MenuBarGeneral';
import MenuBarAdmin from '../Menus/MenuBarAdmin';
import MenuBarStaff from '../Menus/MenuBarStaff';
const MenuBar = () => {
  const staff = useSelector((store)=>store.staff);
  const admin = useSelector((store)=>store.admin);
  return (
    <div className='bg-[#3E5879] shadow-xl'>
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