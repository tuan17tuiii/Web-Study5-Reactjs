import { useEffect, useState } from 'react'
import CardBlog from '../../Card/CardBlog'
import "/src/assets/css/Blog.css"
import bannerkt from "/src/assets/img/bg_kt.webp"
import BlogService from '../../../Service/Blog_Service'
import Category_Course_Service from '../../../Service/Category_Course_Service'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumb } from 'antd'
function BlogDetail() {
    const { findAll, findById } = BlogService()
    const { findAll: findAllCategory } = Category_Course_Service()
    const [blog, setBlog] = useState<Blog[]>();
    const [menuLink, setMenuLink] = useState<string>("All")
    const [blogg, setBlogg] = useState<Blog>();
    const [category, setCategory] = useState<Category[]>();
    const { id } = useParams();
    useEffect(() => {
        async function loadExams() {
            let Examed = await findAll(); // Giả sử fetchExams là hàm trả về Promise
            // Đợi Promise hoàn thành
            setBlog(Examed); // Gán kết quả vào state
            let categorys = await findAllCategory();
            let dataBlog = await findById(String(id))
            setBlogg(dataBlog[0])
            setMenuLink(dataBlog[0].title)
            setCategory(categorys)

        }
        loadExams()

        console.log("find", findAll())


    }, [id])

    const item = [
        {
          title: <a href="/blog">Bài viết</a>,
        },
        {
          title: menuLink,
        },
      ]
    
    return (
        <div className='blog-wapper' >

            <div className="blog">
                <div className="blog-elm">
                <Breadcrumb
          items={item}
        />
                    <div className="blog-banner"> 
                           <img src={bannerkt} alt="" height="300px" width="100%" /></div>
                    <h1>Bai Viet</h1>
                    <div className="blog-main">
                        <div className="blog-content">
                            <div className="blog-content-main">

                                <h1>{blogg?.title}</h1>
                                <img src={`/src/assets/img/${blogg?.image}`}  height="300px" width="100%" alt="" />
                            <p>{blogg?.content}</p>


                            </div>
                            <div className="blog-content-other">
                                <h3>Bai viet moi nhat</h3>
                                {blog && blog.length > 0 ? <>{blog.map(x => { return<Link to={`/blog/${x.id}`}> <CardBlog key={x.id}  title={x.title} image={x.image} content={x.content} createdAt={x.createdAt} /></Link> })}</> : ""}
                            </div>
                        </div>
                        <div className="blog-category">
                            <h5>Danh muc</h5>
                            <ul>
                                {category && category.length > 0 ? <>{category.map(x => { return <li>{x.name} </li> })}</> : ""}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail