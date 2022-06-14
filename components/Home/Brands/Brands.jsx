import BrandListItem from "./BrandListItem"
const Brands = ({brands})=>{
    return(
        <>
            <div className="cs-brands pt pb">
                <div className="cs-container">
                    <div className="cs-brand_items owl-carousel" id="brand-slider">
                        {
                            brands[0].brandItem.map((brands,i)=>{
                                return(
                                    <BrandListItem key={i} brands={brands} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="highlight_text" dangerouslySetInnerHTML={{__html:brands[0].brandMessage}}></div>
            </div>
        </>
    )
}

export default Brands