import { Metadata } from "next";
import Image from "next/image"
import {Heart , Share2 , MessageSquare} from "lucide-react"

export const metadata: Metadata = {
  title: "DevMedia | Feed",
  description: "Worlds most modern social media website for developers",
};

const posts = [
  {
    id: 1,
    user: {
      id: "",
      userId: "",
      profile: "",
      username: "Joseph Murphy",
      bio: "Mern stack web developer",
      occupation: "web developer",
    },
    content:
      "This is my first post on dev media and i am a web developer . I dont know weather i am going to complete this project or not...",
    likes: [
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
    ],
    comments: [
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is first testing comment",
      },
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is second testing comment",
      },
    ],
  },
  {
    id: 2,
    user: {
      id: "",
      userId: "",
      profile: "",
      username: "Joseph Murphy",
      bio: "Mern stack web developer",
      occupation: "web developer",
    },
    content:
      "DevMedia is an amazinf social media app . It helped me alot in growing in my career",
    likes: [
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
    ],
    comments: [
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is first testing comment",
      },
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is second testing comment",
      },
    ],
  },
  {
    id: 3,
    user: {
      id: "",
      userId: "",
      profile: "",
      username: "Joseph Murphy",
      bio: "Mern stack web developer",
      occupation: "web developer",
    },
    content:
      "Done todays work!!",
    likes: [
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
    ],
    comments: [
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is first testing comment",
      },
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is second testing comment",
      },
    ],
  },
  {
    id: 3,
    user: {
      id: "",
      userId: "",
      profile: "",
      username: "Joseph Murphy",
      bio: "Mern stack web developer",
      occupation: "web developer",
    },
    content:
      "Done todays work!!",
    likes: [
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
    ],
    comments: [
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is first testing comment",
      },
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is second testing comment",
      },
    ],
  },
  {
    id: 3,
    user: {
      id: "",
      userId: "",
      profile: "",
      username: "Joseph Murphy",
      bio: "Mern stack web developer",
      occupation: "web developer",
    },
    content:
      "Done todays work!!",
    likes: [
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
    ],
    comments: [
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is first testing comment",
      },
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is second testing comment",
      },
    ],
  },
  {
    id: 3,
    user: {
      id: "",
      userId: "",
      profile: "",
      username: "Joseph Murphy",
      bio: "Mern stack web developer",
      occupation: "web developer",
    },
    content:
      "Done todays work!!",
    likes: [
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
    ],
    comments: [
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is first testing comment",
      },
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is second testing comment",
      },
    ],
  },
  {
    id: 3,
    user: {
      id: "",
      userId: "",
      profile: "",
      username: "Joseph Murphy",
      bio: "Mern stack web developer",
      occupation: "web developer",
    },
    content:
      "Done todays work!!",
    likes: [
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
    ],
    comments: [
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is first testing comment",
      },
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is second testing comment",
      },
    ],
  },
  {
    id: 3,
    user: {
      id: "",
      userId: "",
      profile: "",
      username: "Joseph Murphy",
      bio: "Mern stack web developer",
      occupation: "web developer",
    },
    content:
      "Done todays work!!",
    likes: [
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
      {
        id: "",
        userId: "",
        profile: "",
        username: "Joseph Murphy",
        bio: "Mern stack web developer",
        occupation: "web developer",
      },
    ],
    comments: [
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is first testing comment",
      },
      {
        user: {
          id: "",
          userId: "",
          profile: "",
          username: "Joseph Murphy",
          bio: "Mern stack web developer",
          occupation: "web developer",
        },
        comment: "This is second testing comment",
      },
    ],
  },
];

const FeedPage = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center w-full  justify-center gap-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-full rounded-md  border p-5 cursor-pointer"
          >
         <div className="">
         <div  className="flex items-center justify-between gap-8 w-full">
           <div className="flex items-center justify-center gap-2">
             <Image src={post.user.profile.length >0 ?`${post.user.profile}` :"/user.jpg"} alt="porfile" className="w-10 h-10 rounded-full" 
             width={100}
             height={100}
             />
             <div className="flex flex-col items-start justify-start ">
               <h2 className="font-[600] text-sm">{post.user.username}</h2>
               <p className="text-xs font-medium text-muted-foreground">{post.user.bio.slice(0,10)}...</p>
             </div>
           </div>
          
         </div>
            <p className="text-sm  font-semibold dark:text-white/80 pt-3">
              {post.content.slice(0, 250)}...
            </p>
            <div className="flex item-center justify-start  py-3 gap-4 ">
                <p className="text-sm font-medium   dark:text-muted-foreground">{post.likes.length} likes</p>
                <p className="text-sm font-medium   dark:text-muted-foreground">{post.comments.length} comments</p>
            </div>
            <div className="flex items-center justify-start gap-4 pt-2">
            <Heart className="h-5 w-5 font-medium text-black/90   dark:text-muted-foreground"  />
            <MessageSquare className="h-5 w-5 font-medium text-black/90   dark:text-muted-foreground"/>
            <Share2 className="h-5 w-5 font-medium text-black/90   dark:text-muted-foreground"/>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};
export default FeedPage;
