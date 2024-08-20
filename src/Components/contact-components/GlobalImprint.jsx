import Counter from '../common-components/Counter'

const ourGlobalImprintsData = [
    {id:'years', title:'Years in Digital Transformation', value:8, countSpeed:200},
    {id:'clients', title:'Clients Served', value:55, countSpeed:20},
    {id:'innovations', title:'Innovations Delivered', value:97, countSpeed:20},
    {id:'industries', title:'Industries Revolutionized', value:12, countSpeed:200},
    {id:'digitalImpact', title:'Digital Impacts Across Continents', value:5, countSpeed:200},
  ]

const GlobalImprint = () => {
  return (
    <div className='bg-[#F3F9FF] py-10'>
        <div className='w-[95%] max-w-[800px] mx-auto'>
            <p className='text-2xl sm:text-3xl lg:text-4xl w-fit mx-auto font-extrabold font-raleway  text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue '>Our Global Imprint</p>
            <div  className='text-black mt-10 font-montserrat flex flex-wrap justify-center gap-y-10 gap-x-5 sm:gap-x-20 lg:gap-x-28'>
              {ourGlobalImprintsData?.map(stat=> (
                <div key={stat.id} className='text-center max-sm:basis-[45%] max-sm:first:basis-[100%] '>
                  <p className='text-2xl lg:text-3xl text-secondary font-bold mb-2'>
                    <Counter value={stat.value} countSpeed={stat.countSpeed} />+
                  </p>
                  <p className='font-medium text-xs lg:text-sm'>{stat.title}</p>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default GlobalImprint