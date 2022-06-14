import TestimonialItem from "./TestimonialItem"
const Testimonials = ({testimonials}) => {
    return (
        <>
            <div className="cs-testimonial_section pt pb">
                <div className="cs-container d-flex justify-between">
                    <div className="cs-custom_heading">
                        <h4>{testimonials[0].subtitle}</h4>
                        <h2>{testimonials[0].title}</h2>
                        <p dangerouslySetInnerHTML={{__html:testimonials[0].description}}></p>
                        <lord-icon
                            src="https://cdn.lordicon.com/wgkjwucf.json"
                            trigger="loop"
                            delay="2000"
                            colors="primary:#eff2f4,secondary:#eff2f4">
                        </lord-icon>
                    </div>
                    <div className="cs-testimonial_main_area owl-carousel" id="testi-slider">
                        {
                            testimonials[0].reviewList.slice(0,3).map((testimonial, i) => {
                                return (
                                    <TestimonialItem key={i} testimonial={testimonial} />
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Testimonials