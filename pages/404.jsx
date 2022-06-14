import Head from "next/head"
import Link from "next/link";
import Footer from "../components/Shared/FooterDetails/Footer";
import Header from "../components/Shared/HeaderDetails/Header"
const PageNotFound = ({headerData, footer})=>{
    return(
        <>
            <Head>
                <title>404</title> 
                <meta name="description" content="Page Not Found" />                   
                <link rel="canonical" href="http://codeartssolution.com/404/" />
            </Head>
            <Header headerData={headerData} /> 
            <div className="cs-inner_pages_hero_section pt pb">
                <div className="cs-container">
                    <h1>Page Not Found</h1>
                    <ul className="breadcrumb d-flex align-center justify-center">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li>404</li>
                    </ul>
                </div>
           </div>
           <Footer footer={footer} />
        </>
    )
}

export default PageNotFound


export async function getStaticProps(){

    const responseHeader = await fetch("https://codeartssolution.com/wp-json/codearts/v2/headerData")
    const headerdata = await responseHeader.json()

    const responseFooter = await fetch("https://codeartssolution.com/wp-json/codearts/v2/footer")
    const footerdata = await responseFooter.json()
    
    return{
        props:{          
            headerData: headerdata,   
            footer: footerdata,   
        }
    }
    
  }

