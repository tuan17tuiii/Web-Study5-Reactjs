import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import FormLogin from '../Card/FormLogin';
import "/src/assets/css/Login.css"
import RegisterHook from '../../Service/RegisterHook';
import { useNavigate } from 'react-router-dom';
import { Button, notification } from 'antd';
import LoginHook from '../../Service/LoginHook';

interface UserDK extends User {
  repass: string;
}
function Register() {
  const naviga = useNavigate()
  const [user, setUser] = useState<User>();
  const { register } = RegisterHook();
  const [userName, setUserName] = useState<string>('');
  const [userNameMess, setUserNameMess] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [mesPhone, setMesPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isStatus, setIsStatus] = useState<boolean>(false);
  const [mes, setMes] = useState<string>('');
  const [mesEmail, setMesEmail] = useState<string>('');
  const { checkLogin } = LoginHook();
  const [api, contextHolder] = notification.useNotification();


  type NotificationType = 'success' | 'info' | 'warning' | 'error';

  const [msg, setMsg] = useState<string>('')


  useEffect(() => {
    setIsStatus(true)
    if (rePassword === password) {
      if(password.length<=6){
        setMes("* Mật khẩu phải dài hơn 6 kí tự")
        setIsStatus(false)
      }else{
        setMes("")
      
      }    
    } else {
      setMes("* Mật khẩu không trùng khớp")
      setIsStatus(false)
    }

    if (!validatePhoneNumber(phone)) {
      setMesPhone("* Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại VN đúng định dạng.")
      setIsStatus(false)
    } else {
      setMesPhone('')
     
    }

    if (!validateEmail(email)) {
      setMesEmail("* Email không hợp lệ. Vui lòng nhập email đúng định dạng.")
      setIsStatus(false)
    } else {
      setMesEmail('')
      
    }

    const users: User = {
      id: "",
      username: userName,
      password: password,
      email: email,
      phone: phone,
      role: "2"
    }
    setUser(users)
    console.log('status',isStatus)
  }, [msg, email, phone, rePassword, userName, password]

  )

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^(0[1-9]{1}[0-9]{8})$/; // Biểu thức chính quy cho số điện thoại VN
    return phoneRegex.test(phone);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Biểu thức chính quy cho email
    return emailRegex.test(email);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
     if(isStatus){
      const data = await register(user)
      if (data.errors) {
        console.log('re')
        api["error"]({
          message: data.errors[0].message
        });
      } else {
        setMsg("tạo tài khoản thành công")
        localStorage.setItem('msg', "tạo tài khoản thành công")
        const a = await checkLogin({ id: "", username: userName, password: password, role: "2" });

        if (a['data']) {
          localStorage.setItem("token", a['data']['token'])
          console.log(a['data'])
          localStorage.setItem("userId", a['data']['user'].id)
          localStorage.setItem("userName", a['data']['user'].username)
          naviga("/home")
          window.location.reload();
          console.log(a)
          return;
        }
      }
     }
    }
  }

  return (
    <div className='login-wapper'>
      <div className="login">
        {contextHolder}
        <h2>Đăng Ký</h2>
        <div className="login-title">
          Đăng nhập ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
        </div>
        <div className='login-form-wapper'>
          <form className="login-form" onSubmit={onSubmit}>
            <div className="login-form-group">

              <label htmlFor="username">Tên đăng nhập</label>
              <input
                className="login-input"
                type="text"
                id="username"
                placeholder="Nhập tên đăng nhập"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                className="login-input"
                type="password"
                id="password"
                placeholder="Nhập mật khẩu"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="repassword">Nhập lại mật khẩu</label>
              <input
                className="login-input"
                type="password"
                id="repassword"
                placeholder="Nhập lại mật khẩu"
                required
                onChange={(e) => setRePassword(e.target.value)}
              />
              <div id="errRepass" className="errr">{mes}</div>
            </div>

            <div className="login-form-group">
              <label htmlFor="phone">Số điện thoại</label>
              <input
                className="login-input"
                type="text"
                id="phone"
                placeholder="Nhập số điện thoại"
                onChange={(e) => setPhone(e.target.value)}
              />
              <div id="errRepass" className="errr">{mesPhone}</div>
            </div>

            <div className="login-form-group">
              <label htmlFor="email">Email</label>
              <input
                className="login-input"
                type="text"
                id="email"
                placeholder="Nhập email"
                onChange={(e) => setEmail(e.target.value)}
              />
                 <div id="errRepass" className="errr">{mesEmail}</div>
            </div>

            <button type="submit" disabled={!isStatus} className="loginbtn">Đăng Ký</button>
          </form>


        </div>
        <div className="login-text">Bằng cách đăng ký, bạn đồng ý với điều khoản sử dụng và điều khoản bảo mật.</div>
        <div className="login-link">Đã có tài khoản? <a href="/login"> Đăng nhập ngay!</a></div>
      </div>
    </div>
  )
}

export default Register;