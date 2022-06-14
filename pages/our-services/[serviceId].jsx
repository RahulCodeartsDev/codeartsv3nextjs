import Head from "next/head"
import Link from "next/link"
import Footer from "../../components/Shared/FooterDetails/Footer"
import Header from "../../components/Shared/HeaderDetails/Header"
import Skills from "../../components/Skills/Skills"
import Teams from "../../components/Team/Teams"
import Testimonials from "../../components/Testimonials/Testimonials"
const ServiceSinglePage = ({ headerData, services, skills, teams, testimonials, footer }) => {
    return (
        <>
            <Head>
                <title>{services.title}</title>
                <meta name="description" content={services.metaDescriptions} />
                <link rel="canonical" href={services.canonicalUrl} />
            </Head>
            <Header headerData={headerData} />
            <div className="cs-inner_pages_hero_section pt pb">
                <div className="cs-container">
                    <h1>{services.title}</h1>
                    <ul className="breadcrumb d-flex align-center justify-center">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li>{services.title}</li>
                    </ul>
                </div>
            </div>
            <div className="cs-about_section cs-seo_company pt pb">
                <div className="cs-container d-flex align-center justify-between">
                    <div className="cs-right_section">
                        <img src={services.featuredImage} alt="" />
                        <span className="cs-business_label">
                            <h4>{services.title}</h4>
                            <lord-icon
                                src={services.icon}
                                trigger="loop"
                                delay="2000"
                                colors="primary:#121331,secondary:#f47514">
                            </lord-icon>
                        </span>
                    </div>
                    <div className="cs-content_area">
                        <div className="cs-custom_heading">
                            <h4>OUR VISION</h4>
                            <h2>{services.customHeading}</h2>
                        </div>
                        <p>{services.smalldes}</p>
                        <ul className="cs-list d-flex align-center">
                            {
                                services.list.map((item, i) => {
                                    return (
                                        <li key={i}>{item.serList}</li>
                                    )
                                })
                            }
                        </ul>
                        <div className="cs-button small"><a href="" className="d-flex align-center justify-center">GET IN TOUCH</a></div>
                    </div>

                </div>
            </div>
            <div className="cs-service_details_section pt">
                <div className="cs-container">
                    <div className="cs-custom_heading">
                        <h4>OUR SERVICES</h4>
                        <h2>How We Can Help?</h2>
                    </div>
                    <div className="cs-service_main pt_small">
                        {
                            services.serviceFocus.map((item, i) => {
                                return (
                                    <div key={i} className="cs-service_item">
                                        <lord-icon
                                            src={item.focusIcon}
                                            trigger="loop"
                                            delay="2000"
                                            colors="primary:#121331,secondary:#f47514">
                                        </lord-icon>
                                        <h3>{item.focusHeading}</h3>
                                        <p>{item.forsdes}</p>
                                    </div>
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



export default ServiceSinglePage

// export async function getStaticPaths() {
    
//     const response = await fetch(`http://localhost:3000/services/${params.serviceId}`)
//     const servicedata = await response.json()

//     const paths = servicedata.map((post)=>({
//         params: {id:post}
//     }))
//     return{
//         paths,
//         fallback: false
//     }
// }

export async function getStaticPaths(){
    return{
        paths: [
            {
                params: {serviceId: 'seo'}
            },
            {
                params: {serviceId: 'web-design'}
            },
            {
                params: {serviceId: 'web-development'}
            },
            {
                params: {serviceId: 'app-development'}
            },
            {
                params: {serviceId: 'plugin-customization'}
            },
            {
                params: {serviceId: 'ui-ux-development'}
            }
        ],
        fallback: false
    }
}

export async function getStaticProps(context) {

    const responseHeader = await fetch("https://codeartssolution.com/wp-json/codearts/v2/headerData")
    const headerdata = await responseHeader.json()

    const { params } = context;
    const response = await fetch(`http://localhost:3000/services/${params.serviceId}`)
    const servicedata = await response.json()

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
            headerData: headerdata,
            services: servicedata,
            skills: skillData,
            teams: teamData,
            testimonials: testimonialdata,
            footer: footerdata,
        },
    }
}