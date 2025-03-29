import useFetchData from '../../Hooks/useFetchData'
import LoaderSpinner from '../common-components/LoaderSpinner'

const metricsData = [
    {
        title:'Cost Per Click (CPC)',
        description:'Measures the efficiency of your ad spend by calculating the exact amount invested for each user interaction. Lower CPC rates indicate more cost-effective campaigns that maximize your advertising budget.'
    },
    {
        title:'Cost Per Click (CPC)',
        description:'Measures the efficiency of your ad spend by calculating the exact amount invested for each user interaction. Lower CPC rates indicate more cost-effective campaigns that maximize your advertising budget.'
    },
    {
        title:'Cost Per Click (CPC)',
        description:'Measures the efficiency of your ad spend by calculating the exact amount invested for each user interaction. Lower CPC rates indicate more cost-effective campaigns that maximize your advertising budget.'
    },
    {
        title:'Cost Per Click (CPC)',
        description:'Measures the efficiency of your ad spend by calculating the exact amount invested for each user interaction. Lower CPC rates indicate more cost-effective campaigns that maximize your advertising budget.'
    },
    {
        title:'Return On Investment (ROI)',
        description:'Measures the overall performance of your marketing initiatives by comparing revenue generated against costs. A comprehensive ROI analysis reveals which strategies deliver the greatest business impact and deserve increased investment.'
    }
]

const PerformanceMetrics = () => {
    // const apiUrl = 'ADD_API_ENDPOINT'
    // const {data, isLoading, isError, error} = useFetchData('PerformanceMetrics', apiUrl)
    // const metricsData = data?.data?.data || []

    // if(isLoading){
    //     return <LoaderSpinner/>
    // }
    
    // if (isError) {
    //     return (
    //       <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
    //         {error?.message}
    //       </div>
    //     );
    // }
  return (
    <div className='w-[90%] mx-auto max-w-[800px] font-raleway'>
        <div className='text-center space-y-3'>
            <p className='custom-sub-heading'>Performance Metrics</p>
            <p className='custom-gradient-text'>Measurable Results for Optimized Marketing Campaigns</p>
        </div>
        <div className='mt-10 flex flex-col gap-6 max-w-[700px] mx-auto'>
            {metricsData?.map((data,index)=> (
                <div className='space-y-1'>
                    <p className='text-lg text-[#EA5D66] font-medium'>{index+1}.</p>
                    <p className='text-sm font-bold'>{data?.title}</p>
                    <p className='text-xs sm:text-sm font-medium'>{data?.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PerformanceMetrics