import { useEffect, useState } from "react";
import Room from "../components/Room";
import EnterRoom from "../components/EnterRoom";

export default function Roompage() {
  const [room, setRoom] = useState({
    name:"",
    members:[]
  });

  const [roomDummy, setRoomDummy] = useState([
    {
      name: "room1",
      members: ["user1", "user2", "user3"],
    },
    {
      name: "room2",
      members: ["indah", "laksono", "fahmi", "bagus", "ninda"],
    },
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
      <div className="w-full p-4">
        {/* enter room */}
        <EnterRoom room={room} handleEnterRoom={handleEnterRoom} handleSubmit={handleSubmit}/>
        {/* end of enter room */}
      </div>
      <div className="flex flex-wrap gap-10 p-20">
        {roomDummy.map((el,i) => (
          <Room key={i} data={el} />
        ))}
      

      </div>
    </div>
  );
}
