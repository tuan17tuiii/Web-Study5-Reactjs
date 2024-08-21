import { StarFilled, StarOutlined, StarTwoTone } from '@ant-design/icons'
import React from 'react'
import mypth from "/src/assets/img/bg.jpg"
import "/src/assets/css/CardComment.css"
import { Link } from 'react-router-dom'
function CardComment() {
  return (
    
    <div className='cm' > 
        <div className="cm-avatar"><img src={mypth} alt="" /></div>
        <div className="cm-main">
            <div className="cm-name"><span id="cm-name">NN Tuan abc</span>,<span id="cm-calendar">Thang 4 28 , 2024</span></div>
            <div className="cm-star"><StarFilled/><StarFilled/><StarFilled/><StarFilled/><StarOutlined/></div>
            <div className="cm-content"> nhận Đăng ký doanh nghiệp số: 0109675459 do Sở Kế hoạch và Đầu tư thành phố Hà Nội cấp ngày 17/06/2021. </div>
        </div>
    </div>
   
  )
}

export default CardComment