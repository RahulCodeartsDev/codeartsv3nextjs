import TeamItem from "./TeamItem"

const Teams = ({ teams }) => {
    return (
        <div className="cs-team_section pt pb">
            <div className="cs-container">
                <div className="cs-custom_heading center">
                    <h4>{teams[0].subtitle}</h4>
                    <h2>{teams[0].title}</h2>
                </div>
                <div className="cs-main_team_section pt_small owl-carousel" id="team-slider">
                    {
                        teams[0].teamlist.map((team, i) => {
                            return (
                                <TeamItem key={i} team={team} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Teams