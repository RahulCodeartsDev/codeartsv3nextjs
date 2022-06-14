const SeoListItem = (props)=>{
    return(
        <>
            <li className="d-flex align-center">
                <lord-icon
                    src={props.icon}
                    trigger="loop"
                    delay="2000" 
                    colors="primary:#121331,secondary:#f47514">
                </lord-icon>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.des}</p>
                </div>
            </li>
        </>
    )
}

export default SeoListItem