import SkillItem from "./SkillItem"

const Skills = ({skills}) => {
    return (
        <>
            <div className="maximize_result pt pb">
                <div className="cs-container">
                    <div className="cs-head d-flex align-center justify-between">
                        <div className="cs-custom_heading">
                            <h2 dangerouslySetInnerHTML={{__html:skills[0].title}}></h2>
                            <p>{skills[0].description}</p>
                        </div>
                        <ul className="cs-skills_area">
                            {
                                skills[0].skilllist.map((skill, i) => {
                                    return (
                                        <li key={i}>
                                            <SkillItem skill={skill} />
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills