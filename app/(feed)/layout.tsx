import BottomBar from "@/components/BottomBar";
import LeftSideBar from "@/components/LeftSideBar";
import Navbar from "@/components/Navbar";
import RightSideBar from "@/components/RightSideBar";
import {Metadata} from "next"


export const metadata: Metadata = {
  title: "DevMedia | Feed",
  description:
    "Worlds most modern social media website for developers",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <div className="h-full">
     <Navbar/>
      <div className="flex items-start pt-[56.67px] h-full">
       <LeftSideBar/>
       <div className="pl-0 md:pl-20  lg:pl-60 ">
        { children }
        </div>
        <RightSideBar/>
      </div>
<BottomBar/>
    </div>
  ) 
}
