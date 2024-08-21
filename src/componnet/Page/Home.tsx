import React from 'react'
import banner from "/src/assets/img/bg_home.webp"
import bannerkt from "/src/assets/img/bg_kt.webp"
import u1 from "/src/assets/img/u1.jpg"
import u2 from "/src/assets/img/u2.jpg"
import u3 from "/src/assets/img/u3.jpg"
import {CardSubjectDetails,CardExam,CardSubject} from '../Card'
import "/src/assets/css/Home.css"
function Home() {
  return (
    <div className='home-wapper'>
      <div className="home">
        <div className="home-elm">
          <img id="banner" src={banner} alt="" />
        </div>
        <div className="home-elm-tit">Khoá học online nổi bật</div>
        <div className="home-elm">
          <CardSubject /> <CardSubject /><CardSubject />
        </div>
        <div className="home-elm">
          <img src={bannerkt} alt="" />
        </div>
        <div className="home-elm-tit">Đề thi mới nhất</div>
        <div className="home-elm">
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
        <div className="home-elm">img dk</div>
        <div className="home-elm">
          <img src={bannerkt} alt="" />
        </div>
        <div className="home-elm"></div>
      </div>
    </div>
  )
}

export default Home