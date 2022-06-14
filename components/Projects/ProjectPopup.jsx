
const ProjectPopup = ({ list }) => {

    return (
        <>
            <div className="cs-main_details d-flex justify-between">
                <div className="cs-portfolio_content_area">
                    <div className="cs-cat">Identity Mockup  {list.projectDate}</div>
                    <h3>{list.projectTitle}</h3>
                    <div className="cs-pro_details">
                        <h4>About</h4>
                        <p>{list.projectDescription}</p>
                        <div className="cs-option d-flex">
                            <div className="port">
                                <h4>Technology Used</h4>
                                <ul className="cs-list">
                                    {
                                        list.techUsed.map((item, i) => {
                                            return (
                                                <li key={i}>{item.techname}</li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                            <div className="port">
                                <h4>Our Role</h4>
                                <ul className="cs-list">
                                    {
                                        list.projectRoll.map((item, i) => {
                                            return (
                                                <li key={i}>{item.role}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                        </div>
                        <div className="cs-review_item">
                            <lord-icon
                                src="https://cdn.lordicon.com/bwordpbq.json"
                                trigger="loop"
                                delay="2000"
                                colors="primary:#f47514,secondary:#08a88a">
                            </lord-icon>
                            <p>{list.clientreviews}</p>
                            <div className="cs-profile_area d-flex align-center">
                                <img src={list.clientavator} alt="" />
                                <div className="cs-pro_del">
                                    <div className="name">{list.clientName}</div>
                                    <div className="deg">{list.clientPosi}</div>
                                </div>
                            </div>
                        </div>
                        <div className="cs-button small">
                            <a href={list.projectLink} target="_blank" className="d-flex align-center justify-center">OPEN PROJECT</a>
                        </div>
                    </div>
                </div>
                <div className="cs-portfolio_view_area">
                    <img src={list.projectavator} alt="" />
                </div>
            </div>
        </>
    )
}

export default ProjectPopup