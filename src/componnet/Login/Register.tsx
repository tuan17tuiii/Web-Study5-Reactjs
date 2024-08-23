import React from 'react'
import "/src/assets/css/Register.css"
import { FacebookOutlined, GoogleCircleFilled, GoogleOutlined, GooglePlusOutlined } from '@ant-design/icons'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const urlredirect :string="http://localhost:5173/loginhook";
const url ="https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri="+urlredirect+"&client_id="+clientId
function Register() {
  console.log(url);
  return (
    <div className='res-wapper'>
      <div className="res">
        <h1>Dang Nhap</h1>
        <div className="res-title">
          Đăng nhập ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
        </div>
        <div className="res-btn">
     <Link to={url}>  <button id="btn2"><GoogleOutlined className='res-icon' /><span>Dang nhap bang Google </span> </button></Link> 
         </div>
        <div className="res-btn"> <button id="btn2"><FacebookOutlined className='res-icon' /><span>Dang nhap bang FACEBOOK </span></button></div>
        <div className="res-text">Bằng cách đăng ký, bạn đồng ý với điều khoản sử dụng và điều khoản bảo mật.</div>
        <div className="res-link">Đã có tài khoản? Đăng nhập ngay!</div>
      </div>
    </div>
  )
}

export default Register