export default function LandingPage() {
  return (
    <div
      className=" w-screen h-screen bg-[url('./assets/bg.jpg')] bg-cover bg-no-repeat bg-center flex justify-center pl-10 "
      style={{ alignItems: "center" }}
    >
      <div className="bg-cyan-200 bg-opacity-60 rounded-md">
        <div className=" box-content w-96 h-64 flex flex-col gap-4 justify-center items-center ">
          <div className="join">
            <input
              className="input input-bordered join-item  w-72 h-12"
              placeholder="Nickname"
            />
          </div>
          <div>
            <button className="btn btn-accent w-44 h-12">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
