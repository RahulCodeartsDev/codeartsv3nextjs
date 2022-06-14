import Link from "next/link"
const Logo = (props)=>{
    return(
        <>
            <Link href="/"><a className="cs-brand_logo"><img src={props.src} alt="Codearts Solutions Pvt Ltd"  /></a></Link>
        </>
    )
}
export default Logo