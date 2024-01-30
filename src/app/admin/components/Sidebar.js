"use client"
import {React, useEffect, useState} from 'react';
import { sidemenus } from '../utils/Sidedata';
import logo from "@/app/assets/images/logo.png";
import Image from "next/image";

function Sidebar (){

 const [ active , setActive ] = useState(false);

 useEffect(()=>{
  if(active){
    document.body.classList.add('sidebaractive')
  }else{
    document.body.classList.remove('sidebaractive')
  }

 },[active]);

return(
    <>  
    <div className="sidenav-header  d-flex  align-items-center">
  <a href="https://admin.ahbsuraksha.com/home" >
     <div className="loginlogo"  style={{ marginBottom:0 }}>
            <Image src={logo} alt="Logo"  style={{ width: "100px", height:"70px", margin: "0 auto"}}/>
    </div>
  </a>
  <div className="bars" onClick={()=>setActive(!active)}>
  <i className="fa-solid fa-bars"></i> 
  </div>
</div>

           <ul className='userlist adminuserlist'>
                {sidemenus.map(item => (
                    <li key={item.label}>
               <i className={item.icon}></i><p>{item.label}</p>
                    </li>
                ))}
            </ul>          
        </>
)
}

export default Sidebar;




