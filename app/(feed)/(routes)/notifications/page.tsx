import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DevMedia | Notifications",
  description: "Get your latest notifications from devmedia",
};

const notifications = [
  {
    doer: {
      id: "",
      userId: "",
      profile: "",
      username: "Robert Downey",
      bio: "Web developer",
      occupation: "web developer",
    },
    action: "like",
    doneon: {
      id: "",
      userId: "",
      profile: "",
      username: "Cillian Murphy",
      bio: "Web developer",
      occupation: "web developer",
    },
  },
  {
    doer: {
      id: "",
      userId: "",
      profile: "",
      username: "Robert Downey",
      bio: "Web developer",
      occupation: "web developer",
    },
    action: "comment",
    doneon: {
      id: "",
      userId: "",
      profile: "",
      username: "Cillian Murphy",
      bio: "Web developer",
      occupation: "web developer",
    },
  },
  {
    doer: {
      id: "",
      userId: "",
      profile: "",
      username: "Robert Downey",
      bio: "Web developer",
      occupation: "web developer",
    },
    action: "like",
    doneon: {
      id: "",
      userId: "",
      profile: "",
      username: "Cillian Murphy",
      bio: "Web developer",
      occupation: "web developer",
    },
  },
  {
    doer: {
      id: "",
      userId: "",
      profile: "",
      username: "Robert Downey",
      bio: "Web developer",
      occupation: "web developer",
    },
    action: "comment",
    doneon: {
      id: "",
      userId: "",
      profile: "",
      username: "Cillian Murphy",
      bio: "Web developer",
      occupation: "web developer",
    },
  },
  {
    doer: {
      id: "",
      userId: "",
      profile: "",
      username: "Robert Downey",
      bio: "Web developer",
      occupation: "web developer",
    },
    action: "like",
    doneon: {
      id: "",
      userId: "",
      profile: "",
      username: "Cillian Murphy",
      bio: "Web developer",
      occupation: "web developer",
    },
  },
  {
    doer: {
      id: "",
      userId: "",
      profile: "",
      username: "Robert Downey",
      bio: "Web developer",
      occupation: "web developer",
    },
    action: "comment",
    doneon: {
      id: "",
      userId: "",
      profile: "",
      username: "Cillian Murphy",
      bio: "Web developer",
      occupation: "web developer",
    },
  },
  {
    doer: {
      id: "",
      userId: "",
      profile: "",
      username: "Robert Downey",
      bio: "Web developer",
      occupation: "web developer",
    },
    action: "like",
    doneon: {
      id: "",
      userId: "",
      profile: "",
      username: "Cillian Murphy",
      bio: "Web developer",
      occupation: "web developer",
    },
  },
  {
    doer: {
      id: "",
      userId: "",
      profile: "",
      username: "Robert Downey",
      bio: "Web developer",
      occupation: "web developer",
    },
    action: "comment",
    doneon: {
      id: "",
      userId: "",
      profile: "",
      username: "Cillian Murphy",
      bio: "Web developer",
      occupation: "web developer",
    },
  },
];

const you = "Cillian Murphy";

const NotificationPage = () => {
  return (
    <div className="w-full ">
      <div className="w-full flex flex-col items-start justify-center gap-4">
        {notifications.map(
          (notification) =>
            notification.doneon.username === you && (
              <div className="p-3 border text-sm font-medium flex rounded-md dark:text-white/80">
                {notification.action === "like" ? (
                  <div>
                    <p className="flex gap-1 items-center justify-center">
                      <span className="hover:underline cursor-pointer flex gap-3 items-center">
                        <Image
                          src={
                            notification.doer.profile.length > 0
                              ? notification.doer.profile
                              : "/user.jpg"
                          }
                          alt="user"
                          height="100"
                          width="100"
                          className="h-6 w-6 rounded-full"
                        />
                        {notification.doer.username.split(" ")[0]}{" "}
                        liked your post
                      </span>{" "}
                      
                    </p>
                  </div>
                ) : (
                  <div>
                    {" "}
                    <p className="flex gap-1 items-center justify-center">
                      <span className="hover:underline cursor-pointer flex gap-3 items-center">
                        {" "}
                        <Image
                          src={
                            notification.doer.profile.length > 0
                              ? notification.doer.profile
                              : "/user.jpg"
                          }
                          alt="user"
                          height="100"
                          width="100"
                          className="h-6 w-6 rounded-full"
                        />{" "}
                        {notification.doer.username.split(" ")[0]} {" "}
                        commented on your post
                      </span>{" "}
                      
                    </p>
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};
export default NotificationPage;
