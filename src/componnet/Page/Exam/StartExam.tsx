import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import '/src/assets/css/StarExam.css'
import Question from '../../Card/Question'
import Examdata from '../../../Service/Examdata'
import ResultService from '../../../Service/Result_Service.'
import User_Course_Service from '../../../Service/User_Course_Service'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Popconfirm, TimePicker, message, notification } from 'antd'

import dayjs from 'dayjs';
type Res = {
  idAnswer?: number
  stt?: number
  istrue: boolean
}
type ans = {
  id: number
}
function StarExam() {
  const [messageApi, contextHolder] = message.useMessage();
  const { findByIdFull } = Examdata()
  const [exam, setExam] = useState<Exam>()
  const [resultCheck, setResultCheck] = useState<Res[]>([])
  const { id } = useParams();

  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem('time');
    return savedTime ? parseInt(savedTime, 10) : 600;
  });;

  const [shouldFetch, setShouldFetch] = useState(true);
  // const [checkRs, setCheckRs] = useState<number[]>([])
  const idUser = useMemo<string | undefined | null>(() => { return localStorage.getItem('userId') }, [])
  const { created: createResult } = ResultService() // Đổi tên thành createResult
  const { created: createUserCourse } = User_Course_Service() // Đổi tên thành createUserCourse
  const naviga = useNavigate()
  useEffect(() => {
    if (shouldFetch) {
      const findData = async () => {
        const data = await findByIdFull(Number(id))
        console.log("examstart", data)
        if (data) {
          setExam(data)
          let time = localStorage.getItem('time')
          if (time) {
            setTimeLeft(Number(time))
          } else {
            localStorage.setItem('time', (data.time_todo * 60).toString())
            let timer = localStorage.getItem('time')
            setTimeLeft(Number(timer))
          }

          console.log("time", timeLeft)

        }

      }
      findData()
      setShouldFetch(false)
    }
  }, [])


  useEffect(() => {

    // Kiểm tra nếu thời gian còn lại lớn hơn 0
    if (timeLeft <= 0) {
      notification.success({
        message: 'Hết thời gian làm bài',
        description: `hệ thống đã tự động nộp bai`,
        placement: 'top',
      });
      localStorage.removeItem('time')
      const ans = resultCheck.map(x => { return { id: x.idAnswer } })
      console.log("ans", ans)
      const data = {

        id_exam: Number(id),
        id_user: Number(idUser),
        number_questions: Number(exam?.questions?.length),
        answers: ans, // Mảng các đối tượng Answer
      };
      const dataRes = async () => {
        const res = await createResult(data)
        // const res2 =await createUserCourse(data)
        return res['data'];
      }
      const dataRes1 = dataRes();
      if (dataRes1 != null) {
        success()
        naviga("/examres")
      } else {
        alert('invalid')
      }
    };

    if (timeLeft <= 180) {
      const elm = document.getElementById("time");

      // Kiểm tra xem phần tử có tồn tại không và thêm class 'ree'
      elm?.classList.add('err');
    }
    // Thiết lập một bộ đếm
    const timerId = setInterval(() => {

      setTimeLeft((prev) => {
        if (prev > 0) {
          const newTime = prev - 100;
          localStorage.setItem('time', newTime.toString());
          return newTime;
        } else {
          clearInterval(timerId);
          return 0;
        }
      });
    }, 1000);

    // Dọn dẹp bộ đếm khi component unmount hoặc timeLeft thay đổi
    return () => clearInterval(timerId);
  }, [timeLeft]);
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>, id: number | undefined, stt: number) => {
    setResultCheck((prevResult) => {
      const updatedResult = prevResult.map((x) => {
        if (x.stt === stt) {
          return { ...x, istrue: e.target.value === "1", idAnswer: id }; // Cập nhật istrue
        }
        return x; // Giữ nguyên các giá trị khác
      });

      const exits = updatedResult.find((x) => x.stt === stt);
      if (!exits) {
        return [
          ...prevResult,
          { stt: stt, istrue: e.target.value === "1", idAnswer: id }, // Chuyển đổi giá trị thành boolean
        ]
      } else {
        return updatedResult;
      }
    });

    console.log("data cahng", resultCheck)
    console.log("examstartx", e.target.value)
  };
  const nopBai = () => {
    if (exam?.questions?.length != resultCheck.length) {

      let arr = []
      if (exam?.questions) {
        for (let index = 0; index < exam?.questions.length; index++) {
          // const question = exam?.questions[index]

          if (!resultCheck.find(x => x.stt === (index + 1))) {

            arr.push(index + 1);
          }
        }
      }

      if (arr.length >= 0) {
        const confirmMessage = "Bạn còn câu hỏi " + arr.map(x => { return x }) + " chưa trả lời?";
        // Hiển thị thông báo xác nhận
        const userConfirmed = confirm(confirmMessage);
        if (userConfirmed) {
          // Người dùng nhấn OK
          alert("Cảm ơn bạn đã xác nhận!");
        } else {
          // Người dùng nhấn Cancel
          alert("Bạn đã hủy xác nhận.");
        }
      }
    } else {
      if (!confirm("are you sure")) {
        return;
      }
      const ans = resultCheck.map(x => { return { id: x.idAnswer } })
      console.log("ans", ans)
      const data = {

        id_exam: Number(id),
        id_user: Number(idUser),
        number_questions: Number(exam?.questions.length),
        answers: ans, // Mảng các đối tượng Answer
      };
      const dataRes = async () => {
        const res = await createResult(data)
        // const res2 =await createUserCourse(data)
        return res['data'];
      }
      const dataRes1 = dataRes();
      if (dataRes1 != null) {
        success()
        naviga("/examres")
      } else {
        alert('invalid')
      }

    }

  }
  return (
    <div className='startex-wapper'>
      {contextHolder}
      <div id="time" className="nav_time "> <Card title="Thoi Gian" bordered={false} style={{ width: 300, height: 130, fontSize: 25 }}>
        {Math.floor(timeLeft / 60)} : {timeLeft % 60}

      </Card> </div>
      {exam && exam.questions ? (exam.questions.map((e, index) => <Question key={index} index={index + 1} onChang={onChange} stt={String(index + 1)} questions={e} />)) : ""}
      <Popconfirm
        placement="top"
        title={"text"}
        description={"description"}
        okText="Yes"
        cancelText="No"
      >
        <Button onClick={nopBai}>Nop Bai</Button>
      </Popconfirm>
    </div >

  )
}


export default StarExam