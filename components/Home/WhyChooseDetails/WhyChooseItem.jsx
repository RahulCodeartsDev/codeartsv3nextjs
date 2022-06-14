const WhyChooseItem = ({whychoose})=>{
    return(
        <>
            <li>
                <lord-icon 
                src={whychoose.icon}
                trigger="loop" 
                delay="2000" 
                colors="primary:#121331,secondary:#f47514">
                </lord-icon>
                <h3><a href="">{whychoose.title}</a></h3>
                <p>{whychoose.des}</p>
            </li>
        </>
    )
}

export default WhyChooseItem