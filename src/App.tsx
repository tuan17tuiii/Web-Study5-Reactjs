import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardSubjectDetails from './componnet/Card/CardSubjectDetails.tsx'
import CardSubject from './componnet/Card/CardSubject.tsx'
import Footer from './componnet/Footer'
import Header from './componnet/Header.tsx'
import Home from './componnet/Page/Home.tsx'
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
import Register from './componnet/Login/Register.tsx'
import CardComment from './componnet/Card/CardComment.tsx'
import CardExam from './componnet/Card/CardExam.tsx'
import SubjectDetails from './componnet/Page/SubjectDetails.tsx'
import Exam from './componnet/Page/Exam.tsx'
import Blog from './componnet/Page/Blog.tsx'
import ExamDetai from './componnet/Page/ExamDetai.tsx'
import Loginhook from './componnet/Login/Loginhook.tsx'


function App() {

  return (
    <>
    <Router>
     <Header></Header>
   
     <div className="main">
     <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/comment" element={<CardComment />} />
        <Route path="/subdetail/:id" element={<SubjectDetails />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/examdetail" element={<ExamDetai />} />
        <Route path="/loginhook" element={<Loginhook />} />
    </Routes>
    </div>
        <Footer/>
    </Router>
    </>
  )
}

export default App;
