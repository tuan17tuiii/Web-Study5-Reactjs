import React, { useEffect, useState } from 'react'
import User_scoreService from '../../../Service/User_scoreService'
import { Breadcrumb, Button, Progress, ProgressProps, Slider } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import '/src/assets/css/Examedss.css'
import { Link } from 'react-router-dom';
function ExamSuccess() {
  const { findByIdUser } = User_scoreService();
  const [score, setScore] = useState<Score>()
  const [scoreAvg, setScoreAvg] = useState<number>(0)
  useEffect(() => {
    const dataRes = async () => {
      const data = await findByIdUser(localStorage.getItem('userId'))
      setScore(data[0])
      console.log("data ", data, score)
      if (score) {
        setScoreAvg(Number(((score?.answertrues / score.answers) * 100).toFixed(2)))
        console.log(scoreAvg)
      }
    }
    dataRes()

  }, [score?.id])
  const twoColors: ProgressProps['strokeColor'] = {
    '0%': '#ff0000', // Màu đỏ
    '100%': '#00ff00', // Màu xanh lá cây
  };

  const item = [
    {
      title: <a href="/exam">Đề thi</a>,
    },
    {
      title: "ExamSuccess",
    },
  ]
  return (
    <><div className='ex-ss-wapper1'>
<Breadcrumb
          items={item}
        />
      <div className='ex-ss-wapper'>
        
        <div className='sx-ss-main'>

          <div ><h1>Đã hoàn thành bài thi <CheckOutlined /> </h1></div>
          <div className='point'>Điểm : {score?.score} </div>
        </div>
        <br />
        <div>Số câu trả lời đúng : {score?.answertrues} cau  <Progress type="circle" percent={scoreAvg} strokeColor={twoColors} /></div>
        <br />
        <div>
          <Button
            type="primary"  // Đặt kiểu nút, ví dụ: "primary", "default", "dashed"

          >
            <Link to="/exam"> Quay lai</Link>
          </Button></div>
          <br />
      </div>
      </div>

    </>

  )
}

export default ExamSuccess