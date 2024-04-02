import { redirect } from "next/navigation"

import { Promo } from "@/components/promo"
import { Quests } from "@/components/quests"
import { FeedWrapper } from "@/components/feed-wrapper"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { UserProgress } from "@/components/user-progress"

import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress, getUserSubscription } from "@/db/queries"

import { Unit } from "./unit"
import { Header } from "./header"

const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const courseProgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage();
    const unitsData = getUnits();
    const userSubscriptionData = getUserSubscription()

    const [
        userProgress,
        units,
        courseProgress,
        lessonPercentage,
        userSubscription
    ] = await Promise.all([
        userProgressData,
        unitsData,
        courseProgressData,
        lessonPercentageData,
        userSubscriptionData
    ])

    if (!userProgress || !userProgress.activeCourse) redirect('/courses');
    if (!courseProgress) redirect('/courses');

    const isPro = !!userSubscription?.isActive

    return (
        <div className="flex gap-[48px] px-6">
            <FeedWrapper>
                <Header title={userProgress.activeCourse.title} />
                {units.map((unit) => (
                    <div key={unit.id} className="mb-10">
                        <Unit
                            id={unit.id}
                            title={unit.title}
                            description={unit.description}
                            lessons={unit.lessons}
                            order={unit.order}
                            activeLesson={courseProgress.activeLesson}
                            activeLessonPercentage={lessonPercentage}
                        />
                    </div>
                ))}
            </FeedWrapper>
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
        </div>
    )
}

export default LearnPage