import { MobileSidebar } from "./mobile-sidebar"

export const MobileHeader = () => {
    return (
        <nav className="lg:hidden flex items-center fixed top-0 px-6 w-full h-[50px] border-b bg-green-500 z-50 ">
            <MobileSidebar />
        </nav>
    )
}