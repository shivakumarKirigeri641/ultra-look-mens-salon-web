import React from 'react'
import StaffLoginBigScreen from'../staff/StaffLoginBigScreen';
import StaffLoginMobileScreen from'../staff/StaffLoginMobileScreen';
const StaffLogin = () => {
  return (
    <div className='mt-5'>
      {/**monitor */}
      <div className='hidden md:flex'>
        <StaffLoginBigScreen/>
      </div>
      {/**monitor */}

      {/**mobile */}
      <div className='flex md:hidden'>
      <StaffLoginMobileScreen/>
      </div>
      {/**mobile */}
    </div>    
  )
}

export default StaffLogin