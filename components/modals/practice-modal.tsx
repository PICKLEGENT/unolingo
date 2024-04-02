'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '../ui/button'
import { usePracticeModal } from '@/store/use-practice-modal'

export const PracticeModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false)
    const { isOpen, close } = usePracticeModal()

    useEffect(() => setIsClient(true), [])

    if (!isClient) return null

    return (
        <Dialog open={isOpen} onOpenChange={close} >
            <DialogContent className='max-w-md'>
                <DialogHeader>
                    <div className='flex justify-center items-center mb-5 w-full'>
                        <Image src='/heart.svg' alt='Heart' width={100} height={100} />
                    </div>
                    <DialogTitle className='text-center font-bold text-2xl'>
                        Practice lesson
                    </DialogTitle>
                    <DialogDescription className='text-center text-base'>
                        Use practice lessons to regain hearts and points. You cannot loose heard or points in practice lessons.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className='mb-4'>
                    <div className='flex flex-col gap-y-4 w-full'>
                        <Button variant='primary' size='lg' className='w-full' onClick={close}>
                            I understand
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}