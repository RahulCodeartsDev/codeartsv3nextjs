import Link from "next/link";
const InnerHero = ({titleData})=> {
    return(
        <>
            <div className="cs-inner_pages_hero_section pt pb">
                <div className="cs-container">
                    <h1>{titleData[0].title}</h1>
                    <ul className="breadcrumb d-flex align-center justify-center">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li>{titleData[0].title}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default InnerHero