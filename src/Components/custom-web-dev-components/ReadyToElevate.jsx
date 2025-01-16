import { Link } from 'react-router-dom'

const ReadyToElevate = () => {
  return (
    <div className="bg-[#1D2737] text-white lg:px-20 md:px-10 px-5 py-16 font-raleway">
        <div className="space-y-5">
            <p className="font-bold sm:text-3xl text-2xl lg:text-4xl">Ready to Elevate Your Brand Presence?</p>
            <p className="md:max-w-[70%] font-light">Discover the power of a custom-designed website with Altumind, where innovation meets functionality, and human-centric design aligns with your business objectives. Partner with us to unlock a digital experience that captivates users and drives meaningful growth.</p>
            <Link to={"/contact"}><button className="bg-[#DD5143] mt-5 font-medium rounded-full px-6 py-2">Get Started</button></Link>
        </div>
    </div>
  )
}

export default ReadyToElevate