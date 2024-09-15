"use client"
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import FormSection from '../../_components/FormSection';
import OutputSection from '../../_components/OutputSection';
import { TEMPELATE } from '../../_components/TempelateSection';
import Templates from '@/app/(data)/Templates';
import { ArrowLeft} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { chatSession } from '@/utils/AIModal';
import {db} from '@/utils/db'
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { TotalUsageContext } from '@/app/(context)/totalUsagecontext';

import { UpdateCreditContext } from '@/app/(context)/UpdateCreditUsage';
import { useRouter } from 'next/navigation';
import { UserSubscriptionContext } from '@/app/(context)/UseRSubscription';
interface PROPS{
  params:{
    'template-slug':string,
  }
}
function CreateNewContent(props:PROPS) {
  const {user}=useUser();
  const router = useRouter();
 const [loading,setLoading]=useState(false);
 const[aiOutput,setAIOutput]=useState<string>('');
  const selectedTemplate:TEMPELATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
  const {totalusage,setTotalUsage}= useContext(TotalUsageContext);
  const {userSubscription,setUserSubscription}=useContext(UserSubscriptionContext);
  const{UpdateCreditUsage,setUpdateUsage}=useContext(UpdateCreditContext);
  //Used to generate content from AI
  // @param formData
  // @returns
  const GenerateAIContent=async(formData:any)=>{
    if(totalusage >=10000 &&!userSubscription){
      router.push('/dashboard/billing')
      console.log("Please Upgrade")
      return ;
    }
    setLoading(true);
     const selectedPrompt = selectedTemplate?.aiPrompt;
     const FinalAIPrompt = JSON.stringify({ formData, selectedTemplate: selectedPrompt });
     const result = await chatSession.sendMessage(FinalAIPrompt);
     console.log(result.response.text());
     setLoading(false);
     setAIOutput(result?.response.text());
      await SaveInDb(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text())
      setLoading(false);
      setUpdateUsage(Date.now());
  }
    const SaveInDb = async(formData:any,slug:any,aiResp:string)=>{
      const result = await db.insert(AIOutput).values({
        formData:formData,
        tempelateSlug:slug,
        aiResponse:aiResp,
        createdBy:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format('DD/MM/yyyy')
      })

      console.log(result);
     }
  return (
    <div className='p-10'>
      <Link href="/dashboard"><Button><ArrowLeft/>Back</Button></Link>
        
       
    
     <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
      {/* {FormSection} */}
      <FormSection selectedTemplate={selectedTemplate}
      userFormInput={(v:any)=>GenerateAIContent(v)}
      loading={loading}/>
      {/* OutputSection */}
      <div className='col-span-2'>
      <OutputSection aiOutput={aiOutput}/>
      </div>
      
    </div>
    </div>
    
  )
}
export default CreateNewContent;


