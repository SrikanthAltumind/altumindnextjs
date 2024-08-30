import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { gainsAtGlance } from '../../Utils';
import { useLocation } from 'react-router-dom';

const GainsAtGlance = () => {
    const isMobileDevice = window.innerWidth<640
    const location = useLocation()
    const [slideItems, setSlideItems] = useState([])
    const [leftSlideIndex, setLeftSlideIndex] = useState(0)
    const [centerSlideIndex, setCenterSlideIndex] = useState(isMobileDevice? 0 : 1)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:false,
        slidesToShow: isMobileDevice ? 1 : 3,
        beforeChange: (current,next)=> {
            setLeftSlideIndex(next)
            isMobileDevice ? setCenterSlideIndex(next) : setCenterSlideIndex(next===slideItems?.length-1 ? 0 : next+1)
        },
    };

useEffect(()=> {
    if(location.pathname === '/industries/bfsi-fintech')
        setSlideItems(gainsAtGlance.financeAndBFSI)
    else if(location.pathname === '/industries/healthcare')
        setSlideItems(gainsAtGlance.healthCare)
    else if(location.pathname === '/industries/ed-tech')
        setSlideItems(gainsAtGlance.edTech)
    else if(location.pathname === '/industries/internet')
        setSlideItems(gainsAtGlance.internetAndSaas)
    else if(location.pathname === '/industries/digital-commerce')
        setSlideItems(gainsAtGlance.digitalCommerce)
    else if(location.pathname === '/industries/green-sustainability')
        setSlideItems(gainsAtGlance.greenSustainability)
 
},[])

return (
    <div className='bg-[#EAF1FF] dark:bg-[#25282c] dark:text-white font-raleway'>
    <div className='w-[95%] max-w-[950px] mx-auto pt-10 pb-20'>
        <p className='max-sm:mx-auto bg-clip-text w-fit text-transparent bg-gradient-to-r from-gradientBlue via-gradientGreen  to-gradientBlue text-2xl font-bold '>
            Gains at a Glance
        </p>
    <Slider {...settings}>
        {slideItems?.map((item,index) => (
            <div key={item.id} className='pt-20 sm:pt-28 sm:pb-10 px-3 font-medium'>
                <div className={`${index === centerSlideIndex ? 'scale-125 sm:scale-150 -translate-y-4' : 'scale-90 duration-200'}  transition-all duration-700 linear`}>
                        <div className={`max-w-max ${index===centerSlideIndex? 'mx-auto' : index===leftSlideIndex ? 'mr-auto' : 'ml-auto'}`}>
                        <p className={`lg:text-xl ${index===centerSlideIndex? 'font-bold' : ''} `}>{item.firstLine}</p> 
                        <p className={`${index===centerSlideIndex? 'text-xs' : 'lg:text-lg'} `}>{item.secondLine}</p> 
                   </div>
                </div>
            </div>
        ))}
    </Slider>
</div>
</div>
);
};

export default GainsAtGlance