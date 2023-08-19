"use client"

import { cn } from "@/lib/utils"
import {Home,Search,Plus,User,Settings} from "lucide-react"
import {usePathname} from "next/navigation"
import Link from "next/link"
const links = [
    {
        label : "Home",
        icon :  Home,
        href : "/feed"
    },
    {
        label : "Search",
        icon :  Search,
        href : "/search"
    },
    {
        label : "Create",
        icon : Plus ,
        href : "/create"
    },
 
    {
        label : "Profile",
        icon : User ,
        href : "/profile"
    },
    {
        label : "Settings",
        icon : Settings ,
        href : "/settings"
    },

 
]

const BottomBar = () => {
    const path = usePathname()
  return (
    <div className="fixed   bottom-0 p-4 border-t  block  md:hidden w-full bg-muted dark:bg-slate-900 ">
        <div className="w-full h-full flex items-center justify-between px-4">
            {links.map((link)=>(

                <Link href={link.href} className={cn("p-3 rounded-md",path.includes(link.href)?"bg-purple-500 text-white" : "")}>
                   <link.icon className="w-5 h-5"/>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default BottomBar