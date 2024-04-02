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
import { useHeartsModal } from '@/store/use-hearts-modal'

export const HeartsModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false)
    const { isOpen, close } = useHeartsModal()

    useEffect(() => setIsClient(true), [])

    const onClick = () => {
        close()
        router.push('/store')
    }

    if (!isClient) return null

    return (
        <Dialog open={isOpen} onOpenChange={close} >
            <DialogContent className='max-w-md'>
                <DialogHeader>
                    <div className='flex justify-center items-center mb-5 w-full'>
                        <Image src='/mascot_bad.svg' alt='Mascot' width={80} height={80} />
                    </div>
                    <DialogTitle className='text-center font-bold text-2xl'>
                        You ran out of hearts!
                    </DialogTitle>
                    <DialogDescription className='text-center text-base'>
                        Get Pro for unlimited hearts, or purchase them in the store.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className='mb-4'>
                    <div className='flex flex-col gap-y-4 w-full'>
                        <Button variant='primary' size='lg' className='w-full' onClick={onClick}>
                            Get unlimited hearts
                        </Button>
                        <Button variant='primaryOutline' size='lg' className='w-full' onClick={close}>
                            No thanks
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}