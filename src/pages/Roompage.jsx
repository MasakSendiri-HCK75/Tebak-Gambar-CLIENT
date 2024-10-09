import { useEffect, useState } from "react";
import Room from "../components/Room";
import EnterRoom from "../components/EnterRoom";

export default function Roompage() {
  const [room, setRoom] = useState({
    name:"",
    members:[]
  });

  const [roomDummy, setRoomDummy] = useState([
    "laksono",
    "indah",
    "fahmi",
    "bagus",
    "ninda"
  ]);

  const handleEnterRoom = (e)=>{
    const {name, value} = e.target
    setRoom((room)=>({
        ...room,
        [name]:value
    })) 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setRoomDummy([...roomDummy, room])
  };


  useEffect(()=>{
    roomDummy
  },[])

  return (
    <div className="bg-[url('./assets/bg.jpg')] w-full h-screen bg-cover bg-no-repeat">

      <div className="flex flex-wrap gap-10 p-20 justify-center">
          <Room data={roomDummy} />
      

      </div>
    </div>
  );
}
