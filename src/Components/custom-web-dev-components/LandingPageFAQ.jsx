import { useState } from "react"

const faqs = [
    {
      "id": 1,
      "title": "What is Custom Website Development?",
      "description": "Custom website development involves creating a website tailored specifically to your business needs and goals. Unlike template-based solutions, custom websites are designed from scratch, offering unique features, functionality, and branding."
    },
    {
      "id": 2,
      "title": "Why Should I Choose a Custom Website Over WordPress?",
      "description": "Custom websites offer unmatched flexibility, scalability, and personalization. They are designed to meet your exact requirements, align with your brand identity, and support future growth, unlike templates, which may limit functionality and customization options."
    },
    {
      "id": 3,
      "title": "How Long Does It Take to Build a Custom Website?",
      "description": "The timeline for a custom website depends on the project’s complexity and your requirements. Typically, it can take 4–12 weeks, including design, development, testing, and revisions."
    },
    {
      "id": 4,
      "title": "What Is Custom Website Development Cost Versus WordPress?",
      "description": "The cost varies depending on the size, features, and complexity of the website. Contact us for a free consultation, and we’ll provide a tailored quote for your project."
    },
    {
      "id": 5,
      "title": "Do You Offer Maintenance and Support After the Website Launch?",
      "description": "Yes, we provide ongoing support and maintenance services, including updates, bug fixes, and performance optimization, to ensure your website runs smoothly."
    },
    {
      "id": 6,
      "title": "How Do I Get Started?",
      "description": "Getting started is simple! Fill out our contact form or schedule a free consultation with our team. We’ll discuss your requirements, offer recommendations, and guide you through the next steps. Have more questions? Contact us today!"
    }
  ]
  
  

const LandingPageFAQ = () => {
    const [open, setOpen] = useState(null);

  const handleToggle = (id) => {
    setOpen(open === id ? null : id);
  };
  return (
    <div className="space-y-10 font-raleway p-10 md:max-w-[950px] md:w-[90%] mx-auto md:rounded-2xl bg-[#F7F9FC]">
        <p className="text-center font-semibold md:text-left   lg:text-4xl md:text-3xl text-2xl">FAQ&apos;s</p>
        <div className="space-y-5">
        {
            faqs.map((item) => (
                <div key={item?.id} className="bg-white cursor-pointer py-3 px-5 space-y-3 mx-auto rounded-2xl ">
                    <div className="flex justify-between gap-3 items-center" onClick={() => handleToggle(item.id)}>
                    <p className="font-semibold md:text-base text-sm">{item?.title}</p>
                    {open !== item.id ?
                    <svg onClick={() => handleToggle(item.id)} className="w-6 h-6 shrink-0 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clipRule="evenodd"/>
                    </svg> :
                    <svg onClick={() => handleToggle(item.id)} className="w-6 h-6 shrink-0 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clipRule="evenodd"/>
                    </svg>
                    }
                    </div>
                    {open === item.id && <p className="text-sm">{item.description}</p>}
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default LandingPageFAQ