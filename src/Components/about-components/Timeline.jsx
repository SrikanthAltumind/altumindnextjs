import AltumindLogo from '../../assets/Vector.png'

const Timeline = () => {
  return (
    <div className="w-[90%] mx-auto py-5"> 
    <div className='font-raleway text-center mx-auto max-w-[950px] mb-10 space-y-2'>
        <p className='font-semibold'>The Altumind Story</p>
        <p className='custom-gradient-text'>A Journey of TRY. FALL. CHANGE. RISE.</p>
        <p className='font-montserrat font-medium text-[13px]'>At Altumind, we embrace a philosophy of continuous evolution, recognizing that true growth emerges from a willingness to experiment, learn from setbacks, and adapt to an ever-changing landscape. Our journey is a testament to this ethos, marked by bold attempts, resilience in the face of challenges, and an unwavering commitment to progress.</p>
    </div>
        <div className="p-5  font-montserrat  before:content-[''] before:absolute before:top-0 before:bottom-0 sm:before:left-1/2 before:left-5 before:w-[1px] before:bg-black max-w-[1000px] relative mx-auto">
            <div className="p-5  relative w-full sm:w-[50%]  left-0 sm:left-[50%]">
<img className='w-10 h-10 object-contain border border-secondary absolute -left-[19px] p-[5px] bg-white rounded-full' src={AltumindLogo} alt='logo'/>
                <div className="text-[13px] space-y-1 ml-2 relative">
                    <p className='font-semibold'>From Scketch to Altumind</p>
                    <p>Founded in 2016 as &apos;Scketch,&apos; our initial focus was on Customer Experience (CX) and Product Engineering. Fueled by visionary leadership, a diverse client base, and expanding skill sets, we organically evolved into a multi-faceted organization. The 2020 rebranding to Altumind marked a strategic transformation, reflecting our expanded capabilities and ambitious vision. The need for a brand that embodied our evolution into a digital powerhouse gave birth to Altumind.</p>
                </div>
            </div>

            <div className="p-5  relative w-full sm:w-[50%] left-0">
<img className='w-10 h-10 object-contain border border-secondary absolute sm:-right-[21px] sm:left-auto -left-5 p-[5px] bg-white rounded-full' src={AltumindLogo} alt='logo'/>
                <div className="text-[13px] space-y-1 sm:mr-1 sm:ml-0 ml-2 relative">
                    <p className='font-semibold'>&apos;Altumind&apos; - The Name</p>
                    <p>&apos;Altumind,&apos; a fusion of &apos;Altum&apos; (Latin for &apos;high&apos; or &apos;deep&apos;) and &apos;Mind,&apos; perfectly embodies our aspirations. We strive to reach new heights in innovation, delve deeper into the complexities of the digital realm, and harness the power of human ingenuity to unlock limitless possibilities. This name Symbolizes our unwavering commitment to pushing boundaries and embracing the boundless potential of the human mind in the digital age.</p>
                </div>
            </div>

            <div className="p-5 relative w-full sm:w-[50%] left-0 sm:left-[50%]">
<img className='w-10 h-10 object-contain border border-secondary absolute -left-[19px] p-[5px] bg-white rounded-full' src={AltumindLogo} alt='logo'/>
                <div className="text-[13px] space-y-1 ml-2 relative">
                    <p className='font-semibold'>Rising to Challenges</p>
                    <p>Our journey hasn&apos;t been without its challenges. We&apos;ve encountered setbacks, faced market fluctuations, and navigated the complexities of a rapidly evolving industry. But true to our philosophy, we&apos;ve embraced these challenges as opportunities for growth. Each &apos;fall&apos; has been met with renewed determination, each &apos;change&apos; with adaptability, and each obstacle with a collective resolve to &apos;rise&apos; stronger. Our strong R&D focus ensures we remain at the forefront of innovation, while our team brings a deep understanding of human behavior to every project.</p>
                </div>
            </div>

            <div className="p-5 relative w-full sm:w-[50%] left-0">
<img className='w-10 h-10 object-contain border border-secondary absolute sm:-right-[21px] sm:left-auto -left-5 p-[5px] bg-white rounded-full' src={AltumindLogo} alt='logo'/>
                <div className="text-[13px] space-y-1 sm:mr-1 sm:ml-0 ml-2 relative">
                    <p className='font-semibold'>The Road Ahead: Charting New Frontiers</p>
                    <p>Our bold journey propels us towards a future brimming with opportunities. At Altumind, we firmly believe that the true power of technology lies in its seamless integration with human understanding. It&apos;s this synergy that will ignite groundbreaking innovation, craft meaningful experiences, and empower us to make a lasting, positive impact on the world.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timeline