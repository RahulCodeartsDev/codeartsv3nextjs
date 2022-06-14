import CompanyInfoItem from "./CompanyInfoItem";
const CompanyInfo = ({headerData})=>{
    return(
        <>
            <ul className="cs_contact_details">
                {
                    headerData[0].companyInfo[0].infoDetails.map((info, i)=>{
                        return(
                            <CompanyInfoItem key={i} info={info} />
                        )
                    })
                }
                
                
            </ul>
        </>
    )
}

export default CompanyInfo