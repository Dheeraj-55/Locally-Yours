import React from 'react';
import { Button } from '@/components/ui/button';

interface CopyButtonProps {
    text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard');
        }).catch((error) => {
            console.error('Failed to copy text: ', error);
        });
    };

    return (
        <Button variant='ghost' className='text-primary' onClick={handleCopy}>
            Copy
        </Button>
    );
};

export default CopyButton;
