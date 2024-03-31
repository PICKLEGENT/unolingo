import { challenges } from "@/db/schema"
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
    id: number;
    text: string;
    imageSrc: string | null;
    audioSrc: string | null;
    shortcut: string;
    selected?: boolean;
    onClick: () => void;
    status?: 'correct' | 'wrong' | 'none';
    disabled: boolean;
    type: typeof challenges.$inferSelect['type'];
}

export const Card = ({
    id,
    text,
    imageSrc,
    audioSrc,
    shortcut,
    selected,
    onClick,
    status,
    disabled,
    type,
}: Props) => {
    return (
        <div
            onClick={() => { }}
            className={cn("h-full border-2 border-b-4 rounded-xl hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2",
                selected && 'border-sky-300 bg-sky-100 hover:bg-sky-100',
                selected && status === 'correct' && 'border-green-300 bg-green-100 hover:bg-green-100',
                selected && status === 'wrong' && 'border-rose-300 bg-rose-100 hover:bg-red-100',
                disabled && 'pointer-events-none hover:bg-white',
                type === 'ASSIST' && 'lg:p-3 w-full'
            )}
        >
            {imageSrc && (
                <div className="relative aspect-square mb-4 max-h-[80px] lg:max-h-[150px] w-full">
                    <Image src={imageSrc} alt={text} fill />
                </div>
            )}
            <div className={cn(
                'flex justify-between items-center',
                type === 'ASSIST' && 'flex-row-reverse'
            )}>
                {type === 'ASSIST' && <div />}
                <p className={cn(
                    'text-neutral-600 text-sm lg:text-base',
                    selected && 'text-sky-500',
                    selected && status === 'correct' && 'text-green-500',
                    selected && status === 'wrong' && 'text-rose-500',
                )}>
                    {text}
                </p>
                <div className={cn(
                    'lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] flex justify-center items-center border-2 rounded-xl text-neutral-400 lg:text-[15px] font-semibold text-xs',
                    selected && 'text-sky-500 border-sky-300 ',
                    selected && status === 'correct' && 'text-green-500 border-green-500',
                    selected && status === 'wrong' && 'text-rose-500 border-rose-500',
                )}>
                    {shortcut}
                </div>
            </div>
        </div>
    )
}