import React from 'react'
import { CardComment } from '../Card'
import banner from "/src/assets/img/Ted_talk_1.webp"
function Course() {
    console.log("da vao course")
    return (
        <div className="course-wapper">
            <div className="course-right"></div>

            <div className="ex">
                <div className="breadcrumb">
                    {/* <!-- Breadcrumb items sẽ được thêm vào ở đây --> */}
                </div>
<img src={banner} alt="" />
                <h1>Chương trình học online</h1>

                <div className="course-search">
                    <ul>
                        <li id="all">All</li>
                        {/* <!-- Các danh mục sẽ được thêm vào ở đây --> */}
                    </ul>
                    <input type="text" className="course-ip" placeholder="Seacrh" />
                </div>

                <h3>
                    <button className="course-examedd">Đề thi</button>
                    <button className="course-examedd">Đề đã thi</button>
                </h3>

                <div className="course-list">
                    {/* <!-- Danh sách đề thi sẽ được hiển thị ở đây --> */}
                    <CardComment />
                </div>

                <div className="course-kt">
                    <a href="/testleve">
                        <img src="bannerkt.png" alt="" height="300px" width="70%" />
                    </a>
                </div>

            </div>
        </div>

    )
}

export default Course