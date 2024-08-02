import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
   const {userid} = useParams()
  return (
    <div className='py-5 bg-orange-600 text-center text-white text-3xl'>
      User: {userid}
    </div>
  )
}

export default User
