"use client"

import React from 'react';
import { HISTORY } from '../history/page';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface HistoryListProps {
    historyList: HISTORY[];
    getTemplateName: (slug: string) => any;
}

const HistoryList: React.FC<HistoryListProps> = ({ historyList, getTemplateName }) => {
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard');
        }).catch((error) => {
            console.error('Failed to copy text: ', error);
        });
    };

    return (
        <>
            {historyList.map((item: HISTORY) => (
                <div key={item.id} className='grid grid-cols-7 my-5 py-3 px-3'>
                    <h2 className='col-span-2 flex gap-2 items-center'>
                        <Image src={getTemplateName(item?.tempelateSlug)?.icon} alt='History_Image' width={25} height={25} />
                        {getTemplateName(item.tempelateSlug)?.name}
                    </h2>
                    <h2 className='col-span-2 line-clamp-3'>{item?.aiResponse}</h2>
                    <h2>{item?.createdAt}</h2>
                    <h2>{item?.aiResponse.length}</h2>
                    <h2>
                        <Button variant='ghost' className='text-primary' onClick={() => handleCopy(item.aiResponse)}>
                            Copy
                        </Button>
                    </h2>
                </div>
            ))}
        </>
    );
};

export default HistoryList;
