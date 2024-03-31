import Image from "next/image";

type Props = {
    question: string;
}

export const QuestionBubble = ({ question }: Props) => {
    return (
        <div className="flex items-center gap-x-4 mb-6">
            <Image
                src='/mascot.svg'
                alt="Mascot"
                width={60}
                height={60}
                className="hidden lg:block"
            />
            <Image
                src='/mascot.svg'
                alt="Mascot"
                width={40}
                height={40}
                className="block lg:hidden"
            />
            <div className="relative px-4 py-2 border-2 rounded-xl text-sm lg:text-base">
                {question}
                <div className="absolute top-1/2 -left-3 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-y-1/2 rotate-90" />
            </div>
        </div>
    )
}