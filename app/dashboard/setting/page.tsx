import { UserProfile } from '@clerk/nextjs'
import React from 'react'

export default function setting() {
  return (
    <div className='flex justify-center items-center h-full'>
      <UserProfile/>
    </div>
  )
}

