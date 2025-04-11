import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const IndustriesMenu = ({sectionsMenu}) => {
    // eslint-disable-next-line react/prop-types
    const [visibleSection, setVisibleSection] = useState(sectionsMenu[0].id)
    const {id, pagename} = useParams()

    useEffect(() => {
        setVisibleSection(sectionsMenu[0].id)
    },[id, pagename])
 
    const scrollToSection = (sectionId)=> {
        const sectionElement = document.getElementById(sectionId)
        if(sectionElement){
            const marginTop = 170
            const scrollToY = sectionElement.getBoundingClientRect().top + window.scrollY  - marginTop
            window.scrollTo({top:scrollToY, behavior:'smooth'})
 
        }
       }
 
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                setVisibleSection(sectionId)
            }
        });
    };
 
    const viewportCenter = window.innerHeight/2
    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        // threshold: 0.6
        rootMargin: `-${viewportCenter}px 0px -${viewportCenter}px 0px`, // top, right, bottom, left
    });
 
useEffect(()=> {
        const sectionsToObserve = document.querySelectorAll('section');
        sectionsToObserve?.forEach(section => {
            observer.observe(section);
        });
 
    },[])
 
const scrollTabButtons = (tabId)=> {
    const tabButton = document.getElementById(tabId)
    const buttonBoundary = tabButton.getBoundingClientRect()
    const sectionTabsMenu = document.getElementById('sectionTabsMenu')
        if(buttonBoundary.left<0){
            sectionTabsMenu.scrollLeft -= (window.innerWidth/2)
        }else if(buttonBoundary.right>window.innerWidth){
            sectionTabsMenu.scrollLeft += (window.innerWidth/2)
        }
 
}
 
useEffect(()=> {
    // eslint-disable-next-line react/prop-types
    const activeSection = sectionsMenu.find(section=> section.id===visibleSection)
    scrollTabButtons(activeSection?.tabId)
 
},[visibleSection])
 
    return (
        <div className='font-raleway sticky top-[70px] z-10'>
            <div id='sectionTabsMenu' className='bg-[#EAF1FF] overflow-x-auto no-scrollbar'>
            <ul className='flex min-w-max gap-2 justify-between px-2 md:px-10 '>
                {/* eslint-disable-next-line react/prop-types */}
                {sectionsMenu?.map(section => (
                    <li key={section.tabId} id={section.tabId}>
                        <button className={`pb-3 pt-4 sm:pt-6 sm:pb-4 px-2 sm:px-3 border-b-[3px] sm:border-b-4 ${section.id===visibleSection ? 'border-secondary font-bold ': 'border-transparent font-medium'} text-black text-xs sm:text-sm lg:text-base`}
                            onClick={()=> scrollToSection(section.id, section.tabId)}
                            >{section.name}</button>
                    </li>
   
                ))}
            </ul>
            </div>
        </div>
      )
}
 
export default IndustriesMenu