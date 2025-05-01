import React from 'react'
import { useSelector } from 'react-redux'
import FeedGeneral from './FeedGeneral';
import FeedStaff from './FeedStaff';
import FeedAdmin from './FeedAdmin';
const Feed = () => {
  const staff = useSelector((store)=>store.staff);
  const admin = useSelector((store)=>store.admin);
  return (
    <div>
      {
        !staff && !admin && (
          <div>
            <FeedGeneral/>
          </div>
        )
      }
      {
        staff && (
          <div>
            <FeedStaff/>
          </div>
        )
      }
      {
        admin && (
          <div>
            <FeedAdmin/>
          </div>
        )
      }
    </div>
  )
}

export default Feed