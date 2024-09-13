import React from 'react'
import "/src/assets/css/CardSubject.css"
import mypth from "/src/assets/img/bg_home.webp"
import { StarOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
function CardSubject({name,price,priceSale}:{name:string,price:number,priceSale:number}) {
    const fmPrice = price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    const fmPriccSale = priceSale?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

    return (
    
        <div id="item">
        <div id="card">  
            <div className="img"><img src={mypth} alt="" /></div>
            <div className="title">{name}</div>
            <div className="content">
                <div>
                <span id="content1"><StarOutlined /> <StarOutlined /> <StarOutlined /> <StarOutlined />(1234)</span>
                <span id="content2"><UserOutlined/> 123 hoc vien</span>
                </div>
                <div id="tagname">#tagname</div>
            </div>
            <div className="price"><span id="price1">{fmPrice}</span><span id="price2">({fmPriccSale})</span><span id="price3">{Math.floor((100-(price/priceSale)*100))}%</span></div>

        </div>
        </div>
  
    )
}

export default CardSubject