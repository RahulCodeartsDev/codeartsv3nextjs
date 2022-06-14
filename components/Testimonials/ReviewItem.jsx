const ReviewItem = ({review})=>{
    return(
        <>
            <div className="cs-testi_item">
                <img src="images/quote.svg" className="quote" />
                <p>{review.description}</p>
                <div className="cs-profile_area d-flex align-center">
                    <img src={review.avator} alt="" />
                    <div className="cs-pro_del">
                        <div className="name">{review.name}</div>
                        <div className="deg">{review.designation}</div>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default ReviewItem