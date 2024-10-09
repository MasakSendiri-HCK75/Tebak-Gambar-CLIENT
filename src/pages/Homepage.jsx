export default function HomePage() {
  return (
    <>
      <div className="w-screen h-screen bg-[url('./assets/bg.jpg')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center p-10">
        <div className="flex flex-row justify-center items-center space-x-10 mt-10">
          <button className="btn btn-lg w-80 h-40 bg-[url('/assets/1v1.png')] bg-cover bg-center text-white font-extrabold text-5xl rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl duration-300 ease-in-out flex items-center justify-center">
            1 vs 1
          </button>
          <button className="btn btn-lg w-80 h-40 bg-[url('/assets/multiplayer.png')] bg-cover bg-center text-white font-extrabold text-5xl rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl duration-300 ease-in-out flex items-center justify-center">
            Multiplayer
          </button>
        </div>

        <div className="absolute top-5 middle-5 w-1/4 h-1/3 bg-gradient-to-r from-yellow-400 to-red-500 bg-opacity-70 rounded-xl shadow-lg border-2 border-white p-4">
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
