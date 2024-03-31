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
import { useExitModal } from '@/store/use-exit-modal'

export const ExitModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false)
    const { isOpen, close } = useExitModal()

    useEffect(() => setIsClient(true), [])

    if (!isClient) return null

    return (
        <Dialog open={isOpen} onOpenChange={close} >
            <DialogContent className='max-w-md'>
                <DialogHeader>
                    <div className='flex justify-center items-center mb-5 w-full'>
                        <Image src='/mascot_sad.svg' alt='Mascot' width={80} height={80} />
                    </div>
                    <DialogTitle className='text-center font-bold text-2xl'>
                        Wait, don&apos;t go!
                    </DialogTitle>
                    <DialogDescription className='text-center text-base'>
                        You&apos;re about to leave the lesson. Are you sure?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className='mb-4'>
                    <div className='flex flex-col gap-y-4 w-full'>
                        <Button variant='primary' size='lg' className='w-full' onClick={close}>
                            Keep learning
                        </Button>
                        <Button variant='dangerOutline' size='lg' className='w-full' onClick={() => { close(); router.push('/learn') }}>
                            End session
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}