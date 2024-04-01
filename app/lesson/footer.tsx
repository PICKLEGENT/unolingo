import { useMedia, useKey } from 'react-use'
import { CheckCircle, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type Props = {
    status: 'correct' | 'wrong' | 'none' | 'completed';
    onCheck: () => void;
    disabled?: boolean;
    lessonId?: boolean;
}

export const Footer = ({ disabled, status, onCheck, lessonId }: Props) => {
    useKey('Enter', onCheck, {}, [onCheck])

    const isMobile = useMedia('(max-width: 1024px)')

    return (
        <footer className={cn(
            'lg:h-[140px] h-[100px] border-t-2',
            status === 'correct' && 'border-transparent bg-green-100',
            status === 'wrong' && 'border-transparent bg-rose-100'
        )}>
            <div className='flex justify-between items-center px-6 lg:px-10 max-w-[1140px] mx-auto h-full'>
                {status === 'correct' && (
                    <div className='flex items-center font-bold text-green-500 text-base lg:text-2xl'>
                        <CheckCircle className='w-6 h-6 lg:w-10 lg:h-10 mr-4' />
                        Nicely done!
                    </div>
                )}
                {status === 'wrong' && (
                    <div className='flex items-center font-bold text-rose-500 text-base lg:text-2xl'>
                        <XCircle className='w-6 h-6 lg:w-10 lg:h-10 mr-4' />
                        Try again.
                    </div>
                )}
                {status === 'completed' && (
                    <Button
                        variant='default'
                        size={isMobile ? 'sm' : 'lg'}
                        onClick={() => window.location.href = `/lesson/${lessonId}`}
                    >
                        Practice again
                    </Button>
                )}
                <Button
                    variant={status === 'wrong' ? 'danger' : 'secondary'}
                    size={isMobile ? 'sm' : 'lg'}
                    disabled={disabled}
                    onClick={onCheck}
                    className='ml-auto'
                >
                    {status === 'correct' && 'Next'}
                    {status === 'wrong' && 'Retry'}
                    {status === 'none' && 'Check'}
                    {status === 'completed' && 'Continue'}
                </Button>
            </div>
        </footer>
    )
}