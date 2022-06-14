import Head from "next/head"
const CustomHead = ({metaData})=>{
    return(
        <>
            <Head>
                <title>{metaData[0].title}</title> 
                <meta name="description" content={metaData[0].metaDescriptions} />                   
                <link rel="canonical" href={metaData[0].canonicalUrl} />
            </Head> 
        </>
    )
}

export default CustomHead