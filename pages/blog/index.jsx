import CustomHead from "../../components/Shared/CustomHead"
import InnerHero from "../../components/Shared/InnerHero"
import BlogListItem from "../../components/Blogs/BlogListItem"
import Header from "../../components/Shared/HeaderDetails/Header"
import Footer from "../../components/Shared/FooterDetails/Footer"


const Blogs = ({metaData, headerData, titleData, blogsDetails, blogList, footer})=>{
    return(
        <>
            <CustomHead metaData={metaData} />
            <Header headerData={headerData} /> 
            <InnerHero titleData={titleData} />             
            <div className="cs-blogs_section inner pt pb">        
                <div className="cs-container">
                    <div className="cs-custom_heading center">
                        <h4>{blogsDetails[0].highlightedMassage}</h4>
                        <h2><span dangerouslySetInnerHTML={{__html:blogsDetails[0].mainHeading}} /></h2>
                    </div>
                </div>
                <div className="cs-main_blog_section pt_small">
                    <div className="cs-container">
                        <div className="cs-blog_items">
                            {
                                blogList.map((blog, i)=>{
                                    return(
                                        <BlogListItem key={i} blog={blog} />
                                    )
                                }) 
                            }
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer footer={footer} />
        </>
    )
}

export default Blogs

export async function getStaticProps(){
    const resposemeta= await fetch("https://codeartssolution.com/wp-json/codearts/v2/blogPageSeoMeta")
    const metadata = await resposemeta.json()

    const responseHeader = await fetch("https://codeartssolution.com/wp-json/codearts/v2/headerData")
    const headerdata = await responseHeader.json()

    const resposetitle= await fetch("https://codeartssolution.com/wp-json/codearts/v2/blogPageTitle")
    const titledata = await resposetitle.json()

    const responseBlogs = await fetch("https://codeartssolution.com/wp-json/codearts/v2/blogsDetails")
    const BlogsData = await responseBlogs.json()

    const responseBlogList = await fetch("https://codeartssolution.com/wp-json/codearts/v2/blogList")
    const BlogListData = await responseBlogList.json()

    const responseFooter = await fetch("https://codeartssolution.com/wp-json/codearts/v2/footer")
    const footerdata = await responseFooter.json()

    return{
        props:{
            metaData: metadata,
            headerData: headerdata,
            titleData: titledata,
            blogsDetails: BlogsData,
            blogList: BlogListData,
            footer: footerdata,
        }
    }
}