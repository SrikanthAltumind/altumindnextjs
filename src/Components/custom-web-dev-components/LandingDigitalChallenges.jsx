import Complex from '../../assets/cwd-icons/Complex Concepts Made Simple.svg'
import Efficient from '../../assets/cwd-icons/Efficient User Experience.svg'
import Boost from '../../assets/cwd-icons/Boost Engagement & Trust.svg'
import Improved from '../../assets/cwd-icons/Improved Responsiveness.svg'
import Clutter from '../../assets/cwd-icons/Clutter-Free  Backend.svg'
import Real from '../../assets/cwd-icons/Real-Time Analytics & Automation.svg'



const data = {
  "title": "Solving Digital Challenges with Expertise",
  "sections": [
    {
      "id":1,
      "iconUrl":Complex,
      "title": "Complex Concepts Made Simple",
      "description": "Simplify intricate ideas with visually appealing and functional UI Design."
    },
    {
      "id":2,
      "iconUrl":Efficient,
      "title": "Efficient User Experience (UX)",
      "description": "We design intuitive navigation and interactions that reduce friction and improve satisfaction."
    },
    {
      "id":3,
      "iconUrl":Boost,
      "title": "Boost Engagement & Trust",
      "description": "With CX-focused strategies, we help build long-lasting connections with your audience."
    },
    {
      "id":4,
      "iconUrl":Improved,
      "title": "Improved Responsiveness",
      "description": "Websites optimized for all devices to enhance usability and accessibility."
    },
    {
      "id":5,
      "iconUrl":Clutter,
      "title": "Clutter-Free Backend",
      "description": "Simplified systems for easy scalability and updates."
    },
    {
      "id":6,
      "iconUrl":Real,
      "title": "Real-Time Analytics & Automation",
      "description": "Gather actionable insights and automate lead generation for better decision-making."
    }
  ]
}

const LandingDigitalChallenges = () => {
  return (
    <div className="w-[90%] mx-auto font-raleway space-y-3 dark:text-white">
      <p className="text-2xl lg:text-3xl font-extrabold text-center max-w-[400px] mx-auto">{data?.title}</p>

      <div className='w-fit mx-auto sm:flex flex-wrap justify-center max-w-[700px] lg:max-w-[900px]'>
        {data?.sections?.map(section=> 
            <div key={section.id} className='w-[280px] md:w-[220px] lg:w-[300px] py-5 md:py-8 lg:py-10 pr-4 lg:pr-12 border-l sm:border-b sm:[&:nth-last-child(-n+2)]:border-b-0 sm:even:border-r md:even:border-r-0 md:[&:nth-child(3n)]:border-r md:[&:nth-last-child(-n+3)]:border-b-0  flex flex-col gap-2'>
              <div className="ml-4 w-8 h-8 lg:w-10 lg:h-10 ">
                <img src={section?.iconUrl} alt={section?.title}/>
              </div>
              <p className='pl-4 md:w-[70%]  text-sm lg:text-base font-semibold border-l border-black'>{section?.title}</p>
              <p className='pl-4 md:w-[80%] text-xs lg:text-sm text-[#7C7C85] dark:text-white'>{section?.description}</p>
            </div>
        )}
      </div>
    </div>
  )
}

export default LandingDigitalChallenges