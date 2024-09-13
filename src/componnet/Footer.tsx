import React from 'react'
import "../assets/css/Footer.css"
import { Link } from 'react-router-dom'
import { FacebookOutlined, InstagramOutlined, QuestionCircleOutlined, ReadOutlined, TikTokOutlined, TwitterOutlined } from '@ant-design/icons'
function Footer() {
    return (
        <div className='footer-wapper'>
            <div className="footer">
                <div className="footer-menu">
                    <div className="footer-item">
                        <div className="footer-logo1">STUDY4</div>
                        <div className="footer-logo2">© 2021</div>
                        <div className="footer-logo3"><FacebookOutlined/> <InstagramOutlined/> <TwitterOutlined/> <TikTokOutlined/> </div>
                    </div>
                    <div className="footer-item">
                        <div className="footer-item-header">Chương trình học</div>
                        <div className="footer-item-category"><Link to="/subdetail/1"><ReadOutlined/> IELTS General Reading</Link></div>
                        <div className="footer-item-category"><Link to="/subdetail/6"><ReadOutlined/> IELTS General Speak</Link></div>
                        <div className="footer-item-category"><Link to="/subdetail/3"><ReadOutlined/> IELTS General Reading</Link></div>
                        <div className="footer-item-category"><Link to="/subdetail/3"><ReadOutlined/> IELTS General Reading</Link></div>
                        <div className="footer-item-category"><Link to="/subdetail/6"><ReadOutlined/> IELTS General Write</Link></div>
                    </div>
                
                 
                    <div className="footer-item">
                        <div className="footer-item-header">Hỗ trợ</div>
                        <div className="footer-item-category"><Link to="/guild"><QuestionCircleOutlined/> Hướng dẫn sử dụng</Link></div>
                        <div className="footer-item-category"><Link to="/guild"><QuestionCircleOutlined/> Hướng dẫn mua hàng</Link></div>
                        <div className="footer-item-category"><Link to="/guild"><QuestionCircleOutlined/> Hướng dẫn mua hàng</Link></div>
                        <div className="footer-item-category"><Link to="/guild"><QuestionCircleOutlined/> Hướng dẫn mua hàng</Link></div>
                    </div>
                </div>
                <div className="footer-contact">
                    <div className='footer-contact-header'>Thông tin doanh nghiệp</div>
                    <div>
                        Công ty TNHH Công Nghệ A Plus
                        Giấy chứng nhận Đăng ký doanh nghiệp số: 0109675459 do Sở Kế hoạch và Đầu tư thành phố Hà Nội cấp ngày 17/06/2021.
                        Điện thoại liên hệ/Hotline: 096 369 5525
                        Email: study4.team@gmail.com.
                        Địa chỉ trụ sở: Số 15, Ngõ 208 Giải Phóng, Phường Phương Liệt, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam</div>
                </div>
                <div className="footer-copyright">@ 2021 - Bản quyền của Công ty TNHH Công Nghệ A Plus.</div>
            </div>
        </div>
    )
}

export default Footer