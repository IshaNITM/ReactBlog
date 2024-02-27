


import Header from "../../components/header/Header"

import Sidebar from "../../components/sidebar/SideBar"
import Posts from "../../components/posts/Posts"
import axios from "axios"
import "./home.css"
import { useState,useEffect } from "react"

 export default function Home() {
  

  return (

 
    <>
 <Header/>
    <div className="home">
 
       <Sidebar/>
       <Posts/>

   Home
  
    </div>

 
 </>
  )
};

