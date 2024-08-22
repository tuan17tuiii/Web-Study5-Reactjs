import React from 'react'
import "/src/assets/css/Exam.css"
import { SearchOutlined } from '@ant-design/icons'
import { CardExam } from '../Card'
import bannerkt from "/src/assets/img/bg_kt.webp"
function Exam() {
    return (
        <div className="ex-wapper">
            <div className="ex-right"></div>
            <div className='ex'>
                <h1>Thu Vien De Thi</h1>
                <div className="ex-search">
                    <ul><li id="all">All</li><li>ieltwes 1</li><li>ielts 1</li><li>ielts 1</li><li>ielts 1</li><li>ielts 1</li><li>ielts 1</li><li>ielts 1</li><li>ielts 1</li><li>ielts 1</li><li>ielts 1</li><li>ieltsdd 1</li><li>ielts 231</li><li>ielts 4</li><li>ielts 2</li></ul>
                    <input type="text" className='ex-ip' placeholder="Seacrh" />
                    <button > Tim Kiem</button>

                </div>
                <h3>De thi</h3>
                <div className="ex-list">
                    <CardExam />
                    <CardExam />
                    <CardExam />
                    <CardExam />
                    <CardExam />
                    <CardExam />
                    <CardExam />
                    <CardExam />
                    <CardExam />
                </div>
                <div className="ex-kt">
          <img src={bannerkt} alt="" height="300px"  width="100%"/>
        </div>
            </div>
        </div>
    )
}

export default Exam