import React from 'react'
import "/src/assets/css/CardExam.css"
import { Link } from 'react-router-dom'
import Examdata from '../../Service/Examdata'
import { CommentOutlined, FieldTimeOutlined, PaperClipOutlined, PartitionOutlined, PlayCircleFilled, PropertySafetyFilled, ReadOutlined } from '@ant-design/icons'
function CardExam({name,time_todo,number_questions,id}:{name:string,time_todo:number,number_questions:number,id:number}) {
    return (
        <Link to={`/examdetail/${id}`}>
        <div className='c-ex-wapper'>
            <div className="c-ex">
                <div className="c-ex-title">
                    {name}
                </div>
                <div className="c-ex-infor"><CommentOutlined/> 312 | <ReadOutlined/> 555 </div>
                 <div className="c-ex-infor"><FieldTimeOutlined/> {time_todo} phut | <PartitionOutlined/> {number_questions} cau hoi </div>
                 <div className="c-ex-tag">#Ielts Academic</div>
                 <div className="c-ex-tag">#reading</div>
                 <div className="c-ex-btn"><button>Chi tiet</button></div>
            </div>
        </div>
        
        </Link>
    )
}

export default CardExam