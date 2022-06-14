import Link from 'next/link'
const Hero = ({heros})=> {
    return (
      <>
         <div className="cs-hero_section">
            <div className="cs-container d-flex align-center justify-between">
                <div className="cs-content_area">
                    <h1>
                        {heros[0].herostatictitle}
                        <span className="cs-text_slide_items">
                            {
                               heros[0].herochangetitle.map((item,i)=>{
                                   return(
                                        <>
                                          <span key={i}>{item.chnagetitle},</span>
                                        </>
                                   )
                               }) 
                            }
                        </span>
                        <span className="cs-text_slider"></span>
                    </h1>
                    <p>{heros[0].herocontent}</p>
                    <div className="cs-buttons_back d-flex align-center">
                        <div className="cs-button small">
                            <Link href="/contact"><a className="d-flex align-center justify-center white">Contact Today</a></Link>
                        </div>
                        <div className="cs-video_button d-flex align-center">
                            <div className="cs-play d-flex align-center justify-center" data-fancybox="true" data-src={heros[0].herovideo}>
                                <img src={heros[0].playicon} alt="" />
                            </div>
                            Our Latest Video
                        </div>
                    </div>                
                </div>
                <div className="cs-avator_area move" data-speed="5">
                    <span className="cs-connection d-flex align-center justify-center">
                        <lord-icon
                            src={heros[0].heroicon1}
                            trigger="loop"
                            delay="2000" 
                            colors="primary:#121331,secondary:#f47514">
                        </lord-icon>
                    </span>
                    <span className="cs-business d-flex align-center justify-center">
                        <lord-icon
                            src={heros[0].heroicon2}
                            trigger="loop"
                            delay="2000" 
                            colors="primary:#121331,secondary:#f47514">
                        </lord-icon>
                    </span>
                    <span className="cs-idea d-flex align-center justify-center">
                        <lord-icon
                            src={heros[0].heroicon3}
                            trigger="loop"
                            delay="2000" 
                            colors="primary:#121331,secondary:#f47514">
                        </lord-icon>
                    </span>
                    <img src={heros[0].heroavator} className="main" alt="" />
                </div>
            </div>
        </div>
      </>
    )
}

export default Hero


