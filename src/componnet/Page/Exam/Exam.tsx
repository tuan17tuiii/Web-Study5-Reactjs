import React, { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react'
import "/src/assets/css/Exam.css"
import { SearchOutlined } from '@ant-design/icons'
import { CardExam } from '../../Card'
import bannerkt from "/src/assets/img/bg_kt.webp"
import Examdata from '../../../Service/Examdata'
import { Link } from 'react-router-dom'
import User_scoreService from '../../../Service/User_scoreService'
import { AnyRecord } from 'dns'
import { log } from 'console'
import { Breadcrumb, Input } from 'antd'
import Category_Course_Service from '../../../Service/Category_Course_Service'
import Category_Exam_Service from '../../../Service/Category_Exam_Service'
function Exam() {
  const[selectExamed,setSelectExamed]=useState<string>('')
  const [examlist, setexamlist] = useState<Exam[] | null>([])
  const [menuLink, setMenuLink] = useState<string>("All")
  const [examed, setExamed] = useState<UserExamed[]>([])
  const [category, setCategory] = useState<Category[]>();
  const [keySearch, setKeySearch] = useState<string>('')
  const [isExamed, setIsExamed] = useState<boolean>(false)
  const { findAll: findAllCategory } = Category_Exam_Service()
  const { findAll, findById, findByCategory } = Examdata()
  const { findByIdUser, findByIdUserfull } = User_scoreService()
  const isLogin = useMemo<boolean>(() => { return localStorage.getItem('userId') != null }, [])

  useEffect(() => {
    async function loadExams() {
      let Examed = await findAll(); // Giả sử fetchExams là hàm trả về Promise
      // Đợi Promise hoàn thành
      let userId = localStorage.getItem('userId');

      let dataExam = await findByIdUserfull(userId); // Giả sử fetchExams là hàm trả về Promise
      // Đợi Promise hoàn thành
      console.log(dataExam)
      setExamed(dataExam); // Gán kết quả vào state
      let categorys = await findAllCategory();
      setCategory(categorys)
      setexamlist(Examed); // Gán kết quả vào state
      onClick()

    }
    loadExams()

    console.log("find", findAll())


  }, [])

  const fetchExams = useCallback(async () => {
    try {
      const examsData = await findAll(); // Gọi hàm để lấy dữ liệu
      if (examsData) {
        setexamlist(examsData); // Gán dữ liệu vào state
        console.log("re")
      } else {
        // Xử lý khi không có dữ liệu
        console.warn('No exams data found');
      }
      setIsExamed(false); // Gán trạng thái
    } catch (error) {
      console.error('Error fetching exams:', error); // Xử lý lỗi
    }
  }, []);

  const onClick = () => {
    setIsExamed(false)
    fetchExams()
    setSelectExamed('menu1')
    onSearchAll()
  }

  const onClick2 = async () => {

    setIsExamed(true)
    setSelectExamed('menu2')
  }

  const onchangee = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeySearch(e.target.value)

  }

  const onSearch = (id: number, name: string) => {
    const fetch = async () => {
      const data = await findByCategory(id)
      setexamlist(data)
    }
    fetch()
    setMenuLink(name)

  }

  const onSearchAll = () => {
    async function loadExams() {
      let Examed = await findAll(); // Giả sử fetchExams là hàm trả về Promise
      setexamlist(Examed); // Gán kết quả vào state

    }
    loadExams()
    setMenuLink("Tất cả")
  }

  const item = [
    {
      title: <a href="">Đề thi</a>,
    },
    {
      title: menuLink,
    },
  ]


  return (
    <div className="ex-wapper">

      <div className="ex-right"></div>

      <div className='ex'>
        <Breadcrumb
          items={item}
        />
        <h1>Thư Viện Đề Thi</h1>
        <div className="ex-search">
          <ul ><li id="all" onClick={(e) => onSearchAll()}>Tất cả</li>{category && category.length > 0 ? (category.map(x => { return <><li onClick={(e) => onSearch(Number(x.id), x.name)} key={x.id} value={x.id}>{x.name}</li></> })) : ""}</ul>
      
          <Input size="large" placeholder=" Search"  type="text" className='ex-ip' onChange={(e) => onchangee(e)}     prefix={<SearchOutlined />} />
        </div>
        <h3><button className={selectExamed === "menu1" ? "ex-select ex-examedd" : "ex-examedd"} onClick={onClick}>Đề thi </button> {isLogin ? (<>| <button className={selectExamed === "menu2" ? "ex-select ex-examedd" : "ex-examedd"} onClick={onClick2}>Đề đã thi </button></>) : ("")}</h3>
        <div className="ex-list">

          {isExamed ? (
            examed && examed.length > 0 ? (
              examed.map((x) => (
                <CardExam
                  key={x.id}
                  name={x.id_exam.name}
                  time_todo={x.id_exam.time_todo}
                  number_questions={x.id_exam.number_questions}
                  id={x.id_exam.id}
                />
              ))
            ) : (
              <p>Không có giá trị ....</p> // Trả về thông báo nếu examed không có giá trị
            )
          ) : (
            examlist && examlist.length > 0 ? (
              examlist.map((x) => {
                // Kiểm tra nếu x.name bao gồm keySearch
                if (x.name.includes(keySearch)) {
                  // Kiểm tra nếu examed có giá trị
                  const isInExamed = examed && examed.some(y => x.id === y.id_exam.id);

                  // Nếu không có trong examed, hiển thị CardExam
                  if (!isInExamed) {
                    return (
                      <CardExam
                        key={x.id}
                        name={x.name}
                        time_todo={x.time_todo}
                        number_questions={x.number_questions}
                        id={x.id}
                      />
                    );
                  }
                }
                return null; // Trả về null nếu không thỏa mãn điều kiện
              })
            ) : (
              <p>Không có giá trị ....</p> // Trả về thông báo nếu examlist không có giá trị
            )
          )}


        </div>
        <div className="ex-kt">
        <Link to="/testleve"><img src={bannerkt} alt="" height="300px" width="100%" /></Link>
        </div>
      </div>
    </div>
  )
}

export default Exam