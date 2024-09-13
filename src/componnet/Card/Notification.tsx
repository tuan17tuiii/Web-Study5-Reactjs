import React from 'react'

function Notification({mess}:{mess:string}) {
  return (
    <div className='notifi'> 
    <div className='notifi-main'>
        <h2>{mess}</h2>
    </div>
    </div>
  )
}
export default Notification