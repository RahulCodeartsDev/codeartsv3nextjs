const CompanyAddressItem = ({address})=>{
    return(
        <>
            <li className="d-flex align-center">
                <lottie-player 
                    src={address.icon}  
                    background="transparent"  
                    speed="1"  
                    loop="true"
                    autoplay="true">
                </lottie-player>
                <p>
                    <strong>{address.country} </strong><br />
                    <span>{address.address}</span>
                </p>
            </li>
        </>
    )
}

export default CompanyAddressItem