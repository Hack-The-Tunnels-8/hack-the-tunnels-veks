import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";
import logo from "./logo.jpg";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  function MyForm() {
    return (
      <form>
        <label>Enter your name:
          <input type="text" />
        </label>
      </form>
    )
  }
  

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src ={logo} alt = "VEKS Logo" height={"40%"} width={"15%"}  />
        </Link>
      </div>
      <div>
      <MyForm />
      </div>
      <div className="navbar__account">
        {loggedIn() === false ? (
          <>
            <button id="b" onClick={() => navigate("/sign-up")}>Sign Up</button>
            <button id="b" onClick={() => navigate("/login")}>Login</button>
          </>
        ) : (
          <button id="b" onClick={() => logout()}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
