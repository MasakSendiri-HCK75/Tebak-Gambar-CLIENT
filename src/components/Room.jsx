export default function Room({data}) {

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p>Members : {data.members.length} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Enter</button>
        </div>
      </div>
    </div>
  );
}
