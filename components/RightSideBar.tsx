"use client"

import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import {ChevronDown} from "lucide-react"
import Image from "next/image"
const users = [
  {
    profile : "",
    username : "Joseph Murphy",
    bio : "Mern stack web developer"
  },
  {
    profile : "",
    username : "Killian Nolan",
    bio : "Web developer"
  },
  {
    profile : "",
    username : "Shane Luis",
    bio : "Web developer"
  },
  {
    profile : "",
    username : "Brandy Fyre",
    bio : "Web developer"
  },
  {
    profile : "",
    username : "Christian Bale",
    bio : "Web developer"
  },
]

const RightSideBar = () => {
  return (
    <div className="w-80 bg-muted dark:bg-slate-900 h-full p-4  hidden fixed md:block right-0 ">
      <div className="h-full w-full flex flex-col items-start justify-start">
        <div className="flex items-center justify-between w-full pb-4">
          <h1 className="font-semibold ">Similiar Minds</h1>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost"size="icon"><ChevronDown className="h-4 w-4 font-medium"/></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Web Developers</DropdownMenuItem>
              <DropdownMenuItem>Android Developers</DropdownMenuItem>
              <DropdownMenuItem>Ios Developers</DropdownMenuItem>
              <DropdownMenuItem>AIML Engineering</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="w-full flex flex-col items-start justify-between  gap-6">
          {users.map((user)=>(
            <div key={user.bio + user.username} className="flex items-center justify-between gap-8 w-full">
              <div className="flex items-center justify-center gap-2">
                <Image src={user.profile.length >0 ?`${user.profile}` :"/user.jpg"} alt="porfile" className="w-10 h-10 rounded-full" 
                width={100}
                height={100}
                />
                <div className="flex flex-col items-start justify-start ">
                  <h2 className="font-[600]">{user.username}</h2>
                  <p className="text-sm font-medium text-muted-foreground">{user.bio.slice(0,10)}...</p>
                </div>
              </div>
              <Button className="bg-purple-500 text-white">Follow</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RightSideBar