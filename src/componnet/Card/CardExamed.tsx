import React from 'react'
import "/src/assets/css/Cardexamed.css"
import "/src/assets/css/CardExam.css"
import { Link } from 'react-router-dom'
import Examdata from '../../Service/Examdata'
import { Timeline } from 'antd'
import { AntDesignOutlined, DockerOutlined, DownCircleOutlined, FieldTimeOutlined, PartitionOutlined } from '@ant-design/icons'
function CardExamed({name,time_todo,number_questions,id,answertrue,score }:{name:string,time_todo:number,number_questions:number,id:number,answertrue:number,score:number|null}) {
    return (
       
        <div className='ced-ex-wapper'>
            <div className="ced-ex">
                <div className="ced-ex-title">
                    {name}
                </div>
                 <div className="ced-ex-infor"><FieldTimeOutlined/> {time_todo} phút |<PartitionOutlined/> {number_questions} câu hỏi </div>
                 <div className="ced-ex-tag">Số câu trả lời đúng :{answertrue}</div>
                 <div className="ced-ex-tag">Điểm :{score}</div>
                 <div className="ced-ex-btn"><button>Review</button></div>
            </div>
        </div>
        
     
    )
}

export default CardExamed