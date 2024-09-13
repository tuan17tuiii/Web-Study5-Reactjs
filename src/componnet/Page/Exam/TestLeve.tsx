import React, { useEffect, useMemo, useState } from 'react'
import Examdata from '../../../Service/Examdata'
import { useNavigate, useParams } from 'react-router-dom'
import '/src/assets/css/Examdetail.css'
import { CommentOutlined, EuroCircleFilled, StarFilled, StarOutlined, UserOutlined } from '@ant-design/icons'
import User_scoreService from '../../../Service/User_scoreService'
import { json } from 'stream/consumers'
import { promises } from 'dns'
import { Breadcrumb, Progress, ProgressProps } from 'antd'
import dayjs from 'dayjs'
import { CardComment } from '../../Card'

function TestLeve() {
  const naviga = useNavigate()
  const [isTodo, setIsToDo] = useState<boolean>(false)
  const [exam, setExam] = useState<Exam | null>()

  const [user_exam, setUser_exam] = useState<UserExamed | null>()
  const { findAll,findByNameCategory, findById } = Examdata()
  const { findByIdUserfull } = User_scoreService()
  useEffect(() => {
    async function loadExams() {
      let dataExam = await findByNameCategory('Ex'); // Giả sử fetchExams là hàm trả về Promise
      let userId = localStorage.getItem('userId');
      let dataExamed = await findByIdUserfull(userId);
      //  const data =dataExamed.map((x: any) => x.exam_id);
      console.log("data", dataExamed)
      dataExamed?.forEach((x: any) => {
     if (x?.id_exam?.id === Number(dataExam?.id)) {
            setUser_exam(x)
            
            setIsToDo(true)
          }

      });
      console.log(isTodo)
      // Đợi Promise hoàn thành
      if (dataExam != null) {

        setExam(dataExam[0]); // Gán kết quả vào state
        console.log("hoomeex", exam)
      }
    }
    loadExams()
  }, [isTodo])
  const onClick = () => {
    let token = localStorage.getItem('token')
    if (!token) {
      naviga("/login")
    } else {
      naviga(`/starexam/${exam?.id}`)
    }
  }

  const twoColors: ProgressProps['strokeColor'] = {
    '0%': '#ff0000', // Màu đỏ
    '100%': '#00ff00', // Màu xanh lá cây
  };

  const scoresvg = useMemo(() => {
    if (user_exam?.score) { return user_exam?.score * 10 }
    return 0;

  }, [user_exam?.score])

  const item = [
    {
      title: <a href="/exam">Đề thi</a>,
    },
    {
      title: "Examdetali",
    },
  ]
  return (
    <div className='exd-wapper' >
      <div className="exd">
        <span className="exd-tag"></span>
        <Breadcrumb
          items={item}
        />
        <h1 >{exam?.name}</h1>
        <span className='exd-err'>{isTodo ? <>Đã thi vào ngày  {dayjs(user_exam?.createdAt).format('DD/MM/YYYY HH:mm:ss')}  </> : <> !! Sẵn sàng để bắt đầu làm full test? Để đạt được kết quả tốt nhất, bạn cần dành ra {exam?.time_todo} phút cho bài test này </>}</span>
        <br />
        <br />
        <span className="exd-detail">Thời gian làm bài: {exam?.time_todo} phút | {exam?.number_questions} câu hỏi | 1811 bình luận</span>
        <br></br>
        <br></br>
        <span className="exd-detail"> 569322 người đã luyện tập đề thi này</span>
        <br></br>
        {isTodo ?<>
        <br />
        <br />
        <br />
        <span className='exd-point'> Điểm :  {user_exam?.score} </span></> : ""} 
        <br />
        <br />
      <div>{isTodo ? <div > số câu hỏi đã trả lời {user_exam?.answertrues} <Progress type="circle" percent={scoresvg} strokeColor={twoColors} /></div> : ""}</div>
        <br />
        <br></br>
        <div className='exd-btns' />
        {isTodo ? <> </> : <button className="exd-btn" onClick={onClick}>Bắt đầu thi</button>}

        <div className="exd-comment">
                        <h2>Nhận xét của học viên</h2>
                        <div className="exd-comment-box">
                            <div className="exd-comment-box-item">
                                <div className="exd-comment-box-item-tit"><UserOutlined/> 4,601</div>
                                <p>Học Viên</p>
                            </div>
                            <div className="exd-comment-box-item">
                                <div className="exd-comment-box-item-tit"><CommentOutlined/> 252</div>
                                <p>Đánh giá</p>
                            </div>
                            <div className="exd-comment-box-item">
                                <div className="exd-comment-box-item-tit-star">4.0 <StarFilled /><StarFilled /><StarFilled /><StarFilled /> <StarOutlined/></div>
                                <p>Đánh giá trung bình</p>
                            </div>
                        </div>
                        <div className="exd-comment-box2"><CardComment/><hr /><CardComment/><hr /><CardComment/> <hr /><CardComment/><hr /></div>
                    </div>
      </div>
    </div>
  )
}

export default TestLeve