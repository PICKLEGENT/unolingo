import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
    variant: 'points' | 'hearts';
    value: number;
}

export const ResultCard = ({ variant, value }: Props) => {
    const imageSrc = variant === 'hearts' ? '/hearts.svg' : '/points.svg'

    return (
        <div className={cn(
            'w-full border-2 rounded-2xl',
            variant === 'points' && 'border-orange-400 bg-orange-400',
            variant === 'hearts' && 'border-rose-500 bg-rose-500'
        )}>
            <div className={cn(
                'p-1.5 font-bold text-xs text-white text-center uppercase rounded-t-xl',
                variant === 'points' && 'bg-orange-400',
                variant === 'hearts' && 'bg-rose-500'
            )}>
                {variant === 'hearts' ? 'Hearts Left' : 'Total XP'}
            </div>
            <div className={cn(
                'flex justify-center items-center p-6 font-bold text-lg rounded-2xl bg-white',
                variant === 'points' && 'text-orange-500',
                variant === 'hearts' && 'text-rose-500'
            )}>
                <Image
                    src={imageSrc}
                    alt="Icon"
                    width={30}
                    height={30}
                    className="mr-1.5"
                />
                {value}
            </div>
        </div>
    )
}