
import FooterTop from "./FooterTop";
import MainFooter from "./MainFooter";
const Footer = ({footer})=> {
    return(
        <>
            <footer>
                <FooterTop footer={footer} />
                <MainFooter footer={footer} />
                <div className="cs-copyright">
                    Copyright © 2021 Codearts Solutions Pvt Ltd, All rights reserved.
                </div>
            </footer>

        </>
    )
}

export default Footer