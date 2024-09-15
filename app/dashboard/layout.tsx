"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/totalUsagecontext';
import { UpdateCreditContext } from '../(context)/UpdateCreditUsage';
import { UserSubscriptionContext } from '../(context)/UseRSubscription';
function layout( {
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalusage,setTotalUsage]=useState<Number>(0);
  const [userSubscription,setUserSubscription]=useState<boolean>(false);
  const[UpdateCreditUsage,setUpdateUsage]=useState<any>();
  return (
    <TotalUsageContext.Provider value={{totalusage,setTotalUsage}}>
      <UserSubscriptionContext.Provider value={{userSubscription,setUserSubscription}}>
      <UpdateCreditContext.Provider value={{UpdateCreditUsage,setUpdateUsage}}>
      <div className='bg-slate-100 h-screen'>
        <div className='md:w-64 hidden md:block fixed'>
            <SideNav/>
        </div>
        <div className='md:ml-64'>
            <Header/>
            {children}</div>
      
    </div>
      </UpdateCreditContext.Provider>   
      </UserSubscriptionContext.Provider>
    
    </TotalUsageContext.Provider>
   
  )
}

export default layout
