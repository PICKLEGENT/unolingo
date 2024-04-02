import Link from "next/link"
import Image from "next/image"

import { Button } from "./ui/button"
import { quests } from "@/constants"
import { Progress } from "./ui/progress"

type Props = {
    points: number
}

export const Quests = ({ points }: Props) => {
    return (
        <div className="p-4 space-y-4 border-2 rounded-xl">
            <div className="flex justify-between items-center w-full space-y-2">
                <h3 className="font-bold text-lg">
                    Quests
                </h3>
                <Link href='/quests'>
                    <Button
                        variant='primaryOutline'
                        size='sm'
                    >
                        View all
                    </Button>
                </Link>
            </div>
            <ul className="w-full space-y-4">
                {quests.map((quest) => {
                    const progress = (points / quest.value) * 100;

                    return (
                        <div
                            key={quest.title}
                            className="flex items-center pb-4 gap-x-3 w-full border-t-2"
                        >
                            <Image
                                src='/points.svg'
                                alt="Points"
                                width={40}
                                height={40}
                            />
                            <div className="flex flex-col gap-y-2 w-full">
                                <p className="font-bold text-sm text-neutral-700">
                                    {quest.title}
                                </p>
                                <Progress value={progress} className="h-3" />
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div >
    )
}