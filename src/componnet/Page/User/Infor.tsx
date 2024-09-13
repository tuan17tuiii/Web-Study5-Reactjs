import React, { useEffect, useState } from 'react';
import '/src/assets/css/Userinfor.css';
import bg from "/src/assets/img/bginfor.jpg"

import User_Service from '../../../Service/User_Service';
import { Alert, Breadcrumb, message } from 'antd';
import Schedule from './Schedule';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import Examed from './Examed';


function Infor() {
  const [user, setUser] = useState<User | null>(null); // Khởi tạo state với giá trị null
  const [menu,setMenu]= useState<string>('')
  const { findByIdUser } = User_Service();
  const location = useLocation();

  // Lấy query string
  const queryParams = new URLSearchParams(location.search);

  // Ví dụ: Lấy giá trị của một tham số 'id'
  const review = queryParams.get('review');
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    const fetchData = async () => {
      const idUser = localStorage.getItem('userId');
      if (idUser) {
        const data: User[] = await findByIdUser(idUser);
        console.log('data', data);
        setUser(data[0]);
      }
    };
  
    fetchData(); // Gọi hàm fetchData để lấy dữ liệu
    console.log('review',review)
    if(review){
      setMenu('menu2')
    }
  }, []);
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
const  item=[
  {
    title: <a href="">Trang cá nhân</a>,
  },
  {
    title: "Tất cả",
  },
]
  return (
    <>
    {contextHolder}
   
    <div className="user-info">
    <Breadcrumb
    items={item}
  />
  <br />
      {user ? ( // Kiểm tra nếu user không null
   <>
        <div className='user-banner'><img src={bg} alt="" /></div>
          <p><b>{user.username}</ b></p>
         <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
     
          <div className='user-menu'> <ul><li onClick={(e)=>setMenu('menu1')}  style={{ color: menu === 'menu1' ? 'blue' : 'black' }} >Lịch Học</li> | <li  onClick={(e)=>setMenu('menu2')} style={{ color: menu === 'menu2' ? 'blue' : 'black' }} >Đề đã thi</li></ul></div>
              <hr />
         
    {menu==='menu1'? <Schedule />:""}
    {menu==='menu2'? <Examed />:""}
</>
      ) : (
        <p>Đang Loading...</p> 
      )}

    </div>
    </>
  );
}

export default Infor;
