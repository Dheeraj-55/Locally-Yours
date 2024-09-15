"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection';
import TempelateSection from './_components/TempelateSection';

function Dashboard() {
  const [userSearchInput,setSearchUserInput]=useState<string>();
  return (
   
    <div>
    {/* SearchSection */}
    <SearchSection onSearchInput={(value:string)=>setSearchUserInput(value)}/>
    {/* Tempelate Section */}
    <TempelateSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard;
