import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className?: string;
}

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn('flex flex-col lg:fixed top-0 left-0 px-4 lg:w-[256px] h-full border-r-2', className)}>
            <Link href='/learn'>
                <div className="flex items-center pt-8 pl-4 pb-7 gap-x-3">
                    <Image src='/mascot.svg' height={40} width={40} alt="Mascot" />
                    <h1 className="font-extrabold text-2xl text-green-600 tracking-wide">Unolingo</h1>
                </div>
            </Link>
            <div className="flex flex-col flex-1 gap-y-2">
                <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
                <SidebarItem label="Leaderboard" href="/leaderboard" iconSrc="/leaderboard.svg" />
                <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg" />
                <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    )
}