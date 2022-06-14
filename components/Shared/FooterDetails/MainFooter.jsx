import FooterAddress from "./FooterAddress"
import FooterMainMenu from "./FooterMainMenu"
import FooterServiceMenu from "./FooterServiceMenu"
const MainFooter = ({footer}) => {
    return (
        <>
            <div className="cs-bottom pt pb">
                <div className="cs-container">
                    <div className="cs-footer_items">
                        <FooterAddress footer={footer} />
                        <FooterMainMenu footer={footer} />
                        <FooterServiceMenu footer={footer} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainFooter