


const Users = () => {
    fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
      console.log(res.json())
    );
  
    return (
      <div>
        <h1>USER LIST</h1>
        <div className="row">
          <div className="col">
            <img src="" alt="" />
            <h6>Name</h6>
          </div>
        </div>
      </div>
    );
  };
  
  export default Users;