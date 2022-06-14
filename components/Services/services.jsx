import WhatWeDoItem from "./WhatWeDoItem";
const Services = ({services})=>{
    return(
        <>
            <div className="cs-services_section pt pb">
                <div className="cs-container">
                    <div className="cs-custom_heading center">
                        <h4>{services.subtitle}</h4>
                        <h2>{services.maintitle}</h2>
                    </div>  
                    <div className="cs-main_section pt_small">
                    {
                        services.map((service,i)=>{
                            return(
                                <WhatWeDoItem key={i} service={service}  />
                            )
                        })
                    }  
                    </div>  
                </div>
            </div>
        </>
    )
}

export default Services