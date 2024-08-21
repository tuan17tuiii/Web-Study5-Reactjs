import React from 'react'
import "/src/assets/css/Register.css"
import { FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
const clientId = '401231327202-33i08kq4lr5lsrorr4dhq5p65f8vu5us.apps.googleusercontent.com';
function Register() {
  return (
    <div className='res-wapper'>
      <div className="res">
        <div className="res-title">
          Đăng nhập ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
        </div>
        <div className="res-btn1">  
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
              onSuccess={() => console.log('Login Success')}
              onError={() => console.log('Login Failed')}
            />
          </GoogleOAuthProvider></div>
        <div className="res-btn"> <button id="btn2"><FacebookOutlined className='res-icon' /><span>Dang nhap bang FACEBOOK </span></button></div>
        <div className="res-text">Bằng cách đăng ký, bạn đồng ý với điều khoản sử dụng và điều khoản bảo mật.</div>
        <div className="res-link">Đã có tài khoản? Đăng nhập ngay!</div>
      </div>
    </div>
  )
}

export default Register