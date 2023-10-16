"use client"
import React from 'react'
import NavBar from '../homeComponent/navBar'
import ProfileContainer from './profileContainer'
import SummaryContainer from './summaryContainer'

function page() {
  return (
    <div>
      <NavBar/>
      <ProfileContainer/>
      <SummaryContainer/>      
    </div>
  )
}

export default page




