import { useDispatch } from "react-redux"//modifies the state values
import { login, logout } from "../features/User";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
        <button onClick={() => { dispatch(login({name: "Freshia", age: 20, email: "freshia@gmail.com"}))}}>Login</button>
        <button onClick={() => { dispatch (logout ())}}>Logout</button>
    </div>
  )
}

export default Login