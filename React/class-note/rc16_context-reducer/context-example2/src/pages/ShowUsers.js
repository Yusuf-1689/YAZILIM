import User from '../components/User';

const ShowUsers = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default ShowUsers;
