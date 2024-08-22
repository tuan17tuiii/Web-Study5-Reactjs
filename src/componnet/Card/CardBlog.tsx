import React from 'react'
import ch23 from "/src/assets/img/ch23.webp"
import "/src/assets/css/CardBlog.css"
function CardBlog() {
  return (
    <div className='c-blog-wapper'>
        <div className="c-blog">
            <div className="c-blog-img"><img src={ch23} alt="" /></div>
            <div className="c-blog-content">
                <div className="c-blog-cate">KINH NGHIỆM THI TOEIC</div>
                <h3>Lộ trình học TOEIC 2 kỹ năng tại nhà đạt 450-650+ cho người mới bắt đầu của STUDY4</h3>
                <p className="c-blog-text">Bạn đang loay hoay muốn tìm lộ trình luyện TOEIC online đạt 450 - 650+? Đọc bài viết của STUDY4 dưới đây để tìm ra câu trả lời!</p>
                <p className="c-blog-date">22-2-2-22, ndnd, ss</p>
            </div>
        
        
        </div>
    </div>
  )
}

export default CardBlog