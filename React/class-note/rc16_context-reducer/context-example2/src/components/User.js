const User = ({ user }) => {
  const { id, login, avatar_url, width } = user;

  return (
    <div>
      <h3>{login}</h3>
      <img src={avatar_url} alt="" width={width} />
      <div>
        <label htmlFor="width">Image width(px)</label>
        <input id="width" type="number" value={width} />
      </div>
    </div>
  );
};

export default User;
