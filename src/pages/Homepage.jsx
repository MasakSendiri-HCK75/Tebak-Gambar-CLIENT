import { useContext, useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Swal from "sweetalert2";
import { SocketContext } from "../contexts/appSocket";
import Exit from "../components/Exit";

export default function HomePage() {
  
  const navigate = useNavigate();
  const socket = useContext(SocketContext);

  let [data, setData] = useState([]); // data room
  let [leader, setLeader] = useState([]);

  if(!socket) navigate("/")

  useEffect(() => {
    if(!socket) return navigate("/")
    socket?.emit("username", localStorage.getItem("username"));
    socket?.on("Greetings with username", (data) => {
        // console.log(data.rooms, "ini socket");
      // console
      setData(data.rooms);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: data.message,
      });
    });

    socket?.on("showLeaderBoard:broadcast", (leaderBoard) => {
      setLeader(leaderBoard);
    });
  }, []);

  return (
    <>
    <Exit/>
    
      <div className="w-screen h-screen bg-[url('./assets/1.jpg')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
        <div className="flex flex-row justify-center items-center space-x-10 mt-40">
          <Link to='/room'><button className="btn btn-lg w-80 h-40 bg-[url('/assets/multiplayer.png')] bg-cover bg-center text-white font-extrabold text-5xl rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl duration-300 ease-in-out flex items-center justify-center">
            Multiplayer
          </button></Link>
        </div>

        <div className="mt-20 absolute top-5 middle-5 w-1/4 h-1/3 bg-gradient-to-r from-yellow-400 to-red-500 bg-opacity-70 rounded-xl shadow-lg border-2 border-white p-4">
          <h1 className="font-bold text-3xl text-center text-white mb-4">
            Leaderboard
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal text-sm">
              <thead>
                <tr className="bg-gray-800 text-white text-center">
                  <th className="px-4 py-2 border-b-2 border-gray-200 font-semibold tracking-wider">
                    Rank
                  </th>
                  <th className="px-4 py-2 border-b-2 border-gray-200 font-semibold tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-2 border-b-2 border-gray-200 font-semibold tracking-wider">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-800 text-center">
                <tr className="hover:bg-gray-200 transition duration-300 ease-in-out">
                  <td className="px-4 py-2 border-b border-gray-200">1</td>
                  <td className="px-4 py-2 border-b border-gray-200">Amik</td>
                  <td className="px-4 py-2 border-b border-gray-200">9999</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
}
