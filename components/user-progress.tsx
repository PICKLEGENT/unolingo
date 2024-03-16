import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type Props = {
    activeCourse: { title: string; imageSrc: string }; // TODO: Поменять с типов в БД
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}

export const UserProgress = ({ activeCourse, hearts, points, hasActiveSubscription }: Props) => {
    return (
        <div className="flex justify-between items-center w-full gap-x-2">
            <Link href='/courses'>
                <Button variant='ghost'>
                    <Image src={activeCourse.imageSrc} alt={activeCourse.title} width={32} height={32} className="border rounded-md" />
                </Button>
            </Link>
            <Link href='/shop'>
                <Button variant='ghost' className="text-orange-500">
                    <Image src='/points.svg' alt="points" width={28} height={28} className="mr-2" />
                    {points}
                </Button>
            </Link>
            <Link href='/shop'>
                <Button variant='ghost' className="text-rose-500">
                    <Image src='/heart.svg' alt="points" width={22} height={22} className="mr-2" />
                    {hasActiveSubscription ? <InfinityIcon className="w-4 h-4 stroke-[3]" /> : hearts}
                </Button>
            </Link>
        </div>
    )
}