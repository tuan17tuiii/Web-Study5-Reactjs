import React from 'react'
import ch23 from "/src/assets/img/ch23.webp"
import "/src/assets/css/CardBlog.css"
function CardBlog({title,content,createdAt,image}:Blog) {
  return (
    <div className='c-blog-wapper'>
        <div className="c-blog">
            <div className="c-blog-img"><img src={ch23} alt="" /></div>
            <div className="c-blog-content">
                <div className="c-blog-cate">KINH NGHIỆM THI TOEIC</div>
                <h3>{title}</h3>
                <p className="c-blog-text">{content}</p>
                <p className="c-blog-date">{createdAt}</p>
            </div>
        
        
        </div>
    </div>
  )
}

export default CardBlog