import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
const clientId = '401231327202-33i08kq4lr5lsrorr4dhq5p65f8vu5us.apps.googleusercontent.com'; // Thay thế bằng Client ID của bạn
function Login() {
  const handleLoginSuccess = (credentialloginponse: any) => {

    console.log(); // Bạn có thể xử lý thông tin người dùng tại đây
  };

  const handleLoginError = (error: any) => {
    console.error('Login Failed:', error);
  };
  return (

    <div className='login-wapper'>

      <div className="login">
        <div className="login-title">
          Đăng nhập ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
        </div>
        <div className="login-btn">
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => console.log('Login Failed')}
            />
          </GoogleOAuthProvider></div>
        <div className="login-text">Bằng cách đăng ký, bạn đồng ý với điều khoản sử dụng và điều khoản bảo mật.</div>
        <div className="login-link">Đã có tài khoản? Đăng nhập ngay!</div>
      </div>
    </div>
  )
}

export default Login