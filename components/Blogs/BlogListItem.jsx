import Link from "next/link"
const BlogListItem = ({blog})=>{
    return(
        <>
            <div className="cs-blog_item">
                <div className="cs-blog_pic_back">
                    <img src={blog.blogAvator} alt="" />
                    <Link href={`/blog/${blog.id}`}>
                    <a className="cs-circle d-flex align-center justify-center">
                        <img src="images/ani_arrow.gif" />
                    </a>
                    </Link>
                </div>
                <div className="cs-content_area">
                    <div className="cs-widget_section d-flex align-center">
                        <div className="cs-date d-flex align-center">
                            <img src="images/cal.png" />
                            {blog.blogDate}
                        </div>
                        <div className="cs-category">{blog.blogCat}</div>
                    </div>
                    <h2><Link href={`/blog/${blog.id}`}><a>{blog.blogTitle}</a></Link></h2>
                </div>
            </div>
        </>
    )
}

export default BlogListItem