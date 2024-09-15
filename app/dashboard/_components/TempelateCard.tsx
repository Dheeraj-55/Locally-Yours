import React from 'react'
import { TEMPELATE } from './TempelateSection'
import Image from 'next/image'
import Link from 'next/link'
function TempelateCard(item:TEMPELATE) {
  return (
    <Link href={'/dashboard/content/' + item?.slug}>
  <div className='p-5 shadow-md rounded-md border bg-white 
    flex flex-col cursor-pointer hover:scale-105 transition-all'>
      <Image src={item.icon} alt='icon'
      width={50} height={50}/>
      <h2 className='font-md text-lg'>{item.name}</h2>
      <p className='text-gray-500 line-clamp-3'>{item.desc}</p>
    </div>
  </Link>
    
  )
}
export default  TempelateCard
