import dynamic from 'next/dynamic'
import CustomHead from '../../components/Shared/CustomHead'
import Footer from '../../components/Shared/FooterDetails/Footer'
import Header from "../../components/Shared/HeaderDetails/Header"
import InnerHero from "../../components/Shared/InnerHero"
import Skills from '../../components/Skills/Skills'
import WhatWeDoItem from '../../components/Services/WhatWeDoItem'
// const WhatWeDoItem = dynamic(
//     () => import('../../components/Services/WhatWeDoItem'),
//     { loading: () => <p>Loading...</p> }
// )

import Teams from '../../components/Team/Teams'
import Testimonials from '../../components/Testimonials/Testimonials'

const Services = ({ metaData, headerData, titleData, serviceheadings, services, skills, teams, testimonials, footer }) => {
    
    return (
        <>
            <CustomHead metaData={metaData} />
            <Header headerData={headerData} />
            <InnerHero titleData={titleData} />
            <div className="cs-services_section pt pb">
                <div className="cs-container">
                    <div className="cs-custom_heading center">
                        <h4>{serviceheadings[0].subtitle}</h4>
                        <h2>{serviceheadings[0].maintitle}</h2>
                    </div>
                    
                    <div className="cs-main_section pt_small">
                        {
                         services.map((service, i) => {
                                return (
                                    <WhatWeDoItem key={i} service={service} />
                                )
                            })
                        }
                        

                    </div>
                </div>
            </div>
            <Teams teams={teams} />
            <Skills skills={skills} />
            <Testimonials testimonials={testimonials} />
            <Footer footer={footer} />
        </>
    )
}

export default Services

export async function getStaticProps() {
    const resposemeta = await fetch("https://codeartssolution.com/wp-json/codearts/v2/servicePageSeoMeta")
    const metadata = await resposemeta.json()

    const responseHeader = await fetch("https://codeartssolution.com/wp-json/codearts/v2/headerData")
    const headerdata = await responseHeader.json()

    const resposetitle = await fetch("http://localhost:3000/servicesPageTitle")
    const titledata = await resposetitle.json()

    const responseServiceHeadings = await fetch("https://codeartssolution.com/wp-json/codearts/v2/serviceheadings")
    const ServicesHeadingData = await responseServiceHeadings.json()

    const responseServices = await fetch("https://codeartssolution.com/wp-json/codearts/v2/services_list")
    const ServicesData = await responseServices.json()

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
            serviceheadings: ServicesHeadingData,
            services: ServicesData,
            skills: skillData,
            teams: teamData,
            testimonials: testimonialdata,
            footer: footerdata,
        }
    }
}


