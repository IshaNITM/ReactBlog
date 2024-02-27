import  "./topbar.css"
import { Link } from "react-router-dom";

export default function TopBar() {
  const user=false;
  
  return(
    <div className="top">
    <div className="topLeft">
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-square-instagram"></i>
    <i class="fa-brands fa-pinterest"></i>
    </div>

  <div className="topCenter">
  <ul className="topList">
  <li className="topListItem" >
  <Link  to="/" style={{textDecoration:"none" , color:"inherit"}} >HOME</Link>
 
  </li>
  <li className="topListItem">
  <Link  to="/" style={{textDecoration:"none" , color:"inherit"}} >AbOUT</Link></li>
  <li className="topListItem">
  <Link  to="/" style={{textDecoration:"none" , color:"inherit"}} >CoNTACT</Link>
  </li>
  <li className="topListItem">
  <Link  to="/write" style={{textDecoration:"none" , color:"inherit"}} >WRITE</Link>
  </li>
  <li className="topListItem">  <Link  to="/" style={{textDecoration:"none" , color:"inherit"}} >{user && "LoGOUT"}</Link></li>
  </ul>
  </div>
    <div className="topRight">
 
     
  

 
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    

    
    

    

    </div>
    
  )
  
}
