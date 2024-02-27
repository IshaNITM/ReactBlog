import "./sidebar.css"
export default function SideBar() {
  return (
    <div className="sidebar">
    
    <div className="sidebarItems">
    <span className="sidebarTitles">ABOUT ME</span>
    <img className="sidebarImg" src="https://plus.unsplash.com/premium_photo-1696879453919-c17b624aed1b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <p>lorem ipsum shjcghvxhcvghvnvchgsv jdhghv hmfdhggj hfjhfdv svshgfd shdvhgdfhs xvgs svhdfghsv scxhgcghsv c
    
    </p>
   
    </div>
    <div className="sidebarItems">
    <span className="sidebarTitles">CATEGORIES</span>
    <ul className="sidebarList">
    <li className="sidebarListItems">Life</li>
    <li className="sidebarListItems">Music</li>
    <li className="sidebarListItems">Tech</li>
    
    <li className="sidebarListItems">Sport</li>
    <li className="sidebarListItems">Cinema</li>
    <li className="sidebarListItems">Style</li>
    </ul>


    </div>
   <div className="sidebarItems">
   <span className="sidebarTitles">FOLLOW US</span>
   <div className="sidebarIcons">
   <i className=" sidebarIcon fa-brands fa-facebook"></i>
   <i className="  sidebarIcon fa-brands fa-twitter"></i>
   <i className="sidebarIcon fa-brands fa-square-instagram"></i>
   <i className=" sidebarIcon fa-brands fa-pinterest"></i>
   </div>


   </div>

    </div>
  )
}
