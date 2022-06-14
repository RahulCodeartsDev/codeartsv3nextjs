const TeamItem = ({team})=>{
    return(
        <div className="cs-team_item">
            <img src={team.img} alt="" />
            <div className="cs-content_area d-flex align-center justify-center">
                <h3>{team.desig}</h3> 
                <p>{team.name}</p>
            </div>
        </div>
    )
}

export default TeamItem