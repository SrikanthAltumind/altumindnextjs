import AltumindLogo from '../../assets/Vector.png'

const Loader = () => {

  return (
    <div className='fixed top-0 w-full h-[100vh] bg-black bg-opacity-80  flex justify-center items-center '>
        <img className='w-24 animate-pulse drop-shadow-lg' src={AltumindLogo} alt='logo'/>
    </div>
  )
}

export default Loader