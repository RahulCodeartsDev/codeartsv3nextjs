import CompanyAddress from "./CompanyAddress"
import CompanyInfo from "./CompanyInfo"
const RightAddressInfo= ({headerData})=>{
    
    return(
        <>
            <div className="cs-company_details">
                <h3>{headerData[0].companyAddress[0].heading}</h3>
                <CompanyAddress headerData={headerData} />
            </div>
            <div className="cs-company_details">
                <h3>{headerData[0].companyInfo[0].heading}</h3>
                <CompanyInfo headerData={headerData} />
            </div>
            
        </>
    )
}

export default RightAddressInfo