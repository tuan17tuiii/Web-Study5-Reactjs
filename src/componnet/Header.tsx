import React, { useCallback, useEffect, useMemo, useState } from 'react'
import "../assets/css/Header.css"
import {
  BrowserRouter as Router,
  RouterProvider,
  Route, Routes, Link
} from "react-router-dom";
import CardSubject from './Card/CardSubject';
import CardSubjectDetails from './Card/CardSubjectDetails';
import { UsbOutlined, UserAddOutlined, UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps } from 'antd';

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState<string | null>('');
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  // Hàm xử lý khi click vào một menu
  const handleClick = (menu: string) => {
    setSelectedMenu(menu); // Lưu mục menu được chọn
  };


  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName') ? localStorage.getItem('userName') : "";

    setUserName(userName);
    setIsLogin(userId !== null);
  }, [isLogin]);

  const checkOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');

    setIsLogin(false); // Cập nhật trạng thái đăng nhập
    window.location.reload();
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to="/userinfor">Trang cá nhân</Link>

      ),
    }, {
      key: '2',
      label: (
        <a onClick={checkOut}>
          Đăng Xuất
        </a>
      ),
    }
  ];
  return (
    <div className="header-wapper">
      <div className="header">
        <div className="header-logo">STUDY4</div>
        <div className="header-menu">
          <ul className="header-menu-ul">
            <li className={selectedMenu === "trangchu" ? "selected header-menu-item" : "header-menu-item"}
              onClick={() => handleClick("trangchu")}>
              <Link className="header-menu-item-link" to="/home">Trang Chủ</Link>
            </li>
            <li className={selectedMenu === "khoahoc" ? "selected header-menu-item" : "header-menu-item"}
              onClick={() => handleClick("khoahoc")}>
              <Link className="header-menu-item-link" to="/course">Khóa Học</Link>
            </li>
            <li className={selectedMenu === "dethi" ? "selected header-menu-item" : "header-menu-item"}
              onClick={() => handleClick("dethi")}>
              <Link className="header-menu-item-link" to="/exam">Đề Thi</Link>
            </li>
            <li className={selectedMenu === "baiviet" ? "selected header-menu-item" : "header-menu-item"}
              onClick={() => handleClick("baiviet")}>
              <Link className="header-menu-item-link" to="/blog">Bài Viết</Link>
            </li>
            <li className={selectedMenu === "xacthuc" ? "selected header-menu-item" : "header-menu-item"}
              onClick={() => handleClick("xacthuc")} > <Link className="header-menu-item-link" to="/comfim">Xác Thực</Link></li>
          </ul>
        </div>
        <div className="header-login">
          {isLogin ? (<div>
            <Dropdown menu={{ items }} placement="bottom" arrow>
              <span className='isLogin'><UserOutlined />{userName}</span>
            </Dropdown></div>
          ) : (
            <div><button className='header-menu-item-btn-login'>
              <Link className="header-menu-item-link" to="/login">Đăng Nhập</Link>
            </button></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header