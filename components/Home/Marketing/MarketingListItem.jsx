import Link from "next/link";
const MarketingListItem = ({marketing})=>{
    return(
        <>
            <li>
                <Link href={`/our-services/${marketing.url}`}>
                <a className="d-flex align-center">
                    <lord-icon
                        src={marketing.icon}
                        trigger="loop"
                        delay="2000"
                        colors="primary:#121331,secondary:#f47514" 
                    >
                    </lord-icon>
                    {marketing.title}
                </a>
                </Link>
            </li>
        </>
    )
}

export default MarketingListItem