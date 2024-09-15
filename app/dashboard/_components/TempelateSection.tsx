
import Templates from '@/app/(data)/Templates'
import React, { useState,useEffect  } from 'react'
import TempelateCard from './TempelateCard'

export interface TEMPELATE{
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]
}
export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean
}
function TempelateSection({userSearchInput}:any) {
    const [tempelateList,setTempelateList] = useState(Templates)
    useEffect(() => {
        if (userSearchInput) {
            const filterData = Templates.filter(item =>
                item.name.toLowerCase().includes(userSearchInput.toLowerCase())
            )
            setTempelateList(filterData)
        } else {
            setTempelateList(Templates)
        }
    }, [userSearchInput])
    return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-col-5 gap-5 p-10'>
       {tempelateList.map((item:TEMPELATE,index:number)=>(
        <TempelateCard {...item}/>
       ))}
    </div>
  )
}

export default TempelateSection
