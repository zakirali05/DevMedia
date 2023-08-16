"use client"
import {useState,useEffect} from 'react'

const HydrationAvoider = ({children}:{children:React.ReactNode }) => {
  
    const [ismounted , setIsMounted] = useState(false)
  useEffect(()=>{
    setIsMounted(true)
  })
  if(!ismounted){
    return null
  }
  return (
    {children}
  )
  
}

export default HydrationAvoider