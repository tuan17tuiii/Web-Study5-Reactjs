import React from 'react'
import CardBlog from '../Card/CardBlog'
import "/src/assets/css/Blog.css"
import bannerkt from "/src/assets/img/bg_kt.webp"
function Blog() {
    return (
        <div className='blog-wapper' >
            <div className="blog">
                <div className="blog-elm">
                    <div className="blog-banner">    <img src={bannerkt} alt="" height="300px" width="100%" /></div>
                    <h1>Bai Viet</h1>
                    <div className="blog-main">
                        <div className="blog-content">
                            <div className="blog-content-main">
                                <h3>Bài viết nổi bật</h3>
                                <CardBlog />
                                <CardBlog />
                                <CardBlog />
                                </div>
                            <div className="blog-content-other">
                                <h3>Bai viet moi nhat</h3>
                                <CardBlog />
                                <CardBlog />

                                <CardBlog />
                            </div>
                        </div>
                        <div className="blog-category">
                            <h5>Danh muc</h5>
                            <ul>
                                <li>Lộ trình học TOEIC 2 kỹ năng tại nhà đạt 450-650+ cho người mới bắt đầu của STUDY4</li>
                                <li>Bộ đề dự đoán IELTS Speaking Forecast Quý 2/2024 & Bài mẫu (Đang cập nhật)</li>
                                <li>Lộ trình học TOEIC 2 kỹ năng tại nhà đạt 450-650+ cho người mới bắt đầu của STUDY4</li>
                                <li>Bộ đề dự đoán IELTS Speaking Forecast Quý 2/2024 & Bài mẫu (Đang cập nhật)</li>
                                <li>Lộ trình học TOEIC 2 kỹ năng tại nhà đạt 450-650+ cho người mới bắt đầu của STUDY4 </li>
                                <li>Bộ đề dự đoán IELTS Speaking Forecast Quý 2/2024 & Bài mẫu (Đang cập nhật)</li>
                                <li>Bộ đề dự đoán IELTS Speaking Forecast Quý 2/2024 & Bài mẫu (Đang cập nhật)</li>
                                <li>Bộ đề dự đoán IELTS Speaking Forecast Quý 2/2024 & Bài mẫu (Đang cập nhật)</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                                <li>statfsSync</li>
                               
                               </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog