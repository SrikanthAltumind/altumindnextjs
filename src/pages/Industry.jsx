import { Helmet } from "react-helmet-async"
import SubscribeForm from "../Components/common-components/SubscribeForm"
import Industries from "../Components/industry-components/Industries"
import IndustryBanner from "../Components/industry-components/IndustryBanner"

const Industry = () => {
  return (
    <>
    <Helmet>
          {/* For SEO  */}
          <title>Industries We Serve | Tailored Solutions for Every Sector</title>
          <meta
            name="description"
            content="Explore our industry-specific solutions. We provide tailored services to meet the unique needs of various sectors, driving growth and innovation across industries."
          />
          <meta name="keywords" content="" />
          {/* For Social Media */}
          <meta property="og:title" content="Industries We Serve | Tailored Solutions for Every Sector" />
          <meta property="og:description" content="Explore our industry-specific solutions. We provide tailored services to meet the unique needs of various sectors, driving growth and innovation across industries." />
          <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
          <meta property="og:keywords" content="" />
          {/* canonical */}
          <link rel="canonical" href="https://altumindglobal.com/industries" />
    </Helmet>
    <div className='dark:bg-darkTheme flex flex-col gap-24 lg:gap-28'>
    <IndustryBanner/>
    <Industries/>    
    <SubscribeForm/>
    </div>
    </>
  )
}

export default Industry