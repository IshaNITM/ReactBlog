import "./write.css"
import { Link } from "react-router-dom"

export default function Write() {
  return (
    <div className="write">
    <img className="writeImg" src="https://images.unsplash.com/photo-1697432907908-10d038054ea7?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <form className="writeForm">
    <div className="writeFormGroup">
    <label htmlFor="fileInput">
    <i className="writeIcons fa-solid fa-plus"></i>
    </label>
    <input type="file" id="fileInput" style={{display:"none"}}/>
    <input type="text" placeholder="description" className="writeInput" autofocus={true}/>
    </div>
    <div className="writeFormGroup">
    <textarea placeholder="Tell your story.." type="text" className="writeInput writeText"></textarea>

    </div>
    <button className="writeSubmit">Publish</button>

    </form>
   
    </div>

      
  
  )
}
