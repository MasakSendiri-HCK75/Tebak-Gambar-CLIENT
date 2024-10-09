import { useNavigate } from "react-router-dom";


export default function Room({ data }) {
  const navigate = useNavigate()
  
  const handleClick= ()=>{
    // console.log("KLIKED")
    navigate("/gameplay")
  }
  

  return (
    <div className=" flex flex-col justify-center gap-10">
      <div className="overflow-x-auto bg-stone-400 rounded-lg">
        <table className="table table-zebra text-lg w-96">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>No</th>
              <th>Player</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((el, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{el}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <button onClick={handleClick} className="btn btn-accent">PLAY GAME</button>
      </div>
    </div>
  );
}
