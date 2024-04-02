import Image from "next/image"
import { redirect } from "next/navigation"

import { Promo } from "@/components/promo"
import { Quests } from "@/components/quests"
import { Separator } from "@/components/ui/separator"
import { FeedWrapper } from "@/components/feed-wrapper"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { UserProgress } from "@/components/user-progress"

import { getTopTenUsers, getUserProgress, getUserSubscription } from "@/db/queries"

const LeaderboardPage = async () => {
    const userProgressData = getUserProgress()
    const userSubscriptionData = getUserSubscription()
    const leaderboardData = getTopTenUsers()

    const [
        userProgress,
        userSubscription,
        leaderboard,
    ] = await Promise.all([
        userProgressData,
        userSubscriptionData,
        leaderboardData
    ])

    if (!userProgress || !userProgress.activeCourse) redirect('/courses')

    const isPro = !!userSubscription?.isActive

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={isPro}
                />
                {!isPro && (
                    <Promo />
                )}
                <Quests points={userProgress.points} />
            </StickyWrapper>
            <FeedWrapper>
                <div className="flex flex-col items-center w-full">
                    <Image
                        src='/leaderboard.svg'
                        alt="Leaderboard"
                        width={90}
                        height={90}
                    />
                    <h1 className="my-6 text-center font-bold text-2xl text-neutral-800">
                        Leaderboard
                    </h1>
                    <p className="mb-6 text-center text-lg text-muted-foreground">
                        See where you stand among other learners in the community
                    </p>
                    <Separator className="mb-4 h-0.5 rounded-full" />
                    {leaderboard.map((userProgress, index) => (
                        <div
                            key={userProgress.userId}
                            className="flex items-center p-2 w-full rounded-xl hover:bg-gray-200/50"
                        >
                            <p className="mr-4 font-bold text-lime-700">
                                {index + 1}
                            </p>
                            <Avatar className="mr-6 w-12 h-12 border bg-green-500">
                                <AvatarImage
                                    src={userProgress.userImageSrc}
                                    alt='Avatar'
                                    className="object-cover"
                                />
                            </Avatar>
                            <p className="flex-1 font-bold text-stone-800">
                                {userProgress.userName}
                            </p>
                            <p className="text-muted-foreground">
                                {userProgress.points} XP
                            </p>
                        </div>
                    ))}
                </div>
            </FeedWrapper>
        </div>
    )
}

export default LeaderboardPage