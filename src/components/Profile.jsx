import { useSelector } from "react-redux";//grabs the state value to be displayed in profile

function Profile() {
  //access the userState values
  const user = useSelector((state) => state.user.value);

  return (
    <div>
        <h1> Profile Page</h1>
        <p> Name: {user.name}</p>
        <p> Age: {user.age}</p>
        <p> Email: {user.email}</p>
    </div>
  )
}

export default Profile