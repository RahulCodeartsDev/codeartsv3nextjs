import Link from 'next/link';

const WhatWeDoItem = ({service})=>{
    return(
        <>
            <div className="cs-portion">
                <Link href={`/our-services/${service.id}`}>
                    <a className="cs-heading d-flex">
                        <div className="cs-image_area">
                            <img src={service.img1} />
                            <img src={service.img2} className="hover" />                            
                        </div>
                        <h3>{service.title }</h3>
                    </a>
                </Link>
                <p>{service.des}</p>  
            </div>
        </>
    )
}

export default WhatWeDoItem