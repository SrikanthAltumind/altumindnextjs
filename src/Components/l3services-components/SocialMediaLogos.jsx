import LoaderSpinner from '../common-components/LoaderSpinner'
import useFetchData from '../../CustomHooks/useFetchData'

const SocialMediaLogos = () => {
    const apiUrl = 'api/service-expertise-contents/1?populate=*'

const {data, isLoading, isError, error} = useFetchData('social-media-logos', apiUrl)
const expertiseData = data?.data?.data || {}

if(isLoading){
  return <LoaderSpinner/>
}

if (isError) {
  return (
      <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
      {error?.message}
      </div>
  );
  }

  return (
    <div className='w-[90%] mx-auto font-raleway dark:text-white'>
        <div className='text-center space-y-3 mb-14 max-w-[750px] mx-auto'>
            <h2 className='custom-sub-heading'>{expertiseData?.attributes?.title}</h2>
            <p className='custom-gradient-text'>{expertiseData?.attributes?.heading}</p>
            {
              expertiseData?.attributes?.description && 
              <p className='text-[13px] font-medium'>{expertiseData?.attributes?.description}</p>
            }
        </div>
        <div className='max-w-[300px] sm:max-w-[450px] mx-auto flex flex-wrap items-center justify-center gap-10 lg:gap-14'>
            {expertiseData?.attributes?.images?.data.map(logo=> 
                <div key={logo}>
                    <img className='w-[38px] sm:w-[60px]' loading='lazy' src={logo?.attributes?.url} alt={logo?.attributes?.name}/>
                </div>
            )}
        </div>
    </div>
  )
}

export default SocialMediaLogos