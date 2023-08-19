"use client"

import { cn } from "@/lib/utils"
import { UserButton } from "@clerk/nextjs"
import {Montserrat} from "next/font/google"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { Moon, Sun , Bell } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const montserrat = Montserrat({subsets:["latin"]})


const Navbar = () => {
    const { setTheme } = useTheme()
  return (
    <nav className="flex bg-muted dark:bg-slate-900  items-center justify-between px-4 py-2 border-b fixed w-full">
      <div className="flex items-center justify-center gap-3">
        {/* <Image src="/DM.png" alt="logo" width="100" height="100" className="h-9 w-9 rounded-full" /> */}
        <h1 id="hide"  className="p-[0.5rem] font-bold  text-sm text-[cursive] dark:bg-white dark:text-black rounded-full bg-black text-white">
          DM
        </h1>
        <h1 className={cn("font-bold text-lg cursor-pointer",montserrat.className)}>DevMedia.</h1>
        </div>
        <div className="flex items-center justify-center gap-2">
      <Button variant="ghost" size="icon">
       <Link href="/notifications"><Bell className="w-5 h-5"/></Link> 
      </Button>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
            <UserButton afterSignOutUrl="/"/>
        </div>
    </nav>
  )
}

export default Navbar