import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
    title: string;
}

export const Header = ({ title }: Props) => {
    return (
        <div className="flex justify-between items-center sticky top-0 mb-5 lg:mt-[-28px] pb-3 lg:pt-[28px] border-b-2 text-neutral-400 lg:z-50">
            <Link href='/courses'>
                <Button size='sm' variant='ghost'>
                    <ArrowLeft className="w-5 h-5 stroke-2 text-neutral-400" />
                </Button>
            </Link>
            <h1 className="font-bold text-xl">
                {title}
            </h1>
        </div>
    )
}