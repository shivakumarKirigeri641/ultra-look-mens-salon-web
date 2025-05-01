import React from 'react'
import HeaderBScreeen from './HeaderBScreen';
import HeaderMobileScreen from './HeaderMobileScreen'
import { useSelector } from 'react-redux';

const Header = () => {  
  const staff = useSelector((store)=>store.staff);
  const admin = useSelector((store)=>store.admin);
  return (
    <div>
      <div className='hidden md:block'>
        <HeaderBScreeen/>
      </div>
      <div className='block md:hidden'>
        <HeaderMobileScreen/>
      </div>
    </div>
  )
}

export default Header