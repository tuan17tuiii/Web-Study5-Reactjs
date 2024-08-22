import React from 'react'
import "/src/assets/css/CardExam.css"
import { Link } from 'react-router-dom'
function CardExam() {
    return (
        <Link to="/examdetail">
        <div className='c-ex-wapper'>
            <div className="c-ex">
                <div className="c-ex-title">
                    Ielts 10 nam se len dc topic 990 d
                </div>
                <div className="c-ex-infor">iconnnn | iconnbbbnnn | iocnnnn</div>
                 <div className="c-ex-infor">icon | icon | iocn</div>
                 <div className="c-ex-tag">#Ielts Academic</div>
                 <div className="c-ex-tag">#reading</div>
                 <div className="c-ex-btn"><button>Chi tiet</button></div>
            </div>
        </div>
        
        </Link>
    )
}

export default CardExam