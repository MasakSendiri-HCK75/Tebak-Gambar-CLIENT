import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState, useContext, useEffect } from "react";
import { SocketContext } from "../contexts/appSocket";
export default function Room() {

  let [data, setData] = useState([]); // data room
  let [leader, setLeader] = useState([]);

  const navigate = useNavigate();
  const socket = useContext(SocketContext);

  useEffect(() => {
    if(!socket) return navigate("/")
    socket?.emit("username", localStorage.getItem("username"));
    socket?.on("Greetings with username", (data) => {
      //   console.log(data.rooms, "ini socket");
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
  }, [leader]);

  const handleClick = () => {
    // console.log("KLIKED")
    navigate("/quiz");
  };

  return (
    <div className=" flex flex-col justify-center items-center gap-10 mt-24">
      <div className="overflow-x-auto bg-amber-50 rounded-md">
        <table className="table text-lg w-96">
          {/* head */}
          <thead>
            <tr className="bg-amber-500 text-white text-xl">
              <th>No</th>
              <th>Player</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {leader.length === 0? (
              <th>Loading</th>
            ) : 
              (leader.map((el, i) => (
                <tr key={i}>
              <th>{i + 1}</th>
              <td>{el.player}</td>
              <td>{el.score}</td>
            </tr>
            )))}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <button
          onClick={handleClick}
          className="w-52 btn bg-cover bg-center text-white font-bold text-2xl px-12 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl duration-300 ease-in-out"
          style={{
            backgroundImage: "url('https://i.pinimg.com/originals/0a/e6/d6/0ae6d6b90d8f455ce7f742ff1887d714.gif')",
            backgroundSize: "cover",
          }}
        >
        </button>
      </div>
    </div>
  );
}
