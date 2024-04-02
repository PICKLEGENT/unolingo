import { Loader } from "lucide-react"

const Loading = () => {
    return (
        <div className="flex justify-center items-center w-full h-full" >
            <Loader className="w-6 h-6 text-muted-foreground animate-spin" />
        </div>
    )
}

export default Loading