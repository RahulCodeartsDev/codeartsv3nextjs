import Head from "next/head"
import Link from "next/link";
import Footer from "../../components/Shared/FooterDetails/Footer";
import Header from "../../components/Shared/HeaderDetails/Header"
const BlogDetails = ({headerData, blogsDetails, blogList, footer})=>{
    return(
        <>
            <Head>
                <title>{blogsDetails.blogTitle}</title> 
                <meta name="description" content={blogsDetails.metaDescriptions} />                   
                <link rel="canonical" href={blogsDetails.canonicalUrl} />
            </Head>
            <Header headerData={headerData} /> 
            <div className="cs-inner_pages_hero_section pt pb">
                <div className="cs-container">
                    <h1>{blogsDetails.blogTitle}</h1>
                    <ul className="breadcrumb d-flex align-center justify-center">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li>{blogsDetails.blogTitle}</li>
                    </ul>
                </div>
            </div>
            <div className="cs-blog_details_section pt pb">
                <div className="cs-container d-flex">
                    <div className="cs-left_content_area">
                    <h1>{blogsDetails.blogTitle}</h1>
                        <ul className="widget d-flex align-center">
                            <li>{blogsDetails.blogDate}</li>
                            <li>{blogsDetails.BlogAuthor}</li>
                            <li><a href="">{blogsDetails.blogCat}</a></li>
                        </ul>                        
                        <img src={blogsDetails.blogAvator} alt="" />
                        <div dangerouslySetInnerHTML={{__html:blogsDetails.blogContent}}></div>
                    </div>
                    <div className="cs-right_details">
                        <div className="cs-categories">
                            <h3>Categories</h3>
                            <ul className="cs-cat_nav">
                                {
                                    blogList.map((item,i)=>{
                                        return(
                                            <li key={i}><a href="">{item.blogCat}</a></li>
                                        )
                                    })
                                }
                                
                                
                            </ul>
                        </div>
                        <div className="cs-categories">
                            <h3>Recent Post</h3>
                            <ul className="cs-recent_post">
                                {
                                    blogList.slice(0,5).map((item,i)=>{
                                        return(
                                            <li>
                                                <Link href={`/blog/${item.id}`} >
                                                <a className="d-flex align-center">
                                                    <img src={item.blogAvator} alt="" />
                                                    <div>
                                                        <div className="date">{item.blogDate}</div>
                                                        <h4>{item.blogTitle}</h4>
                                                    </div>
                                                </a>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                                
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer footer={footer} />
        </>
    )
}

export default BlogDetails

export async function getStaticPaths(){
    return{
        paths:[
            {
                params: {blogId: 'title-one'}
            },
            {
                params: {blogId: 'title-two'}
            },
            {
                params: {blogId: 'title-three'}
            },
            {
                params: {blogId: 'title-four'}
            },
            {
                params: {blogId: 'title-five'}
            },
            {
                params: {blogId: 'title-six'}
            },
            {
                params: {blogId: 'title-seven'}
            },
            {
                params: {blogId: 'title-eight'}
            }
        ],
        fallback: false
    }
}

export async function getStaticProps(context){  
    
    const responseHeader = await fetch("https://codeartssolution.com/wp-json/codearts/v2/headerData")
    const headerdata = await responseHeader.json()
    
    const responseBlogList = await fetch("https://codeartssolution.com/wp-json/codearts/v2/blogList");
    const BlogListData = await responseBlogList.json();
    const {params} = context;
    const response = await fetch(`https://codeartssolution.com/wp-json/codearts/v2/blogList/${params.blogId}`);
    const BlogsData = await response.json();

    const responseFooter = await fetch("https://codeartssolution.com/wp-json/codearts/v2/footer")
    const footerdata = await responseFooter.json()
    return{
        props:{
            headerData: headerdata,
            blogsDetails: BlogsData,
            blogList: BlogListData,
            footer: footerdata,
        }
    }
}

