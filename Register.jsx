import './register.css'



export default function Register() {
  return (
    <div className="Register">
    <span className="registerTitle">Register</span>
     <form className="registerForm">
     <label>Username</label>
     <input type="text" className="registerInput" placeholder=" Enter your Username"></input>
     <label>Email</label>
     <input type="text" className="registerInput" placeholder=" Enter your Email"></input>
     <label>Password</label>
     <input type="text"   className="registerInput" placeholder=" Enter your Password"></input>
     <button className="registerButton">Register</button>
     </form>
     <button className="registerRegisterButton">Login</button>


    </div>
  )
}
