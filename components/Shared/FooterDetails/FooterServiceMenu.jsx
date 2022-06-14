import Link from "next/link"
const FooterServiceMenu = ({footer}) => {
    return (
        <>
            <div className="cs-footer_item">
                <h3>{footer[0].mainFooterDetails[0].heading_four}</h3>
                <ul className="cs-ft_menu">
                    {
                        footer[0].mainFooterDetails[0].footerServiceMenu.map((item, i) => {
                            return (
                                <li key={i}><Link href={item.path}><a>{item.name}</a></Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default FooterServiceMenu