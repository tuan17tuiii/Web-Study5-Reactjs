import React, { useEffect, useState } from 'react'
import banner from "/src/assets/img/bg_home.webp"
import "/src/assets/css/SubDetail.css"
import { CheckCircleFilled, CheckOutlined, CheckSquareFilled, CommentOutlined, StarFilled, StarOutlined, UserOutlined } from '@ant-design/icons'
import { CardComment, CardSubjectDetails } from '../Card'
import { useParams } from 'react-router-dom'
import Coursedata from '../../Service/Coursedata'
import { Breadcrumb } from 'antd'
function SubjectDetails() {
    const { findByIdCourse } = Coursedata();
    const [course, setCourse] = useState<Course>()
    let { id } = useParams()


    useEffect(() => {
        const fetchData = async () => {
            const data = await findByIdCourse(id);
            console.log("data", data)
            setCourse(data[0])
            console.log("data", course)
            return data
        }
        fetchData()
    }, [])
    const item = [
        {
            title: <a href="">User</a>,
        },
        {
            title: "Information",
        },
    ]
    return (

        <div className="sub">
            <div className='sub-banner-sub'>
                <div id="sub-banner-sub">{course ? <CardSubjectDetails key={course.id}
                    id={String(course.id)}
                    name={course.name}
                    price={course.price}
                    priceSale={course.price_sale} /> : ""}</div></div>
            <Breadcrumb
                items={item}
            />
            <div className="sub-banner">

                <div id="sub-main">
                    <div className="sub-banner-title"> Combo {id} kỹ năng IELTS Intensive [Tặng TED Talks]</div>
                    <div className="sub-banner-tag">Khoá học online</div>
                    <div className="sub-banner-star"><span>4.9 <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />   </span>   (630 Đánh giá) 98,671 Học viên</div>
                    <div className="sub-banner-content"><span><CheckSquareFilled /></span> Dành cho các bạn từ band 4.0 trở lên.</div>
                    <div className="sub-banner-content"><span><CheckSquareFilled /></span> Sở hữu trọn bộ 4 khoá học IELTS Intensive online: Listening - Reading - Writing - Speaking</div>
                    <div className="sub-banner-content"><span><CheckSquareFilled /></span> Sở hữu trọn bộ 4 khoá học IELTS Intensive online: Listening - Reading - Writing - Speaking</div>
                    <div className="sub-banner-content"><span><CheckSquareFilled /></span> Sở hữu trọn bộ 4 khoá học IELTS Intensive online: Listening - Reading - Writing - Speaking</div>
                </div>
            </div>
            <div className='sub-main-content'>
                <div className='sub-px'>
                    <div className='sub-menu'><ul><li>menu2</li><li>menu2</li></ul></div>
                    <div className="sub-gt"> <div className="sub-gt-title">Bạn sẽ đạt được gì sau khoá học?</div>
                        <div className="sub-gt-content">1️⃣ Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General Training</div>
                        <div className="sub-gt-content">1️⃣ Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General Training</div>
                        <div className="sub-gt-content">1️⃣ Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General Training</div>
                        <div className="sub-gt-content">1️⃣ Đạt mục tiêu tối thiểu 7.0 trong IELTS Reading General Training</div></div>
                    <div className="sub-infor">

                        <div className="sub-infor-main">
                            <div className="sub-infor-menu"><ul><li>menu2</li><li>menu2</li></ul></div>
                            <div className="sub-infor-video">  <img id="banner" src={banner} alt="" /></div>
                            <div className="sub-infor-te"><span>Bài học được biên soạn và giảng dạy bởi:</span> <ul><li><span>Ms. Phuong Nguyen</span>, Macalester College, USA. TOEFL 114, IELTS 8.0, SAT 2280, GRE Verbal 165/170</li> <li><span>Ms. Phuong Nguyen</span>, Macalester College, USA. TOEFL 114, IELTS 8.0, SAT 2280, GRE Verbal 165/170</li></ul></div>
                            <p>Khóa học IELTS Fundamentals: Grammar and Vocabulary for IELTS hướng đến đối tượng các bạn đang ở trình độ sơ cấp (tương đương A1-A2) và có mong muốn thi IELTS trong tương lai. Mục tiêu khóa học là xây dựng cho các bạn nền móng từ vựng và ngữ pháp để đạt điểm tối thiểu 4.0 sau 3-4 tháng học đúng lộ trình.</p>

                        </div>
                    </div>
                    <div className="sub-tutoriol">
                        <p className='sub-tutoriol-tit'>Chương trình học</p>
                        <div className="sub-tutoriol-wapper">
                            <p className='sub-tutoriol-tit-li'>Học thử miễn phí</p>
                            <ul>
                                <li className='sub-tutoriol-li'>
                                    1.	[Vocabulary] Từ vựng theo chủ đề - Study, education, research (Học tập, giáo dục, nghiên cứu)<button>hoc thu</button> </li>
                                <li className='sub-tutoriol-li'>
                                    1.	[Vocabulary] Từ vựng theo chủ đề - Study, education, research (Học tập, giáo dục, nghiên cứu)<button>hoc thu</button> </li>
                                <li className='sub-tutoriol-li'>
                                    1.	[Vocabulary] Từ vựng theo chủ đề - Study, education, research (Học tập, giáo dục, nghiên cứu)<button>hoc thu</button> </li>
                                <li className='sub-tutoriol-li'>
                                    1.	[Vocabulary] Từ vựng theo chủ đề - Study, education, research (Học tập, giáo dục, nghiên cứu)<button>hoc thu</button> </li>
                                <li className='sub-tutoriol-li'>
                                    1.	[Vocabulary] Từ vựng theo chủ đề - Study, education, research (Học tập, giáo dục, nghiên cứu)<button>hoc thu</button> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sub-comment">
                        <h2>Nhan xet cua hoc vien</h2>
                        <div className="sub-comment-box">
                            <div className="sub-comment-box-item">
                                <div className="sub-comment-box-item-tit"><UserOutlined/> 4,601</div>
                                <p>Hoc vien</p>
                            </div>
                            <div className="sub-comment-box-item">
                                <div className="sub-comment-box-item-tit"><CommentOutlined/> 252</div>
                                <p>Danh gia</p>
                            </div>
                            <div className="sub-comment-box-item">
                                <div className="sub-comment-box-item-tit-star">4.0 <StarFilled /><StarFilled /><StarFilled /><StarFilled /> <StarOutlined/></div>
                                <p>Danh gia trung binh</p>
                            </div>
                        </div>
                        <div className="sub-comment-box2"><CardComment/><hr /><CardComment/><hr /><CardComment/> <hr /><CardComment/><hr /></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SubjectDetails