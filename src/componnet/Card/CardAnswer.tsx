import React, { ChangeEvent, ChangeEventHandler } from 'react'
import "/src/assets/css/CardAnswer.css"
function CardAnswer({index,id,name,status,id_ques,onChang}:{index:number,id:number | undefined,name:string,status:boolean,id_ques:number,onChang:(e:ChangeEvent<HTMLInputElement>,abc:number|undefined,index:number)=>void}) {
    return (
        <div className='cardAnser'>
        <label className="answer">
            <input type="radio"  name={String(id_ques)} value={status?1:0} onChange={(e)=>onChang(e,id,index)} />
            {name}
        </label>
        </div>
    )
}

export default CardAnswer