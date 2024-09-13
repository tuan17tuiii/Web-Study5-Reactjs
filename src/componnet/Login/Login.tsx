import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react'
import "/src/assets/css/Register.css"
import { FacebookOutlined, LoadingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import FormLogin from '../Card/FormLogin';
import LoginHook from '../../Service/LoginHook';
import { useNavigate } from 'react-router-dom';
import { notification,message  } from 'antd';
function Login() {
  const naviga = useNavigate()
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false)
  const { checkLogin } = LoginHook();
  const [api, contextHolder] = notification.useNotification();
  const [messageApi, contextHolderr] = message.useMessage();



  const isValidated = useMemo(() => {
    return userName && password;
  }, [userName, password])

  useEffect(() => {
    const mssg = localStorage.getItem('msg')
    if (mssg) {
      api["success"]({
        message: mssg
      });
      localStorage.removeItem('msg')
    }
  }, [])

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Không đúng tài khoản hoặt mật khẩu',
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

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
    error()
    console.log("a", a);
    // Sử dụng setTimeout để trì hoãn hành động tiếp the
    setLoading(false);
    console.log(loading);

  }

  return (
    <div className='res-wapper'>
      <div className="res">
        {contextHolder}
        {contextHolderr}
        <h1>Đăng Nhập</h1>
        <div className="res-title">
          Đăng nhập ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
        </div>
        <div className='res-form-wapper'>
          <form className="res-form" onSubmit={onSubmit}>

            <div className="res-form-group">

              <input className='res-input' type="text" id="username" placeholder="Nhập tên đăng nhập" required onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="res-form-group">

              <input className='res-input' type="password" id="password" placeholder="Nhập mật khẩu" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" disabled={loading} className="resbtn">{loading ? <LoadingOutlined /> : " Đăng Nhập"}</button>
          </form>
        </div>
        <div className="res-btn">
        </div>
        {/* <div className="res-btn"> <button id="btn2"><FacebookOutlined className='res-icon' /><span>Dang nhap bang FACEBOOK </span></button></div> */}

        <div className="res-text">Bằng cách đăng ký, bạn đồng ý với điều khoản sử dụng và điều khoản bảo mật.</div>
        <div className="res-link">Đã chưa có tài khoản? <a href="/register">Đăng ký ngay!</a></div>
      </div>
    </div>
  )
}

export default Login;