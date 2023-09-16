const User = ({user}) => {

  return (
    <div>
      <div className="mx-4 my-4 flex items-center"> 
        <h1>{user.username}</h1>
        <button className="ml-auto followbtn">
          <p className = "text-transparent"> Follow </p>
        </button>
      </div>
    </div>
  );
}

export default User;