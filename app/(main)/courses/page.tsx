import { getCourses, getUserProgress } from "@/db/queries"
import { List } from "./list";

const CoursesPage = async () => {
    const courses = await getCourses();
    const userProgress = await getUserProgress();

    return (
        <div className="mx-auto px-3 max-w-[912px] h-full">
            <h1 className="font-bold text-2xl text-neutral-700">Languages Course</h1>
            <List
                courses={courses}
                activeCourseId={userProgress?.activeCourseId}
            />
        </div>
    )
}

export default CoursesPage