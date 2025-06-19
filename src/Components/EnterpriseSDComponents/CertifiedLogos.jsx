import topDeveloper from "../../assets/top-developer.png"

const CertifiedLogos = () => {
    const imgData = [
        {
            id:1,
            url:"https://cdn.altumindglobal.com/Digital_agency_f8e443a9f1.svg",
           
            alt:"certified-logo"
        },
         {
            id:2,
            url:"https://cdn.altumindglobal.com/image_1123_2c915065f3.svg",
            alt:"certified-logo"
        },
         {
            id:3,
            url:"https://cdn.altumindglobal.com/image_1121_5e00ae09de.svg",
            alt:"certified-logo"
        },
         {
            id:4,
            url:"https://cdn.altumindglobal.com/image_1122_d281a04197.svg",
            alt:"certified-logo"
        },
        {
            id:5,
            url:"https://cdn.altumindglobal.com/image_1126_fd8471a9a1.svg",
            alt:"certified-logo"
        }
    ]
  return (
    // <div className="py-12 flex md:flex-row flex-col gap-16 md:gap-24 justify-end items-center bg-gradient-to-r from-[#000731] via-[#002EB9] to-[#09D7FE]">
    //     <div className="flex flex-wrap justify-center gap-12 md:gap-x-24 md:gap-y-10  items-center">
    //        {
    //         imgData?.map((item) => <img key={item?.id} src={item?.url} alt={item?.alt} className="w-[90px]"/>)
    //        }
    //     </div>
    //     <div>
    //        <img  src="https://cdn.altumindglobal.com/image_1124_b696b6a11c.svg" alt="top-developers"  className="w-[200px]"/>
    //     </div>
    // </div>

     <div className="px-24 py-8 flex md:flex-row flex-col gap-10 justify-center items-center bg-gradient-to-r from-[#000731] via-[#002EB9] to-[#09D7FE]">
        <div className="flex flex-wrap gap-x-16 gap-y-10 justify-center  items-center">
           {
            imgData?.map((item) => <img key={item?.id} src={item?.url} alt={item?.alt} className="w-[90px]"/>)
           }
           <img  src="https://cdn.altumindglobal.com/image_1124_b696b6a11c.svg" alt="top-developers"  className="w-[200px]"/>
        </div>
    </div>

    // <div className="py-12 flex md:flex-row flex-col gap-24 justify-end items-center bg-gradient-to-r from-[#000731] via-[#002EB9] to-[#09D7FE]">
    //     <div className="flex flex-wrap gap-x-24 gap-y-10  items-center">
    //        {
    //         imgData?.map((item) => <img key={item?.id} src={item?.url} alt={item?.alt} className="w-[90px]"/>)
    //        }
    //     </div>
    //     <div>
    //        <img  src="https://cdn.altumindglobal.com/image_1124_b696b6a11c.svg" alt="top-developers"  className="w-[200px]"/>
    //     </div>
    // </div>
  )
}

export default CertifiedLogos