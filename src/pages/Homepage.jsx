export default function HomePage() {
  return (
    <>
      <div
        className=" w-screen h-screen bg-[url('https://static.vecteezy.com/system/resources/thumbnails/012/110/452/small/gradient-blurred-abstract-background-holographic-mesh-style-vector.jpg')] bg-cover bg-no-repeat bg-center 
       flex-col flex justify-center pl-10 pr-10"
      >
        <h1  className="font-semibold text-4xl text-center">Top Score</h1>
        <div className="bg-yellow-400 h-1/2  bg-opacity-60 rounded-md border border-2 my-11">
        {/* <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"> */}
          {/* <div>
            <h1 className="font-bold text-lg text-center">Top Score</h1>
          </div> */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-gray-800 text-center" >
                  <th></th>
                  <th className="font-semibold text-lg ">Name</th>
                  <th className="font-semibold text-lg">Score</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      <div className="flex justify-center ">
      <button className="btn btn-lg mx-2">1 vs 1</button>
      <button className="btn btn-lg mx-2">Multiplayer</button>
      </div>


      </div>

    </>
  );
}
