import React, { useEffect, useState } from 'react'
import User_scoreService from '../../../Service/User_scoreService';
import CardExamed from '../../Card/CardExamed';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

function Examed() {
  const [examed, setExamed] = useState<UserExamed[]>()
  const { findByIdUserfull } = User_scoreService()
  useEffect(() => {
    const fetchData = async () => {
      const idUser = localStorage.getItem('userId');
      if (idUser) {
        const data: UserExamed[] = await findByIdUserfull(idUser);
        setExamed(data);
      }
    };

    fetchData(); // Gọi hàm fetchData để lấy dữ liệu
  }, []);
  const item = [
    {
      title: <a href="">User</a>,
    },
    {
      title: <a href="">Information</a>,
    },
    {
      title: "Examed",
    },
  ]
  return (
    <>
      {/* <Breadcrumb
    items={item}
  /> */}
      <div>
        <div className="if-baner"></div>
        <div className="if-main">
          <div className="if-content">{examed && examed.length > 0 ? (examed.map(x => { return <Link key={x.id} to={`/userinfor/examed/reviewexam/${x.id_exam?.id}`}><CardExamed key={x.id} id={x?.id_exam?.id} name={x.id_exam?.name} time_todo={x.id_exam?.time_todo} number_questions={x.id_exam?.number_questions} answertrue={x.answertrues} score={x.score} /></Link> })) : <p>Không có đề thi</p>}</div>
        </div>
      
      </div>
    </>
  )
}

export default Examed
