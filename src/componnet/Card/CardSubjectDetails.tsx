import React from 'react'
import "/src/assets/css/CardSubjectDetails.css"
import mypth from "/src/assets/img/bg.jpg"
import { LaptopOutlined,UserOutlined,ProjectOutlined,EditOutlined,SnippetsOutlined } from '@ant-design/icons'
function CardSubjectDetails() {
    return (
        <div id="item-card-details">
            <div id="card-card-details">
                <div className="img-card-details"><img src={mypth} alt="" /></div>
                <div className="title-card-details">Combo Practical English - Thực hành tiếng Anh online [Tặng TED Talks]</div>
                <div className="price-card-details">
                    <div className='pr-card-details'>
                        <span id="price1-card-details">1.256.000đ</span>
                    </div>
                    <div className='prl-card-details'>
                        <span id="price2-card-details">giá gốc 2.256.000đ</span>
                        <span id="price3-card-details"> tiet kiem 1 000 000đ</span>
                    </div>
                </div>
                <div className="btn-card-details">
                <button id="btn1-card-details">HOC THIEC</button>
                    <button id="btn2-card-details">HOC THU</button>
                </div>
            <div className="listItems-card-details" >
                <div className="listItem-card-details"><UserOutlined /> <span>98,671 học viên đã đăng ký</span></div>
                <div className="listItem-card-details"><SnippetsOutlined /> <span>86 chủ đề, 908 bài học</span></div>
                <div className="listItem-card-details"><EditOutlined /><span>2,099 bài tập thực hành</span></div>
                <div className="listItem-card-details"><ProjectOutlined /><span>Combo 4 khoá học có giá trị 12 tháng</span></div>
                <div className="listItem-card-details"><LaptopOutlined /><span>Có thể học trên điện thoại và máy tính</span></div>
            </div>
            <div className="lastItem-card-details">
            Chưa chắc chắn khoá học này dành cho bạn? Liên hệ để nhận tư vấn miễn phí!
                </div>
            </div>
        </div>
    )
}

export default CardSubjectDetails