import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
    id: number;
    title: string;
    imageSrc: string;
    onClick: (id: number) => void;
    disable?: boolean;
    active?: boolean;
}

export const Card = ({ id, title, imageSrc, onClick, disable, active }: Props) => {
    return (
        <div
            onClick={() => onClick(id)}
            className={cn('flex flex-col justify-between items-center p-3 pb-6 min-w-[200px] min-h-[217px] h-full border-2 border-b-4 rounded-xl hover:bg-black/5 active:border-b-2 cursor-pointer', disable && 'pointer-events-none opacity-50')}
        >
            <div className="flex justify-end items-center min-[24px] w-full">
                {active && (
                    <div className="flex justify-center items-center p-1.5 rounded-md bg-green-600">
                        <Check className="w-4 h-4 stroke-[4] text-white" />
                    </div>
                )}
            </div>
            <Image
                src={imageSrc}
                alt={title}
                width={93.33}
                height={70}
                className="border object-cover rounded-lg drop-shadow-md"
            />
            <p className="mt-3 font-bold text-center text-neutral-700">{title}</p>
        </div>
    )
}