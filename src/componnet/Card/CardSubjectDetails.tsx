import React, { useEffect, useState } from 'react'
import "/src/assets/css/CardSubjectDetails.css"
import mypth from "/src/assets/img/bg.jpg"
import User_Course_Service from '../../Service/User_Course_Service'
import { LaptopOutlined, UserOutlined, ProjectOutlined, EditOutlined, SnippetsOutlined, LoadingOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, notification } from 'antd';
function CardSubjectDetails({ id, name, price, priceSale }: { id: string, name: string, price: number, priceSale: number }) {
    const { created } = User_Course_Service()
    const [load, setLoad] = useState<boolean>(false)
    const [isbutton, setIsButton] = useState<boolean>(false)
    const [userCousre, setUserCourse] = useState<User_Course[]>([])
    const { findByIdUserfull } = User_Course_Service();
    const naviga = useNavigate()
    const userId = localStorage.getItem('userId')

    const fmPrice = price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    const fmPriccSale = priceSale?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
   const sale=(priceSale - price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    useEffect(() => {
        const fetch = async () => {
            console.log("loadtruoc", load)
            const data = await findByIdUserfull(userId)
            setUserCourse(data)
        }

        fetch()
        console.log("loadsau", load)
    }, [load])


    const Buy = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setLoad(true)

        if (userId) {


            console.log("loadtruoc", load)
            const data:User_Course [] = await findByIdUserfull(userId)
            setUserCourse(data)

            console.log("loadsau", load)


            let flag = false;
            data.forEach(x => {
                if (x?.course_id?.id === Number(id)) {
                    flag = true
                }
            })


            if (!flag) {
                const dataToSend = {
                    course_id: { id: id },
                    user_id: { id: userId }
                }
                const data = created(dataToSend)
                if (data != null) {
                    console.log("buy", data)
                    notification.success({
                        message: 'Thêm khóa học thanh công',
                        description: `Thanh toán để bắt đầu học`,
                        placement: 'topRight',
                    });
                } else {
                    notification.error({
                        message: 'Thêm khóa học that bai',
                        description: `vui long kiem tra lai`,
                        placement: 'topRight',
                    });
                }
            } else {
                notification.error({
                    message: 'Thêm khóa học that bai',
                    description: `da them khoa hoc nay roi `,
                    placement: 'topRight',
                });
            }

        } else {
            naviga("/login")
        }
        setLoad(false)
    }
    return (
        <div id="item-card-details">
            <div id="card-card-details">
                <div className="img-card-details"><img src={mypth} alt="" /></div>
                <div className="title-card-details">{name}</div>
                <div className="price-card-details">
                    <div className='pr-card-details'>
                        <span id="price1-card-details">{fmPrice}đ</span>
                    </div>
                    <div className='prl-card-details'>
                        <span id="price2-card-details">giá gốc {fmPriccSale}</span>
                        <span id="price3-card-details"> tiet kiem {sale}</span>
                    </div>
                </div>
                <div className="btn-card-details">
                    {!load ? (<button id="btn1-card-details" onClick={(e) => Buy(e)}>HOC THIEC</button>) : (<button id="btn1-card-details"><LoadingOutlined/></button>)}
                    <button id="btn2-card-details">HOC THU</button>
                </div>
                <div className="listItems-card-details" >
                    <div className="listItem-card-details"><UserOutlined /> <span>98,671 học viên đã đăng ký</span></div>
                    <div className="listItem-card-details"><SnippetsOutlined /> <span>86 chủ đề, 908 bài học</span></div>
                    <div className="listItem-card-details"><EditOutlined /><span>2,099 bài tập thực hành</span></div>
                    <div className="listItem-card-details"><ProjectOutlined /><span>Combo 4 khoá học có giá trị 12 tháng</span></div>
                    <div className="listItem-card-details"><LaptopOutlined /><span>Có thể học trên điện thoại và máy tính</span></div>
                </div>
                <div className="lastItem-card-details">
                    Chưa chắc chắn khoá học này dành cho bạn? Liên hệ để nhận tư vấn miễn phí!
                </div>
            </div>
        </div>
    )
}

export default CardSubjectDetails