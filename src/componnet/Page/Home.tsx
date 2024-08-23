import React from 'react'
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
function Home() {
  return (
    <div className='home-wapper'>
      <div className="home">
        <div className="home-elm">
          <img id="banner" src={banner} alt="" />
        </div>
        <div className="home-elm-tit">Khoá học online nổi bật</div>
        <div className="home-elm">
        <Link to="/subdetail/1">   <CardSubject /> </Link> <CardSubject /><CardSubject />
        </div>
        <div className="home-elm">
        <img src={bannerkt} alt="" height="300px"  width="70%"/>
        </div>
        <div className="home-elm-tit">Đề thi mới nhất</div>
        <div className="home-elm-ex">
          <CardExam /> <CardExam />
          <CardExam /> <CardExam />
          <CardExam /> <CardExam />
          <CardExam /> <CardExam />
          <CardExam /> <CardExam />
        </div>
        <div className="home-elm">
          < img id="u1" src={u1} alt="" /> < img id="u2" src={u2} alt="" /> < img id="u3" src={u3} alt="" />  Tham gia cộng đồng
        </div>
        <div className="home-elm">
          và hơn 350.000 học viên tham gia mỗi tháng</div>
        <div className="home-elm0">
          <div className="home-elm1">
            < img id="us" src={us} alt="" /> 
          </div> 
          <div className="home-elm2">
            <ul>
              <li><CheckOutlined/>Cộng đồng học tiếng Anh và luyện thi sôi nổi với hơn 250.000 học viên mỗi tháng</li>
              <li><CheckOutlined/>Cộng đồng học tiếng Anh và luyện thi sôi nổi với hơn 250.000 học viên mỗi tháng</li>
              <li><CheckOutlined/>Cộng đồng học tiếng Anh và luyện thi sôi nổi với hơn 250.000 học viên mỗi tháng</li>
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
            <button  id="btn-dk"> Dang ki mien phi</button>
          </form>
          {/* <img src={bannerkt} alt="" /> */}
        </div>
        <div className="home-elm"></div>
      </div>
    </div>
  )
}

export default Home