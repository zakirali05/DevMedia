import { Button } from '@/components/ui/button'
import { currentUser } from '@clerk/nextjs'
import Link from 'next/link'


export default async  function Home() {
  const user =await  currentUser()
  return (
    <div>
      <h1>Welcome to DevMedia</h1>
     <Link href={user?"/feed":"/sign-in"}><Button>Login</Button></Link>
     <Link href={user?"/feed":"/sign-up"}><Button variant="ghost">Register</Button></Link> 
    </div>
  )
}
