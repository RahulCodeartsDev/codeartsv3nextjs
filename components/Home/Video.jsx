const Video = ({videos})=>{
    const videobg = {
        backgroundImage: videos[0].vidBg,
    };
    return(
        <>
            <div className="cs-video_section" style={videobg}>
                <div className="cs-container">
                    <div className="cs-content_area">
                        <h2>{videos[0].vidHeading}</h2>
                        <div className="cs-coun_down d-flex align-center justify-between">
                            <div className="cs-count d-flex align-end">
                                <div><span className="counter">{videos[0].emNo}</span><sup>+</sup></div>
                                {videos[0].smallDes1}
                            </div>
                            <div className="cs-count d-flex align-end">
                                <div><span className="counter">{videos[0].softwareNo}</span><sup>+</sup></div>
                                {videos[0].smallDes2}
                            </div>                    
                        </div>
                        <a data-fancybox="false" data-src={videos[0].vidLink} className="cs-video_button d-flex align-center justify-center">
                            <img src="images/play-big.png" alt="" />
                            <span className="line-video-animation line-video-1"></span>
                            <span className="line-video-animation line-video-2"></span>
                            <span className="line-video-animation line-video-3"></span>
                        </a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Video