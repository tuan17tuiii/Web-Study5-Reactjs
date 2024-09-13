import React, { useEffect, useState } from 'react'
import banner from "/src/assets/img/bg_home.webp"
import bannerkt from "/src/assets/img/bg_kt.webp"
import u1 from "/src/assets/img/u1.jpg"
import u2 from "/src/assets/img/u2.jpg"
import u3 from "/src/assets/img/u3.jpg"
import us from "/src/assets/img/home_community.webp"
import { CardSubjectDetails, CardExam, CardSubject } from '../Card'
import "/src/assets/css/Home.css"
import { CheckOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Examdata from '../../Service/Examdata'
import { Blog, Exam, ExamDetai, SubjectDetails } from '../Page'
import Coursedata from '../../Service/Coursedata'
import { Breadcrumb, FloatButton, List, notification, Pagination } from 'antd'
import User_scoreService from '../../Service/User_scoreService'

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<any[]>([]);

  const [currentPageExam, setCurrentPageExam] = useState(1);
  const [paginatedDataExam, setPaginatedDataExam] = useState<any[]>([]);

  

  const [examlist, setexamlist] = useState<Exam[] | []>([])
  const [examed, setExamed] = useState<UserExamed[]>([])
  const [courseList, setcourseList] = useState<Course[] | [] >([])
  const { findAll } = Examdata()
  const { findAllCouses } = Coursedata()
  const { findByIdUser, findByIdUserfull } = User_scoreService()
  const [api, contextHolder] = notification.useNotification();

  const itemsPerPageCourse = 6;
  const itemsPerPageExam = 8;

  useEffect(() => {
    const mssg = localStorage.getItem('msg')

    if (mssg) {
      api["success"]({
        message: mssg
      });
      localStorage.removeItem('msg')
    }

    async function loadExams() {
      let dataExam = await findAll(); // Giả sử fetchExams là hàm trả về Promise
      // Đợi Promise hoàn thành
      console.log("hoomeex", dataExam)
      setexamlist(dataExam); // Gán kết quả vào state
      let userId = localStorage.getItem('userId');

      let dataExamed = await findByIdUserfull(userId); // Giả sử fetchExams là hàm trả về Promise
      // Đợi Promise hoàn thành
      console.log(dataExamed)
      setExamed(dataExamed); // Gán kết quả vào state
    }

    loadExams()

    async function loadData() {
      let dataCourse = await findAllCouses()
      setcourseList(dataCourse)
    }

    loadData()

    console.log("find", findAll())



  }, [])

  useEffect(() => {
    // Cập nhật dữ liệu cho trang hiện tại
    const start = (currentPage - 1) * itemsPerPageCourse;
    const end = start + itemsPerPageCourse;
    setPaginatedData(courseList.slice(start, end));

    const start2 = (currentPageExam - 1) * itemsPerPageExam;
    const end1 = start2 + itemsPerPageExam;
    setPaginatedDataExam(examlist.slice(start2, end1));
    console.log("",paginatedDataExam)
  }, [currentPage, courseList,currentPageExam,examlist]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageChangee = (page: number) => {
    setCurrentPageExam(page);
  };
  const item = [
    {
      title: <a href="/home">Trang chủ</a>,
    },
    {
      title: "",
    },
  ]

  return (
    <div className='home-wapper'>
      <div className="home">
        <Breadcrumb
          items={item}
        />
        {contextHolder}
        <div className="home-elm">
          <img id="banner" src={banner} alt="" />
        </div>
        <div className="home-elm-tit">Khoá học online nổi bật</div>
        <div key={1} className="home-elm">
          {paginatedData && paginatedData.length > 0 ? (
            courseList.map((x) => (
              <Link key={x.id} to={`/subdetail/${x.id}`}>
                <CardSubject
                  key={x.id}
                  name={x.name}
                  price={x.price}
                  priceSale={x.price_sale}
                />
              </Link>
            ))
          ) : (
            <p>Không có giá trị ....</p>
          )}
      <Pagination
      align="center"
        current={currentPage}
        total={courseList.length}
        pageSize={itemsPerPageCourse}
        onChange={handlePageChange}
      />

        </div>
        <div className="home-elm">
          <Link to="/testleve"><img src={bannerkt} alt="" height="300px" width="70%" /></Link>
        </div>
        <div className="home-elm-tit">Đề thi mới nhất</div>
        <div className="home-elm-ex">

          {(paginatedDataExam && paginatedDataExam.length > 0 ? (
            paginatedDataExam.map((x) => {
              // Kiểm tra nếu x.name bao gồm keySearch

              // Kiểm tra nếu examed có giá trị
              const isInExamed = examed && examed.some(y => x?.id === y?.id_exam?.id);

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


            })
          ) : (
            <p>Không có giá trị ....</p> // Trả về thông báo nếu examlist không có giá trị
          )
          )}
        <div>   <Pagination
        align="center"
        current={currentPageExam}
        total={examlist.length}
        pageSize={itemsPerPageExam}
        onChange={handlePageChangee}
      /></div> 
        </div>
        <div key={2} className="home-elm">
          < img id="u1" src={u1} alt="" /> < img id="u2" src={u2} alt="" /> < img id="u3" src={u3} alt="" />  Tham gia cộng đồng
        </div>
        <div key={3} className="home-elm">
          và hơn 350.000 học viên tham gia mỗi tháng</div>
        <div className="home-elm0">
          <div className="home-elm1">
            <img id="us" src={us} alt="" />
          </div>
          <div className="home-elm2">
            <ul>
              <li><CheckOutlined />Cộng đồng học tiếng Anh và luyện thi sôi nổi với hơn 250.000 học viên mỗi tháng</li>
              <li><CheckOutlined />Cộng đồng học tiếng Anh và luyện thi sôi nổi với hơn 250.000 học viên mỗi tháng</li>
              <li><CheckOutlined />Cộng đồng học tiếng Anh và luyện thi sôi nổi với hơn 250.000 học viên mỗi tháng</li>
            </ul>
            <button>Tham gia ngay</button>
          </div>
        </div>
        <div className="home-elm-last">
          <h1>Đăng ký thông tin khoá học</h1>
          <form className="home-form">
            <input type="text" placeholder='Nhap thong tin user' className='home-ip' />
            <input type="text" placeholder='Nhap thong tin user' className='home-ip' />
            <input type="text" placeholder='Nhap thong tin user' className='home-ip' />
            <select className='home-ops'>
              <option className='home-op'>abc</option>
              <option className='home-op'>abc</option>
              <option className='home-op'>abc</option>
              <option className='home-op'>abc</option>
            </select>
            <button id="btn-dk">Đăng kí miễn phí</button>
          </form>
          {/* <img src={bannerkt} alt="" /> */}
        </div>
        <div className="home-elm"></div>

      </div>
    </div>
  )
}

export default Home