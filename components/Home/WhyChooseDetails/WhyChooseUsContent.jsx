const WhyChooseusContent = ({whychoose})=>{
    return(
        <>
            <div className="cs-custom_heading">
                <h4>{whychoose[0].mainsubtitle}</h4>
                <h2><span dangerouslySetInnerHTML={{__html:whychoose[0].maintitle}} /></h2>
            </div>                
            <p>{whychoose[0].maincontent}</p>
        </>
    )
}

export default WhyChooseusContent