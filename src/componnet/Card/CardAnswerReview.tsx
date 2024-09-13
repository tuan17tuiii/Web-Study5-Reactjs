import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react'
import "/src/assets/css/CardAnswerReview.css"
function CardAnswerReview({ ansRs, index, id, name, status, id_ques, onChang }: { ansRs: Ansewr[]|undefined, index: number, id: number | undefined, name: string, status: boolean, id_ques: number, onChang: (e: ChangeEvent<HTMLInputElement>, abc: number | undefined, index: number) => void }) {
    const [check, setCheck] = useState<boolean>(false)
    const [anwserRs,setAswerRs] =useState<Ansewr>()
    useEffect(()=>{
        {ansRs?.forEach(x => {
            if (x.id === id) {
                setCheck(true)
                setAswerRs(x)
                
            }

        })}
    },[])
    return (
        <div className='cardAnser'>
          

            <label className={anwserRs ? (anwserRs.status ? "answer ok" : "answer no") : "answer null"}
            >
                <input type="checkbox" checked={status} name={String(id_ques)} value={status ? 1 : 0} onChange={(e) => onChang(e, id, index)} />
                {name}
            </label>

        </div>
    )
}

export default CardAnswerReview