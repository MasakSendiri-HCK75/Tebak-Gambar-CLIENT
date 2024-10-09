export default function GamePlay() {
  return (
    <div
      className=" w-screen h-screen bg-[url('https://static.vecteezy.com/system/resources/thumbnails/012/110/452/small/gradient-blurred-abstract-background-holographic-mesh-style-vector.jpg')] bg-cover bg-no-repeat bg-center flex justify-center pl-10 "
      style={{ alignItems: "center" }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* <div className="bg-white p-6 rounded-lg "> */}
        <h2 className="text-3xl font-semibold text-center mb-4">Tebak Bendera</h2>

        <div className="flex justify-center mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzEd5iskmI048d9FgzRBmjPexlmq8H5Qjq1Q&s"
            alt="Gambar Tebakan"
            className="w-70 h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        <form className="w-full max-w-sm">
          <label
            className="block text-sm font-medium text-gray-800 mb-2"
          >
            Berasal dari negara manakah bendera diatas?
          </label>
          <input
            type="text"
            id="jawaban"
            placeholder="Jawaban kamu..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg "
          />
          <div className="pl-7">
            <button
              type="submit"
              className=" mt-4 w-80 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
      {/* </div> */}
    </div>
  );
}
