

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import Question from '../../Card/Question';
import Examdata from '../../../Service/Examdata';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ResultService from '../../../Service/Result_Service.';
import { Breadcrumb, Button } from 'antd';
import QuestionReview from '../../Card/QuestionReview';
type Res = {
  idAnswer?: number
  stt?: number
  istrue: boolean
}
type ans = {
  id: number
}
function ReviewExam() {
 const [exam,setExam]=useState<Exam|undefined>()
 const [rsExam,setRsExam]=useState<ResultExam|undefined>()
 const{findByIdFull} = Examdata()
 const {findById}=ResultService()
 const naviga = useNavigate()
 const { id } = useParams();
 useEffect(()=>{
const fetch =async ()=>{
    const userId=localStorage.getItem('userId')
    const datars= await findById(String(id),String(userId))
    const data = await findByIdFull(Number(id)) 
    console.log("datars",datars)
    if(datars!=null){
        console.log("data")
        setExam(data)
        setRsExam(datars[0])
    }if(datars===null){
        naviga("/home")
    }
  
}
fetch()
 },[id])
     const onChange=()=>{

     }
     const  item=[
      {
        title: <a href="/userinfor">Information</a>,
      },
      {
        title: "Examed",
      },
      {
        title: "Review",
      },
    ]
  return (
    <div className='startex-wapper'>
      <div className="startex-wapper-main"> <Breadcrumb  
    items={item}
  /></div>
      
      { exam && exam.questions ? (exam.questions.map((e, index) => <QuestionReview key={index} ansRs={rsExam?.answers} index={index + 1} onChang={onChange} stt={String(index + 1)} questions={e} />)) : "" }
    
    <Button  ><Link to="/userinfor?review=1">Quay lại</Link> </Button>
    </div >

  )
}


 

export default ReviewExam