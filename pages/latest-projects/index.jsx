import CustomHead from "../../components/Shared/CustomHead";
import Projects from "../../components/Projects"
import InnerHero from "../../components/Shared/InnerHero"
import { useState } from 'react'
import Header from "../../components/Shared/HeaderDetails/Header"
import Teams from "../../components/Team/Teams";
import Skills from "../../components/Skills/Skills";
import Testimonials from "../../components/Testimonials/Testimonials";
import ProjectPopup from "../../components/Projects/ProjectPopup";
import Footer from "../../components/Shared/FooterDetails/Footer";


const LastProjects = ({ metaData, headerData, titleData, projects, skills, teams, testimonials, footer }) => {
    const [ProjectDetailsClick, setProjectDetailsClick] = useState(false);
    const ProjectdelClick = () => setProjectDetailsClick(!ProjectDetailsClick);
    return (
        <>
            <CustomHead metaData={metaData} />
            <Header headerData={headerData} />
            <InnerHero titleData={titleData} />
            <div className="cs-portfolio_section pt pb">
                <div className="cs-container">
                    <div className="cs-custom_heading center">
                        <h4>QUICK GETTING STARTED</h4>
                        <h2>Our World Class Portfolio</h2>
                    </div>
                    <Projects>
                        {
                            projects.map((item, i) => {
                                return (
                                    <div key={i} label={item.catName}>
                                        {
                                            item.catList.map((list, i) => {
                                                return (

                                                    <div key={i} className={ProjectDetailsClick ? 'cs-portfolio_item close' : 'cs-portfolio_item'} >
                                                        <picture>
                                                            <img src={list.projeclisttavator} alt="" />
                                                        </picture>
                                                        <h3>{list.projectTitle}</h3>
                                                        <p>{list.projectType}</p>
                                                        <div className="cs-portfolioDetailsArea">
                                                            <div className="cs-main_area">
                                                                <div className="cs-close_pop d-flex align-center justify-center" onClick={ProjectdelClick} >x</div>
                                                                <ProjectPopup list={list} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }


                    </Projects>
                </div>
            </div>
            <Teams teams={teams} />
            <Skills skills={skills} />
            <Testimonials testimonials={testimonials} />
            <Footer footer={footer} />           
        </>
    )
}

export default LastProjects

export async function getStaticProps() {
    const resposemeta = await fetch("https://codeartssolution.com/wp-json/codearts/v2/latestProjectPageSeoMeta")
    const metadata = await resposemeta.json()

    const responseHeader = await fetch("https://codeartssolution.com/wp-json/codearts/v2/headerData")
    const headerdata = await responseHeader.json()

    const resposetitle = await fetch("https://codeartssolution.com/wp-json/codearts/v2/projectPageTitle")
    const titledata = await resposetitle.json()

    const responseProject = await fetch("https://codeartssolution.com/wp-json/codearts/v2/projectDetails")
    const ProjectData = await responseProject.json()

    const responseSkill = await fetch("https://codeartssolution.com/wp-json/codearts/v2/skillsDetails")
    const skillData = await responseSkill.json()

    const responseTeam = await fetch("https://codeartssolution.com/wp-json/codearts/v2/teamDetails")
    const teamData = await responseTeam.json()

    const responseTestimonial = await fetch("https://codeartssolution.com/wp-json/codearts/v2/testimonails")
    const testimonialdata = await responseTestimonial.json()

    const responseFooter = await fetch("https://codeartssolution.com/wp-json/codearts/v2/footer")
    const footerdata = await responseFooter.json()

    return {
        props: {
            metaData: metadata,
            headerData: headerdata,
            titleData: titledata,
            projects: ProjectData,
            skills: skillData,
            teams: teamData,
            testimonials: testimonialdata,
            footer: footerdata,
        }
    }
}

