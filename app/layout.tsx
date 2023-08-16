

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DevMedia",
  description:
    "A social media platform for all the developers around the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    
    <ClerkProvider>
 
      <html lang="en">
      
        <body className={montserrat.className}>
          <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
         
            {children}
         
          </ThemeProvider>
        </body>
       
      </html>
      
     
    </ClerkProvider>
  
  );
}
