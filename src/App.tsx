import { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';

import Header from './componnet/Header.tsx';
import Footer from './componnet/Footer';
import Register from './componnet/Login/Login.tsx';
import CardComment from './componnet/Card/CardComment.tsx';
import Loginhook from './componnet/Login/Loginhook.tsx';
import { Blog, Exam, Home, ExamDetai, SubjectDetails } from './componnet/Page';
import Login from './componnet/Login/Register.tsx';
import StarExam from './componnet/Page/Exam/StartExam.tsx';
import ExamSuccess from './componnet/Page/Exam/ExamSuccess.tsx';
import Schedule from './componnet/Page/User/Schedule.tsx';
import Examed from './componnet/Page/User/Examed.tsx';
import { FloatButton } from 'antd';
import Infor from './componnet/Page/User/Infor.tsx';
import ReviewExam from './componnet/Page/User/ReviewExam.tsx';
import Guild from './componnet/Page/Guild.tsx';
import BlogDetail from './componnet/Page/Blog/BlogDetail.tsx';
import Comfim from './componnet/Card/Comfim.tsx';
import TestLeve from './componnet/Page/Exam/TestLeve.tsx';
import Course from './componnet/Page/Course.tsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang
  }, [pathname]);

  return null;
}

function App() {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Router>
      <ScrollToTop /> {/* Đảm bảo cuộn lên đầu mỗi khi trang thay đổi */}
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Login />} />
          <Route path="/login" element={<Register />} />
          <Route path="/comment" element={<CardComment />} />
          <Route path="/subdetail/:id" element={<SubjectDetails />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/examdetail/:id" element={<ExamDetai />} />
          <Route path="/loginhook" element={<Loginhook />} />
          <Route path="/starexam/:id" element={<StarExam />} />
          <Route path="/examres" element={<ExamSuccess />} />
          <Route path="/userinfor" element={<Infor />} />
          <Route path="/userinfor/schedule" element={<Schedule />} />
          <Route path="/userinfor/examed" element={<Examed />} />
          <Route path="/userinfor/examed/reviewexam/:id" element={<ReviewExam />} />
          <Route path="/guild" element={<Guild />} />
          <Route path="/comfim" element={<Comfim />} />
          <Route path="/testleve" element={<TestLeve />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </div>
      <FloatButton.BackTop />
      <Footer />
    </Router>
  );
}

export default App;
