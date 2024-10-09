import { useNavigate } from "react-router-dom";

export default function Room({ data }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // console.log("KLIKED")
    navigate("/gameplay");
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
        <button
          onClick={handleClick}
          className="btn bg-cover bg-center text-white font-bold text-2xl px-12 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl duration-300 ease-in-out"
          style={{
            backgroundImage: "url('https://i.pinimg.com/originals/0a/e6/d6/0ae6d6b90d8f455ce7f742ff1887d714.gif')",
            backgroundSize: "cover",
          }}
        >
          PLAY GAME
        </button>
      </div>
    </div>
  );
}
