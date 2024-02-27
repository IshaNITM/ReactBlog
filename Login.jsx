import './login.css'


export default function Login() {
  return (
    <div className="login">
    <span className="loginTitle">login</span>
     <form className="loginForm">
     <label>Email</label>
     <input type="text" className="loginInput" placeholder=" Enter your Email"></input>
     <label>Password</label>
     <input type="text"   className="loginInput" placeholder=" Enter your Password"></input>
     <button className="loginButton">login</button>
     </form>
     <button className="loginRegisterButton">Register</button>
   

    </div>
  )
}
