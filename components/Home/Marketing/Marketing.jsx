import Link from "next/link";
import MarketingListItem from "./MarketingListItem";
const Marketing = ({marketing})=> {
    return(
        <>
            <div className="cs-marketing_section pt pb">
                <div className="cs-container d-flex align-center justify-between">
                    <div className="cs-left_section">
                        <p><span dangerouslySetInnerHTML={{__html:marketing[0].firstParaDescription}} /></p>
                        <ul className="cs-action_button">
                            {
                                marketing[0].marketingTopic.map((marketing,i)=>{
                                    return(
                                        <MarketingListItem key={i} marketing={marketing} />
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                    <div className="cs-right_section">
                        <img src={marketing[0].marketingAvator} alt="" />
                        <div className="cs-content_area">
                            <div className="cs-custom_heading">
                                <img src={marketing[0].highlightedIcon} alt="" />
                                <h2>{marketing[0].highlightedTitle}</h2>
                                <p><span dangerouslySetInnerHTML={{__html:marketing[0].highlightedDescription}} /></p>
                            </div>
                            <div className="cs-button small">
                                <Link href={`/about/${marketing[0].buttonUrl}`}><a className="d-flex align-center justify-center">{marketing[0].buttonName}</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marketing