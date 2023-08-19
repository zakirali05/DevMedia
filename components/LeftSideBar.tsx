"use client"

import { cn } from "@/lib/utils"
import {Home , Search,Plus, Bell, User,Settings} from "lucide-react"
import Link from 'next/link'
import {Montserrat} from "next/font/google"
import {usePathname} from "next/navigation"

const montserrat = Montserrat({subsets:["latin"],weight:['100','200','300','400','500','600','700','800','900']})
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



const LeftSideBar = () => {

   const path = usePathname()
   
  return (
    <div className="hidden md:flex md:w-20  lg:w-60 border-r   fixed  items-start justify-center    h-full">
    <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:p-4 w-full">
        {links.map((link)=>(
           
            <Link href={link.href} key={link.href} className={cn("flex items-center justify-between hover:bg-slate-200  dark:hover:text-black   transition duration-300 cursor-pointer  py-3 rounded-md  w-[80%] px-5",path.includes(link.href)?"bg-purple-500": "")}>
              <link.icon className={cn("h-5 w-5",path.includes(link.href)?"text-white": "")}/>
            <p className={cn(" font-[600] md:hidden lg:block  ",montserrat.className ,path.includes(link.href)?"text-white": "")}>{link.label}</p>
            </Link>
        ))}
    </div>
    </div>
  )
}

export default LeftSideBar