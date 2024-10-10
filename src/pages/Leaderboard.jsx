import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../contexts/appSocket";
import Exit from "../components/Exit";
import { useNavigate } from "react-router-dom";

export default function Leaderboard() {
    const socket = useContext(SocketContext);
    const [leader, setLeader] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        if(!socket) return navigate("/")
        socket?.on("showLeaderBoard:broadcast", (leaderBoard) => {
           

            setLeader(leaderBoard);
        });
    }, [leader])

    return (
        <div>
            <h1>Leader Board</h1>
            {leader?.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                <>
                <Exit/>
                <div className="top-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Score</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leader?.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{user.username}</td>
                                        <td>{user.score}</td>
                                        <td>{new Date().toLocaleDateString()}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </>
            )}
        </div>
            
    );
}