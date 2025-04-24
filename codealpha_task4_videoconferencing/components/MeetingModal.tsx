'use client';
import { ReactNode } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Image from 'next/image';

interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    children?: ReactNode;
    handleClick?: () => void;
    buttonText?: string;
    instantMeeting?: boolean;
    image?: string;
    buttonClassName?: string;
    buttonIcon?: string;
}

const MeetingModal = ({
    isOpen,
    onClose,
    title,
    className,
    children,
    handleClick,
    buttonText,
    image,
    buttonClassName,
    buttonIcon
}: MeetingModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="flex w-full max-w-[600px] flex-col gap-8 border-none bg-gradient-to-r from-gray-800 via-gray-900 to-black px-8 py-10 text-white shadow-lg rounded-lg">
                <div className="flex flex-col items-center gap-6">
                    {image && (
                        <div className="flex justify-center">
                            <Image
                                src={image}
                                alt="checked"
                                width={80}
                                height={80}
                                className="rounded-full shadow-md"
                            />
                        </div>
                    )}
                    <h1
                        className={cn(
                            'text-4xl font-extrabold leading-tight text-center',
                            className
                        )}
                    >
                        {title}
                    </h1>
                    <div className="w-full text-center text-lg text-gray-300">
                        {children}
                    </div>
                    <Button
                        className={cn(
                            'bg-blue-600 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ease-in-out',
                            buttonClassName
                        )}
                        onClick={handleClick}
                    >
                        {buttonIcon && (
                            <Image
                                src={buttonIcon}
                                alt="button icon"
                                width={16}
                                height={16}
                                className="inline-block mr-2"
                            />
                        )}
                        {buttonText || 'Schedule Meeting'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MeetingModal;
