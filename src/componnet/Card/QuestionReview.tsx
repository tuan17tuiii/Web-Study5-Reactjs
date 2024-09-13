import React, { ChangeEvent, ChangeEventHandler } from 'react'
import CardAnswer from './CardAnswer'
import "/src/assets/css/Question.css"
import CardAnswerReview from './CardAnswerReview'
function QuestionReview({ansRs,index,questions,stt,onChang}:{ansRs:Ansewr[]|undefined,index:number,questions:Questions,stt:string,onChang:(e:ChangeEvent<HTMLInputElement>,abc:number|undefined,index:number)=>void}) {
    return (
        <div className='startex'>

            <div className="question">
            {stt}.  {questions.question}
            </div>
            <div className="answers">
            {questions.answers_id.map(ans=><CardAnswerReview ansRs={ansRs} index={index} id={ans.id} onChang={onChang} id_ques={questions.id}  name={ans.anser} status={ans.status} key={ans.id}/>

            )}

            </div>
        </div>
    )
}

export default QuestionReview