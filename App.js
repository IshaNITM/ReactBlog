
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';



 
 function App() {
 
  return (
    
   

     <Router>
    
     
     <TopBar/>
     <Routes>
     
     <Route path="/" element={ <Home/>}/>
   
     <Route path="/write" element={ <Write/> }/>
     
  

     <Route path="/login" element={<Login/>}/> 
    

     <Route path="/register" element={  <Register/>}/> 
  
  
     <Route path="/post/:postId" element={ <Single/>}/> 
     

     
     </Routes>
    
    

     </Router>

      
     
 

      


      
  
    
  );

  }
export default App;


