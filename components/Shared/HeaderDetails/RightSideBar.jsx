import Link from 'next/link'
import RightAddressInfo from './RightAddressInfo'
const RightSideBar= ({headerData})=>{
    
    return(
        <>            
            <Link href="/"><a className="cs-brand_logo"><img src={headerData[0].logoMobile} alt={headerData[0].logoAlt}  /></a></Link>
            <p dangerouslySetInnerHTML={{__html:headerData[0].companyAbout}}></p>
            <RightAddressInfo headerData={headerData} />            
        </>
    )
}

export default RightSideBar