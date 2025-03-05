import Counter from '../common-components/Counter'
import crownIcon from '../../assets/Crown.webp'
import clientManagementIcon from '../../assets/Client Management.webp'
import innovationIcon from '../../assets/Innovation.webp'
import itIcon from '../../assets/It.webp'
import countryIcon from '../../assets/Country.webp'

const ourGlobalImprintsData = [
    {id:'years', title:'Years in digital transformation', value:8, suffix:'+', countSpeed:200, imagePath:crownIcon},
    {id:'clients', title:'Clients served', value:55, suffix:'+', countSpeed:20, imagePath:clientManagementIcon},
    {id:'innovations', title:'Innovations delivered', value:97, suffix:'+', countSpeed:20, imagePath:innovationIcon},
    {id:'industries', title:'Industries revolutionized', value:12, suffix:'+', countSpeed:100, imagePath:itIcon},
    {id:'digitalImpact', title:'Continents, Infinite Innovations', value:5, suffix:'', countSpeed:200, imagePath:countryIcon},
  ]

const GlobalImprint = () => {

  return (
    <div className='py-10'>
        <div className='w-[90%] lg:w-[95%] max-lg:max-w-[700px] mx-auto font-montserrat'>
            <p className='custom-gradient-text'>Our Global Imprint</p>
            <div className='mt-10 flex flex-wrap gap-10 justify-center'>
              {ourGlobalImprintsData?.map(stat=> (
                <div key={stat.id} className='bg-LightBlue dark:bg-DarkBackground rounded-xl py-4 px-3 flex flex-col items-center gap-y-2 w-[155px]'>
                   <img loading="lazy" className='w-10 h-10 object-contain mb-1 dark:invert' src={stat.imagePath} alt={stat.title}/>
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
