import { useState } from "react";
const Projects = ({children})=>{
    const [activeTab, setactiveTab] = useState(children[0].props.label);
    const handleClick = (e, newactiveTab)=>{
        e.preventdefault;
        setactiveTab(newactiveTab);
    }
    return(
        <>
            <div className="cs-portfolio_filter_section d-flex align-center justify-center">
                <p>Filter by</p>
                <ul className="cs-filter_nav d-flex align-center">
                   {
                       children.map((tab,i)=>{
                            return(
                                <li key={i} className={tab.props.label ==activeTab ? "active" : "" }>
                                    <a href="javascript:void(0)" onClick={e=>{handleClick(e, tab.props.label)}}>{tab.props.label}</a>
                                </li>
                            )
                       })
                   }
                </ul>
            </div>
            {
                children.map((one, i)=>{
                    if(one.props.label == activeTab)
                    return(
                        <div key={i} className="cs-portfolio_main_area pt_small">{one.props.children}</div>
                    )                    
                })
            }
        </>
    )
}

export default Projects