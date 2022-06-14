import WhyChooseusContent from './WhyChooseUsContent';
import Link from 'next/link';
import WhyChooseItem from './WhyChooseItem';
import WhyListItem from './WhyListItem';
const WhyChooseUs = ({whychoose})=> {
    return (
      <>
        <div className="cs-why_choose_us_section">
            <div className="cs-container d-flex align-center justify-between">
                <div className="cs-left_section">
                    <ul className="cs-why_option">
                        {
                            whychoose[0].whychooselistdata.map((whychoose,i)=>{
                                return(
                                    <WhyChooseItem key={i} whychoose={whychoose} />
                                )
                            })
                        }
                        
                    </ul>
                </div>
                <div className="cs-right_section">
                    <WhyChooseusContent  whychoose={whychoose} />
                    <ul className="cs-list d-flex align-center justify-between">
                        {
                            whychoose[0].whylistdata.map((whychoose,i)=>{
                                return(
                                    <WhyListItem key={i} whychoose={whychoose} />
                                )
                            })
                        }
                        
                    </ul>
                    <div className="cs-button small">
                        <Link href={`/${whychoose[0].buttonurl}`}><a className="d-flex align-center justify-center">{whychoose[0].buttonname}</a></Link>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}
export default WhyChooseUs