const SkillItem = ({ skill }) => {
    const skillstyle = {
        backgroundColor: skill.color,
        width: skill.level
    };
    return (
        <>
            <div className="d-flex align-center justify-between">
                <h4>{skill.name}</h4>
                <span className="no">{skill.level}</span>
            </div>
            <span className="cs-skill_bar">
                <span className="cs-score" style={skillstyle}></span>
            </span>
        </>
    )
}

export default SkillItem