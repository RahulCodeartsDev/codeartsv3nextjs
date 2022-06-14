const TestimonialItem = ( {testimonial} )=>{
    return(
        <>
            <div className="cs-testi_item">
                <img src="images/quote.svg" className="quote" />
                <p>{testimonial.description}</p>
                <div className="cs-profile_area d-flex align-center">
                    <img src={testimonial.avator} alt="" />
                    <div className="cs-pro_del">
                        <div className="name">{testimonial.name}</div>
                        <div className="deg">{testimonial.designation}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialItem