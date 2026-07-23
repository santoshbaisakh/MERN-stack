function UserCard(props) {
  return (
    <div
      style={{
        border: "1px solid blue",
        padding: "15px",
        width: "200px",
        borderRadius: "5px",
      }}
    >
      <h3>Name : {props.name}</h3>
      <p>Age : {props.age}</p>
      <p>City : {props.city}</p>
    </div>
  );
}

export default UserCard;
