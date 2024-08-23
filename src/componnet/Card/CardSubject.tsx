import React from 'react'
import "/src/assets/css/CardSubject.css"
import mypth from "/src/assets/img/bg_home.webp"
import { StarOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
function CardSubject() {
    return (
    
        <div id="item">
        <div id="card">  
            <div className="img"><img src={mypth} alt="" /></div>
            <div className="title">Combo Practical English - Thực hành tiếng Anh online [Tặng TED Talks]</div>
            <div className="content">
                <div>
                <span id="content1"><StarOutlined /> <StarOutlined /> <StarOutlined /> <StarOutlined />(1234)</span>
                <span id="content2"> 123 hoc vien</span>
                </div>
                <div id="tagname">#tagname</div>
            </div>
            <div className="price"><span id="price1">1.000.000d</span><span id="price2">(2.000.000d)</span><span id="price3">-32%</span></div>

        </div>
        </div>
  
    )
}

export default CardSubject