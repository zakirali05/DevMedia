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
      {/* Navbar */}
      <div className="flex items-center justify-center">
        {/* left bar */}
        { children }
        {/* right bar */}
      </div>
{/* footer */}
    </div>
  ) 
}
