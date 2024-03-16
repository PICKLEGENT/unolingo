import { Button } from "@/components/ui/button"
import Image from "next/image"

const Footer = () => {
    return (
        <footer className="hidden lg:block p-2 w-full h-20 border-t-2 border-slate-200">
            <div className="flex justify-evenly items-center mx-auto max-w-screen-lg h-full">
                <Button size='lg' variant='ghost' className="w-full">
                    <Image src='/hr.svg' alt="Croatian" width={32} height={32} className="mr-4 rounded-md" />
                    Croatian
                </Button>
                <Button size='lg' variant='ghost' className="w-full">
                    <Image src='/es.svg' alt="Spanish" width={32} height={32} className="mr-4 rounded-md" />
                    Spanish
                </Button>
                <Button size='lg' variant='ghost' className="w-full">
                    <Image src='/fr.svg' alt="French" width={32} height={32} className="mr-4 rounded-md" />
                    French
                </Button>
                <Button size='lg' variant='ghost' className="w-full">
                    <Image src='/it.svg' alt="Italian" width={32} height={32} className="mr-4 rounded-md" />
                    Italian
                </Button>
                <Button size='lg' variant='ghost' className="w-full">
                    <Image src='/jp.svg' alt="Japanese" width={32} height={32} className="mr-4 rounded-md" />
                    Japanese
                </Button>
            </div>
        </footer>
    )
}

export default Footer