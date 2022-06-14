import Link from "next/link"
const FooterAddress = ({footer}) => {
    return (
        <>
            <div className="cs-footer_item">
                <h3>{footer[0].mainFooterDetails[0].heading_one}</h3>
                <p>{footer[0].mainFooterDetails[0].footerAddress}</p>
                <h3>{footer[0].mainFooterDetails[0].heading_two}</h3>
                <ul className="cs-social d-flex align-center">
                    {
                        footer[0].mainFooterDetails[0].footerSocial.map((item, i) => {
                            return (
                                <li key={i}><a href={item.url} className="d-flex align-center justify-center"><img src={item.img} alt="" /></a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default FooterAddress