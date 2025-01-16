import Strategic from '../../assets/cwd-icons/strategicwebplanning.webp'
import Information from '../../assets/cwd-icons/informationarchitecture.webp'
import Creative from '../../assets/cwd-icons/creativedesign.webp'
import Adaptive from '../../assets/cwd-icons/adaptive-responsive.webp'
import Quality from '../../assets/cwd-icons/QA.webp'
import Flawless from '../../assets/cwd-icons/flawless.webp'

const data = {
  "title": "Seamless Approach to Custom Website Development & Design",
  "description": "We follow a meticulously crafted process to deliver websites that are not only visually stunning but also optimized for performance, engagement, and business growth.",
  "sections": [
    {
      "id": 1,
      "title": "Strategic Web Planning",
      "alt" : "A whiteboard with charts, arrows, and documents for custom website development, surrounded by coins, plants, and icons on a peach background",
      "description": "We align your website with your business goals by understanding your objectives, audience, and market to ensure it resonates with users and supports your mission.",
      "iconUrl": Strategic,
      "bgColor": "#FFA490"
    },
    {
      "id": 2,
      "title": "Information Architecture",
      "alt" : "Hands holding a smartphone showing a checklist with steps for custom website development and several checked items",
      "description": "We organize your website’s layout and content for intuitive navigation, ensuring users can effortlessly access the information they need.",
      "iconUrl": Information,
      "bgColor": "#E4EDFF"
    },
    {
      "id": 3,
      "title": "Creative Design",
      "alt" : "Colorful 3D shapes like cylinders, spheres, and cubes floating on a peach background, representing custom website development",
      "description": "Our designs combine stunning visuals with functionality, reflecting your brand identity and captivating your audience.",
      "iconUrl": Creative,
      "bgColor": "#FFD8C3"
    },
    {
      "id": 4,
      "title": "Adaptive and Responsive Development",
      "alt" : "3D illustrations of web browser windows featuring custom web development, with icons for landscape and coding on a soft pink background",
      "description": "We build dynamic, mobile-friendly websites optimized for flawless performance across all devices.",
      "iconUrl": Adaptive,
      "bgColor": "#FBE9E9"
    },
    {
      "id": 5,
      "title": "Quality Assurance (QA)",
      "alt" : "A blue ribbon badge with a green checkmark, symbolizing excellence in custom web development, on a dark blue background",
      "description": "We conduct meticulous testing to eliminate bugs, and ensure your website is responsive, functional, and ready to impress.",
      "iconUrl": Quality,
      "bgColor": "#004D8F"
    },
    {
      "id": 6,
      "title": "Flawless Launch and Continuous Optimization",
      "alt":"An orange rocket with red fins launching into the yellow sky, representing the creative possibilities of custom web development, with a small cloud",
      "description": "Once your website is live, we ensure a seamless launch and provide ongoing updates to keep your site fast, fresh, and aligned with your goals.",
      "iconUrl": Flawless,
      "bgColor": "#FFF569"
    }
  ]
}


const Approach = () => {
  return (
    <div className='w-[90%] mx-auto font-raleway'>
      <div className='max-w-[500px] mx-auto space-y-5'>
        <p className="text-2xl lg:text-3xl font-extrabold dark:text-white  text-center">{data?.title}</p>
        <p className="text-xs lg:text-sm text-[#7C7C85] dark:text-white text-center">{data?.description}</p>
      </div>
        <div className='flex flex-col max-sm:items-center max-sm:gap-y-10 mt-5 sm:mt-8 max-w-[700px] mx-auto'>
          {data?.sections?.map(section=>
          <div key={section?.id} className='group sm:flex items-center gap-20 lg:gap-24'>
            <div className='p-5 w-[260px] sm:w-[220px] sm:h-[270px] rounded-2xl flex flex-col gap-3 items-center justify-center text-center'
                style={{backgroundColor:section?.bgColor}}>
              <div className='w-[200px] h-[150px] sm:h-[200px] flex'>
                <img className='object-contain' src={section?.iconUrl} alt={section?.alt}/>
              </div>
              <div className='space-y-3 sm:hidden'>
                <p className={`${section?.bgColor==='#FFA490' || section?.bgColor==='#004D8F' ? 'text-white' : 'text-[#161C50]'} font-bold`}>{section?.title}</p>
                <p className={`${section?.bgColor==='#FFA490' || section?.bgColor==='#004D8F' ? 'text-white' : 'text-black'} text-xs leading-[18px]`}>{section?.description}</p>
              </div>
            </div>

            <div className='relative hidden h-[300px] sm:flex items-center border-l-2 border-gray-200  dark:border-gray-500  group-first:items-start group-last:items-end'>
              <div className='space-y-2 -ml-7 bg-white dark:bg-darkTheme py-1 group-first:pt-8 group-last:pb-14'>
                <p className='text-[#161C50] dark:text-white text-xl lg:text-2xl font-bold'>{section?.title}</p>
                <p className='text-[#7C7C85] dark:text-white text-xs lg:text-sm leading-[18px] max-w-[400px]'>{section?.description}</p>
              </div>

                <svg className="absolute group-last:hidden bottom-0 -left-[8.5px] w-4 h-3 text-gray-300 dark:text-gray-500 bg-white dark:bg-darkTheme" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 9-7 7-7-7"/>
                </svg>
            </div>
          </div>
          )}
        </div>
    </div>
  )
}

export default Approach