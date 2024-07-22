

const Search = () => {
  return (
    <section className="w-[90%] dark:text-white mx-auto py-24">
        <div className="flex gap-3 p-2 border border-[#CCCCCC] rounded-full max-w-[950px] mx-auto">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
</svg>
            <input className="outline-none w-full bg-transparent tracking-wider font-montserrat" type="text" placeholder="Search for jobs..." />
        </div>
    </section>
  )
}

export default Search