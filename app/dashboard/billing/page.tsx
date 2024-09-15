"use client"
import { UserSubscriptionContext } from "@/app/(context)/UseRSubscription";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import axios from 'axios';
import { Loader2Icon } from "lucide-react";
import moment from "moment";
import React, { useContext, useEffect} from 'react'
import { useState } from "react";

export default function Billing() {
  
  const [loading,setLoading]=useState(false);
  const {user} =useUser();
  const {userSubscription,setUserSubscription}=useContext(UserSubscriptionContext);
  const makePayment = () => {
    setLoading(true);
    axios.post('/api/create-subscription', {})
      .then(resp => {
        console.log(resp.data);
        OnPayment(resp.data.id);
      })
      .catch(error => {
        setLoading(false)
        console.error('Error making payment:', error);
       
      });
      
  };
 const OnPayment=(subId:string)=>{
  const options={
    "key":process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    "subscription_id":subId,
    "name":'AI CONTENT GENERATOR',
    description:'Monthly Subscription',
    handler:async(resp:any)=>{
      console.log(resp);
      if(resp){
        SaveSubscription(resp?.razorpay_payment_id);
      }
      setLoading(false)
     
    }
  }
  // @ts-ignore
  const rzp1= new window.Razorpay(options);
  rzp1.open();
 }
 
 const SaveSubscription=async(paymentID:string)=>{
  const result=await db.insert(UserSubscription)
  .values({email:user?.primaryEmailAddress?.emailAddress,
    userName:user?.fullName,
    active:true,
    paymentId:paymentID,
    joinDate:moment().format('DD/MM/yyyy')
  })
  console.log(result);
  if(result){
    window.location.reload();
  }
 }
  return (
    <div>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h2 className="text-center font-bold text-3xl my-3">Upgrade With Monthly Plan</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
        <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              Free<span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 sm:mt-4">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">0$</h2>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="text-gray-700">10,000 Words/Month</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="text-gray-700">50+ Content Templates</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="text-gray-700">Unlimited Download & Copy</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="text-gray-700">1 Month of History</span>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              Monthly<span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">9.99$</strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="text-gray-700">100,000 Words/Month</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="text-gray-700">50+ Template Access</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="text-gray-700">Unlimited Download & Copy</span>
            </li>
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-indigo-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="text-gray-700">1 Year of History</span>
            </li>
          </ul>
          
          <Button disabled={loading}
          className="items-center flex gap-2 justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input  shadow-sm hover:bg-accent bg:primary hover:text-accent-foreground h-9 w-full rounded-full mt-5 p-6" onClick={(e) => makePayment(e)}>
            {loading&&<Loader2Icon className='animate-spin'/>} 
           {userSubscription?'Active Plan':'Get Started'} 
          </Button>
        </div>
      </div>
    </div>
    </div>
    
  );
}
