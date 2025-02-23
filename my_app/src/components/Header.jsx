import { AiOutlineOrderedList } from "react-icons/ai"; 
import { NavLink } from "react-router-dom";
import { BiMailSend } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import React, { useState } from "react";
import "../styles/Header.css";
export default function Header() {
const [showLinks,setShowLinks] = useState(false);
const toggle=()=>{
  setShowLinks(!showLinks)
}
  return (
    <div className="header_">
     <div className="list" onClick={toggle}>
     <AiOutlineOrderedList />
     </div>
      <div className="container">
        <div className="name">
          <NavLink className="navlink" to={"*"}>
            <span>Walaa Alrashidi </span>
          </NavLink>
        </div>
        <div className={`links `}>
          <NavLink className="navlink" to={"/projects"}>
            Projects
          </NavLink>
          <div className={`contacts  ${showLinks?'show':'hide'}`}>
            <span>
             <a href="https://github.com/Walaachabab">
             <AiOutlineGithub />
             </a>
            </span>
            <span>
             <a href="https://linkedin.com/in/walaa-saad-695109206">
             <BsLinkedin />
             </a>
            </span>
            <span>
              <a href="https://wa.me/+966581701023 ">
              <AiOutlineWhatsApp />
              </a>
            </span>
            <span>
             <a href="mailto:alwala20172017@gmail.com?subject=Hello&body=I%20wanted%20to%20get%20in%20touch%20with%20you.">
             <BiMailSend />
             </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
