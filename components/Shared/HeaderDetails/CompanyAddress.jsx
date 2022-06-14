import CompanyAddressItem from "./CompanyAddressItem";
const CompanyAddress = ({headerData})=>{
    return(
        <>
        <ul className="cs_contact_details">
            {
                headerData[0].companyAddress[0].addressDetails.map((address,i)=>{
                    return(
                        <CompanyAddressItem key={i} address={address} />
                    )
                })
            }
         </ul> 
        </>
    )
}
export default CompanyAddress