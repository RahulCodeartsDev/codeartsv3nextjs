import Header from "../components/Shared/HeaderDetails/Header"
import CustomHead from "../components/Shared/CustomHead"
import InnerHero from "../components/Shared/InnerHero"
import ReviewItem from "../components/Testimonials/ReviewItem"
import Skills from "../components/Skills/Skills"
import Teams from "../components/Team/Teams"
import Footer from "../components/Shared/FooterDetails/Footer"

const Reviews = ({headerData, metaData, titleData, testimonials, skills, teams, footer})=>{
    return(
        <>
            <CustomHead metaData={metaData} />
            <Header headerData={headerData} />        
            <InnerHero titleData={titleData} />
            <div className="cs-reviews_section pt pb">
                <div className="cs-container">
                    <div className="cs-custom_heading center">
                        <h4>{testimonials[0].reviewPageSubTitle}</h4>
                        <h2>{testimonials[0].reviewPageTitle}</h2>
                    </div>
                    <div className="cs-main_reviews pt_small">
                        {
                            testimonials[0].reviewList.map((review,i)=>{
                                return(
                                    <ReviewItem key={i} review={review} />
                                )
                            })
                        }
                        
                
                    </div>
                </div>
            </div>
            <Skills skills={skills} />
            <Teams teams={teams} />
            <Footer footer={footer} />
        </>
    )
}

export default Reviews


export async function getStaticProps(){
    const resposemeta= await fetch("https://codeartssolution.com/wp-json/codearts/v2/ourReviewsPageSeoMeta");
    const metadata = await resposemeta.json();

    const responseHeader = await fetch("https://codeartssolution.com/wp-json/codearts/v2/headerData")
    const headerdata = await responseHeader.json()

    const resposetitle= await fetch("https://codeartssolution.com/wp-json/codearts/v2/ourReviewsPageTitle");
    const titledata = await resposetitle.json();    

    const responseSkill = await fetch("https://codeartssolution.com/wp-json/codearts/v2/skillsDetails");
    const skillData = await responseSkill.json();

    const responseTeam = await fetch("https://codeartssolution.com/wp-json/codearts/v2/teamDetails");
    const teamData = await responseTeam.json();

    const responseTestimonial = await fetch("https://codeartssolution.com/wp-json/codearts/v2/testimonails");
    const testimonialData = await responseTestimonial.json();

    const responseFooter = await fetch("https://codeartssolution.com/wp-json/codearts/v2/footer");
    const footerdata = await responseFooter.json();

    return{
        props:{
            metaData: metadata,
            headerData: headerdata,
            titleData: titledata,     
            skills: skillData,
            teams: teamData,
            testimonials: testimonialData,
            footer: footerdata,
        }
    }

    
    
}