import { useContext } from 'react'
import logo from '../../assets/Altumind logo-01.webp'
import watermark from '../../assets/Altumind watermark.webp'
import AltumindDark from '../../assets/AltumindDark.png'
import { ThemeContext } from '../../Layouts/AppLayout'
import darkwatermark from '../../assets/Altumind A watermark.webp'

const WatermarkLogo = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className='dark:bg-[#0d1015]'>
      <div className='w-[95%] flex sm:flex-row flex-col-reverse sm:justify-between gap-y-5 sm:items-end border-b-[0.6px] border-[#B8B5B5] pl-3 mx-auto'>
      <img src={theme === 'dark' ? AltumindDark : logo} alt="altumind" className="w-[180px] pb-3 cursor-pointer" />
        <img src={theme === 'dark' ? darkwatermark : watermark} alt='altumind' className='w-[300px]'/>
      </div>
    </div>
  )
}

export default WatermarkLogo