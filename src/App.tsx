import { useEffect, useState } from "react";
import Notification from "./Notification";
import 
{angelaGray ,
annaKim, 
jacobThomson, 
kimberlySmith, 
markWebber, 
nathanPeterson, 
rizkyHasanuddin, 
chess} 
from './assets/images/index';


function App() {
  const [notifNumber, setNotifNumber] = useState(0)
  const [data, setData] = useState([
    {
      id:1,
      name: "Mark Webber",
      avatar: markWebber,
      action: "reacted to your recent post",
      target: "My first tournement today",
      time: "1m ago",
      isRead: false,
    },
    {
      id:2,
      name: "Angela Gray",
      avatar: angelaGray,
      action: "followed you",
      time: "5m ago",
      isRead: false,
    },
    {
      id:3,
      name: "Jacob Thomson",
      avatar: jacobThomson,
      action: "has joined your group",
      group: "Chess Club",
      time: "1day ago",
      isRead: false,
    },
    { 
      id:4,
      name: "Rizky Hasanuddin",
      avatar: rizkyHasanuddin,
      action: "sent you a private message",
      message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and i'm already having lots of fun and improving my game.",
      time: "5 days ago",
      isRead: true,
    },
    {
      id:5,
      name: "Kimberly Smith",
      avatar: kimberlySmith,
      action: "commented on your picture",
      targetPic: chess,
      time: "1 week ago",
      isRead: true,
    },
     {
      id:6,
      name: "Nathan Peterson",
      avatar: nathanPeterson,
      action: "reacted to your recent post",
      target: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
      isRead: true,
     },
     {
      id:7,
      name: "Anna Kim",
      avatar: annaKim,
      action: "left the group",
      group: "Chess Club",
      time: "2 weeks ago",
      isRead: true,
     }
  ])

   function getNotif() {
    let counter = 0;
    data.map(notif => !notif.isRead? counter++ : null)
    return counter;
  } 

   useEffect(() => {
    setNotifNumber(getNotif())
  }, [data]) 


const readHandler = () => {
  setData(prevData => 
    prevData.map(prevNotif => 
      ({
        ...prevNotif,
        isRead: true
      }
      )))
}
  return (
    <div className="w-full px-4 py-6 bg-white sm:max-w-screen-md sm:mx-auto sm:p-8 sm:mt-20 sm:shadow-2xl sm:rounded-2xl">
        <header className="w-full flex items-center justify-start">
          <h1 className="text-neutral-blue-6 font-extrabold text-xl">Notifications</h1>
          <p className="bg-primary-blue text-white h-6 w-8 text-center rounded-md ml-2">{notifNumber}</p>
          <button className="ml-auto text-neutral-blue-4 active:text-primary-blue" onClick={readHandler}>Mark all as read</button>
        </header>
       <main className="mt-8">
          {
            data.map(notif => (
              <Notification key={notif.id} {...notif}/>
            ))
          }
        </main>
    </div>
  );
}

export default App;