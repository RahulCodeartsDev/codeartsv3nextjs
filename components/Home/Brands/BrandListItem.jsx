const BrandListItem = ({brands})=>{
    return(
        <>
            <div className="cs-brand_item">
                <div className="cs-brands_pic_back">
                    <img src={brands.img1} className="one" alt="" />
                    <img src={brands.img2} className="two" alt="" />
                </div>
                <h3>{brands.title}</h3>
            </div>
        </>
    )
}

export default BrandListItem