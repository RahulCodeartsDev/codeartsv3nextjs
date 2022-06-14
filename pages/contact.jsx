import CustomHead from "../components/Shared/CustomHead"
import Header from "../components/Shared/HeaderDetails/Header"
import InnerHero from "../components/Shared/InnerHero"
import RightAddressInfo from "../components/Shared/HeaderDetails/RightAddressInfo"
import Footer from "../components/Shared/FooterDetails/Footer"
import Input from "../components/Contact/input"
// import { useForm } from "react-hook-form"

const Contact = ({ metaData, headerData, titleData, contactData, footer }) => {
  // const {register, handleSubmit, formState:{errors}} = useForm();

  return (
    <>
      <CustomHead metaData={metaData} />
      <Header headerData={headerData} />
      <InnerHero titleData={titleData} />
      <div className="cs-contact_section pt pb">
        <div className="cs-container">
          <div className="cs-custom_heading top center">
            <h4>{contactData[0].subtitle}</h4>
            <h2 dangerouslySetInnerHTML={{ __html: contactData[0].title }}></h2>
            <p className="top_dres" dangerouslySetInnerHTML={{ __html: contactData[0].descriptions }}></p>
          </div>
          <div className="cs-contact_main_section pt_small">
            <div className="cs-left_content_area">
              <div className="cs-custom_heading">
                <h4>{contactData[0].contactLeftHeadingDetails[0].subtitle}</h4>
                <h2>{contactData[0].contactLeftHeadingDetails[0].title}</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: contactData[0].contactLeftHeadingDetails[0].dscriptions }}></p>
              <RightAddressInfo headerData={headerData} />
            </div>
            <div className="cs-contact_form_section">
              <div className="cs-custom_heading">
                <h4>{contactData[0].contactRightHeadingDetails[0].subtitle}</h4>
                <h2>{contactData[0].contactRightHeadingDetails[0].title}</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: contactData[0].contactRightHeadingDetails[0].dscriptions }}></p>
              <Input />

            </div>

          </div>
        </div>
      </div>
      <div className="cs-google_map" dangerouslySetInnerHTML={{ __html: contactData[0].contactMapUrl }}></div>
      <Footer footer={footer} />
    </>
  )
}

export default Contact

export async function getStaticProps() {

  const resposemeta = await fetch("https://codeartssolution.com/wp-json/codearts/v2/contactPageSeoMeta")
  const metadata = await resposemeta.json()

  const responseHeader = await fetch("https://codeartssolution.com/wp-json/codearts/v2/headerData")
  const headerdata = await responseHeader.json()

  const resposetitle = await fetch("https://codeartssolution.com/wp-json/codearts/v2/contactPageTitle");
  const titledata = await resposetitle.json()

  const responseContactsDetails = await fetch("https://codeartssolution.com/wp-json/codearts/v2/contactPageInfo")
  const contactdata = await responseContactsDetails.json()

  const responseFooter = await fetch("https://codeartssolution.com/wp-json/codearts/v2/footer")
  const footerdata = await responseFooter.json()

  return {
    props: {
      metaData: metadata,
      headerData: headerdata,
      titleData: titledata,
      contactData: contactdata,
      footer: footerdata,
    }
  }

}