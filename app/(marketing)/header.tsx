import { Button } from "@/components/ui/button"
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"
import Image from "next/image"

const Header = () => {
    return (
        <header className="px-4 w-full h-20 border-b-2 border-slate-200">
            <div className="lg:max-w-screen-lg mx-auto flex justify-between items-center h-full bg-">
                <div className="flex items-center pt-8 pl-4 pb-7 gap-x-3">
                    <Image src='/mascot.svg' height={40} width={40} alt="Mascot" />
                    <h1 className="font-extrabold text-2xl text-green-600 tracking-wide">Unolingo</h1>
                </div>
                <ClerkLoading>
                    <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                            <Button size='lg' variant='ghost'>Login</Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    )
}

export default Header