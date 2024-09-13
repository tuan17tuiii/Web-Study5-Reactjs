import React from 'react'
import "/src/assets/css/FormLogin.css"
function FormLogin() {
  return (
    <div className="login-container">
        <form className="login-form">
            
            <div className="login-form-group">
            
                <input className='input' type="text" id="username" placeholder="Nhập tên đăng nhập" required />
            </div>
            <div className="form-group">
               
                <input className='input' type="password" id="password" placeholder="Nhập mật khẩu" required />
                <input className='input' type="password" id="password" placeholder="Nhập mật khẩu" required />
            </div>
            <button type="submit" className="btn">Đăng Nhập</button>
        </form>
    </div>
  )
}

export default FormLogin