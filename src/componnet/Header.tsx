import React from 'react'
import "../assets/css/Header.css"
import {
    BrowserRouter as Router,
    RouterProvider,
    Route,Routes,Link
  } from "react-router-dom";
import CardSubject from './Card/CardSubject';
import CardSubjectDetails from './Card/CardSubjectDetails';
function Header(){
  return (
   <div className="header-wapper">
    <div className="header">
        <div className="header-logo">STUDY4</div>
        <div className="header-menu">
            <ul className="header-menu-ul"> 

                <li className="header-menu-item"><Link  className="header-menu-item" to="/home"> Home</Link></li>
                <li className="header-menu-item"><Link  className="header-menu-item" to="/exam"> Exam</Link></li>
                <li className="header-menu-item"><Link  className="header-menu-item" to="/blog"> Blog</Link></li>
                
                <li className="header-menu-item">XN</li>
                <li className="header-menu-item"><button className='header-menu-item-btn-login'><Link  className="header-menu-item-link" to="/register">Đăng Nhập</Link></button></li>
            </ul>
        </div>
    </div>
   </div>

  )
}

export default Header