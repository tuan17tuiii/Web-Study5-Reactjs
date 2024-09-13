import React, { useEffect, useState } from 'react'
import CardBlog from '../../Card/CardBlog'
import "/src/assets/css/Blog.css"
import bannerkt from "/src/assets/img/bg_kt.webp"
import { Breadcrumb } from 'antd'
import BlogService from '../../../Service/Blog_Service'
import { title } from 'process'
import Category_Course_Service from '../../../Service/Category_Course_Service'
import { Link } from 'react-router-dom'
function Blog() {
    const { findAll } = BlogService()
    const { findAll: findAllCategory } = Category_Course_Service()
    const [blog, setBlog] = useState<Blog[]>();
    const [category, setCategory] = useState<Category[]>();
    useEffect(() => {
        async function loadExams() {
            let Examed = await findAll(); // Giả sử fetchExams là hàm trả về Promise
            // Đợi Promise hoàn thành
            setBlog(Examed); // Gán kết quả vào state
            let categorys = await findAllCategory();
            setCategory(categorys)

        }
        loadExams()

        console.log("find", findAll())


    }, [])

    const item = [
        {
            title: "Blog",
        }
    ]
    return (
        <div className='blog-wapper' >

            <div className="blog">
                <div className="blog-elm">
                    <div className="blog-banner">   <Link to="/testleve"><img src={bannerkt} alt="" height="300px" width="100%" /></Link></div>
                    <h1>Bài viết</h1>
                    <div className="blog-main">
                        <div className="blog-content">
                            <div className="blog-content-main">

                                <h3>Bài viết nổi bật</h3>
                                {blog && blog.length > 0 ? <>{blog.map(x => { return<><Link to={`/blog/${x.id}`}> <CardBlog key={x.id} title={x.title} image={x.image} content={x.content} createdAt={x.createdAt} /></Link> <hr/></>     })}</> : ""}


                            </div>
                            <div className="blog-content-other">
                                <h3>Bài viết mới nhất</h3>
                                {blog && blog.length > 0 ? <>{blog.map(x => { return<Link to={`/blog/${x.id}`}> <CardBlog key={x.id}  title={x.title} image={x.image} content={x.content} createdAt={x.createdAt} /></Link> })}</> : ""}
                            </div>
                        </div>
                        <div className="blog-category">
                            <h5>Danh mục</h5>
                            <ul>
                               {category&&category.length>0?<>{category.map(x=>{return <li>{x.name} </li>})}</>:""}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog