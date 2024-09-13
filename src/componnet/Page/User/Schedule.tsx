import React, { useEffect, useState } from 'react'
import User_Course_Service from '../../../Service/User_Course_Service';
import { CardSubject } from '../../Card';
import { Breadcrumb } from 'antd';

function Schedule() {
  const [schedule, setSchedule] = useState<User_Course[]>()
  const { findByIdUserfull } = User_Course_Service()
  const [menu, setMenu] = useState<string>('')
  useEffect(() => {
    const fetchData = async () => {
      const idUser = localStorage.getItem('userId');
      if (idUser) {
        const data: User_Course[] = await findByIdUserfull(idUser);
        console.log('data', data);
        setSchedule(
          data
        );
      }
    };
    setMenu("menu1")
    fetchData(); // Gọi hàm fetchData để lấy dữ liệu
  }, []);
  const item = [
    {
      title: <a href="">Trang cá nhân</a>,
    },
    
    {
      title: "Khóa học",
    },
  ]
  return (
    <>
      <div>
        <div><div className='user-menu'>
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    <li
      onClick={() => setMenu('menu1')}
      style={{ backgroundColor: menu === 'menu1' ? 'green' : 'white', color: 'black', padding: '2px', cursor: 'pointer' }}
    >
      Đã thanh toán
    </li>
    <span> | </span>
    <li
      onClick={() => setMenu('menu2')}
      style={{ backgroundColor: menu === 'menu2' ? 'red' : 'white', color: 'black', padding: '2px', cursor: 'pointer' }}
    >
      Chưa thanh toán
    </li>
  </ul>
</div>
</div>
        <div>{schedule && schedule.length > 0 ? schedule.map(x => { return <CardSubject key={x?.id} name={x?.course_id?.name} price={x?.course_id?.price} priceSale={x?.course_id?.price_sale} /> }) : <p>Không có khóa học...</p>}</div>
      </div>
    </>
  )
}

export default Schedule