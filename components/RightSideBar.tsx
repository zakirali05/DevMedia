"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import {ChevronDown} from "lucide-react"
import Image from "next/image"
const users = [
  {
    id: "",
    userId : "",
    profile : "",
    username : "Joseph Murphy",
    bio : "Mern stack web developer",
    occupation : "web developer"
  },
  {
    id: "",
    userId : "",
    profile : "",
    username : "Killian Nolan",
    bio : "Web developer",
    occupation : "web developer"
  },
  {
    id: "",
    userId : "",
    profile : "",
    username : "Shane Luis",
    bio : "Web developer",
    occupation : "android developer"
  },
  {
    id: "",
    userId : "",
    profile : "",
    username : "Brandy Fyre",
    bio : "Web developer",
    occupation : "ios developer"
  },
  {
    id: "",
    userId : "",
    profile : "",
    username : "Christian Bale",
    bio : "Web developer",
    occupation : "web developer"
  },
  {
    id: "",
    userId : "",
    profile : "",
    username : "Joseph Bale",
    bio : "Web developer",
    occupation : "web developer"
  },
  {
    id: "",
    userId : "",
    profile : "",
    username : "Robert Downey",
    bio : "Web developer",
    occupation : "web developer"
  },
]

const RightSideBar = () => {
  const [filter,setFilter] = useState("web developer")
  console.log(filter)
  return (
    <div className="w-80 border-l  h-full p-4  hidden fixed lg:block right-0 ">
      <div className="h-full w-full flex flex-col items-start justify-start">
        <div className="flex items-center justify-between w-full pb-4">
          <h1 className="font-semibold ">Similiar Minds</h1>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost"size="icon"><ChevronDown className="h-4 w-4 font-medium"/></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={()=>setFilter("web developer")}>Web Developers</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>setFilter("android developer")}>Android Developers</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>setFilter("ios developer")}>Ios Developers</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>setFilter("aiml engineering")}>AIML Engineering</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="w-full flex flex-col items-start justify-between  gap-6">
          {users.map((user)=>(
           user.occupation === filter && (   <div key={user.bio + user.username} className="flex items-center justify-between gap-8 w-full">
           <div className="flex items-center justify-center gap-2">
             <Image src={user.profile.length >0 ?`${user.profile}` :"/user.jpg"} alt="porfile" className="w-10 h-10 rounded-full" 
             width={100}
             height={100}
             />
             <div className="flex flex-col items-start justify-start ">
               <h2 className="font-[600] text-sm">{user.username}</h2>
               <p className="text-xs font-medium text-muted-foreground">{user.bio.slice(0,10)}...</p>
             </div>
           </div>
           <Button className="bg-purple-500 text-white">Follow</Button>
         </div>) 
          ))}
        </div>
      </div>
    </div>
  )
}

export default RightSideBar