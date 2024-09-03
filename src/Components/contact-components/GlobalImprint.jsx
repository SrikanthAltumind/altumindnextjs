import Counter from '../common-components/Counter'
import crownIcon from '../../assets/Crown.png'
import clientManagementIcon from '../../assets/Client Management.png'
import innovationIcon from '../../assets/Innovation.png'
import itIcon from '../../assets/It.png'
import countryIcon from '../../assets/Country.png'

const ourGlobalImprintsData = [
    {id:'years', title:'Years in digital transformation', value:8, suffix:'+', countSpeed:200, imagePath:crownIcon},
    {id:'clients', title:'Clients served', value:55, suffix:'+', countSpeed:20, imagePath:clientManagementIcon},
    {id:'innovations', title:'Innovations delivered', value:97, suffix:'+', countSpeed:20, imagePath:innovationIcon},
    {id:'industries', title:'Industries revolutionized', value:12, suffix:'+', countSpeed:100, imagePath:itIcon},
    {id:'digitalImpact', title:'Digital impacts across 5 continents', value:5, suffix:'', countSpeed:200, imagePath:countryIcon},
  ]

const GlobalImprint = () => {

  return (
    <div className='py-10'>
        <div className='w-[90%] lg:w-[95%] max-lg:max-w-[700px] mx-auto font-raleway'>
            <p className='text-2xl sm:text-3xl lg:text-4xl w-fit mx-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue '>Our Global Imprint</p>
            <div className='mt-10 flex flex-wrap gap-10 justify-center'>
              {ourGlobalImprintsData?.map(stat=> (
                <div key={stat.id} className='bg-LightBlue dark:bg-DarkBackground rounded-xl py-4 px-3 flex flex-col items-center gap-y-2 w-[155px]'>
                   <img className='w-10 h-10 object-contain mb-1 dark:invert' src={stat.imagePath} alt={stat.title}/>
                   <p className='text-[#213560] dark:text-white font-medium text-3xl'>
                    <Counter value={stat.value} countSpeed={stat.countSpeed}/>
                    <span>{stat.suffix}</span>
                  </p>
                  <p className='text-[#353638] dark:text-white font-semibold text-center text-[13px]'>{stat.title}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
  );
};

export default GlobalImprint;
