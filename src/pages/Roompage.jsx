import { useEffect, useState } from "react";
import Room from "../components/Room";
import EnterRoom from "../components/EnterRoom";

export default function Roompage() {

  const [PvP, setPvP] = useState(false)

  // setPvP(true)
  const [newPlayer, setNewPlayer] = useState("")
  
  const [roomDummy, setRoomDummy] = useState([
    "laksono",
    "indah",
    "amik"
  ]);

  
  
  useEffect(()=>{
    if(localStorage.getItem("name")) {

      setNewPlayer(localStorage.getItem("name"))
    }
  },[])
  
  useEffect(()=>{
    if(newPlayer){
      setRoomDummy([...roomDummy, newPlayer])

    }

  },[newPlayer])
  
  return (
    <div className="bg-[url('https://cdn.dribbble.com/users/2968360/screenshots/7533734/__.gif')] w-full h-screen bg-cover  ">

      <div className=" flex flex-wrap gap-10 p-20 justify-center">
          <Room data={roomDummy} />

      </div>
    </div>
  );
}
