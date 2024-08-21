import React from 'react'
import "/src/assets/css/CardExam.css"
import { Link } from 'react-router-dom'
function CardExam() {
    return (
        <Link to="/examdetail">
        <div className='ex-wapper'>
            <div className="ex">
                <div className="ex-title">
                    Ielts 10 nam se len dc topic 990 d
                </div>
                <div className="ex-infor">iconnnn | iconnbbbnnn | iocnnnn</div>
                 <div className="ex-infor">icon | icon | iocn</div>
                 <div className="ex-tag">#Ielts Academic</div>
                 <div className="ex-tag">#reading</div>
                 <div className="ex-btn"><button>Chi tiet</button></div>
            </div>
        </div>
        </Link>
    )
}

export default CardExam