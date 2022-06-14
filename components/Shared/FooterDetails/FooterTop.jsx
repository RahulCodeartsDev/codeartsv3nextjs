const FooterTop = ({footer}) => {
    return (
        <>
            <div className="cs-top pt pb">
                <div className="cs-container d-flex align-center justify-between">
                    <h2>{footer[0].title}</h2>
                    <ul className="cs-contact_details d-flex align-center">
                        <li className="d-flex align-center">
                            <lord-icon
                                src={footer[0].icon1}
                                trigger="loop"
                                delay="2000"
                                colors="primary:#ffffff,secondary:#f47514">
                            </lord-icon>
                            <div>
                                <span>{footer[0].heading_one}</span><br />
                                {footer[0].ph_no}
                            </div>
                        </li>
                        <li className="d-flex align-center">
                            <lord-icon
                                src={footer[0].icon2}
                                trigger="loop"
                                delay="2000"
                                colors="primary:#ffffff,secondary:#f47514">
                            </lord-icon>
                            <div>
                                <span>{footer[0].heading_two}</span><br />
                                {footer[0].email_id}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FooterTop