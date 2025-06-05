import certifiedLogo from "../../assets/certified-logo.png"
import topDeveloper from "../../assets/top-developer.png"

const CertifiedLogos = () => {
    const imgData = [
        {
            id:1,
            url:certifiedLogo,
            alt:"certified-logo"
        },
         {
            id:2,
            url:certifiedLogo,
            alt:"certified-logo"
        },
         {
            id:3,
            url:certifiedLogo,
            alt:"certified-logo"
        },
        {
            id:4,
            url:certifiedLogo,
            alt:"certified-logo"
        }
    ]
  return (
    <div className="px-24 py-8 flex md:flex-row flex-col gap-10 justify-between items-center bg-gradient-to-br from-[#000731] via-[#002EB9] to-[#09D7FE]">
        <div className="flex flex-wrap gap-x-16 gap-y-10  items-center">
           {
            imgData?.map((item) => <img key={item?.id} src={item?.url} alt={item?.alt}/>)
           }
        </div>
        <div>
           <img  src={topDeveloper} alt="top-developers"/>
        </div>
    </div>
  )
}

export default CertifiedLogos