import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  const attemptLogin = async () => {
    try {
      const message = await login(email, password);
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);
  console.log(email)
  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <button onClick={() => attemptLogin()}>
          Login (as user set in code)
       /</button> 
        <div>
          <div>
          <input type="text" name="email" placeholder="email" onChange={
            (e)=> {
              setEmail(e.target.value)

            }
          }></input>
          <input type="text" name="password" placeholder="password" onChange={
            (e)=> {
              setPassword(e.target.value)

            }
          }></input>
          {/* <input>password</input> */}
          </div>
          {message && <p>{message}</p>}
      </div>
      </div>
    </Page>
  );
}

export default Login;
