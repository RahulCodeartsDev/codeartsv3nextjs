import Link from "next/link"
const FooterMainMenu = ({ footer }) => {
    return (
        <>
            <div className="cs-footer_item">
                <h3>{footer[0].mainFooterDetails[0].heading_three}</h3>
                <ul className="cs-ft_menu">
                    {
                        footer[0].mainFooterDetails[0].mainFooterMenu.map((item, i) => {
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

export default FooterMainMenu