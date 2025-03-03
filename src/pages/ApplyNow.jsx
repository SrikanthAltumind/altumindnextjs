

const ApplyNow = () => {
  return (
    <div className="w-[80%] mx-auto py-10">
        <form className="p-10 bg-slate-50 space-y-10">
            <p className="font-medium">Basic Info</p>
            <div className="flex gap-10">
            <input className="border-b-[1px] bg-transparent outline-none w-full border-black" type="text" placeholder="FirstName" />
            <input className="border-b-[1px] bg-transparent outline-none w-full border-black" type="text" placeholder="LastName" />
            </div>
            <div className="flex gap-10">
            <input className="border-b-[1px] bg-transparent outline-none w-full border-black" type="email" placeholder="Email" />
            <input className="border-b-[1px] bg-transparent outline-none w-full border-black" type="date" placeholder="D.O.B" />
            </div>
            <div className="flex gap-10">
            <input className=" basis-1/2 border-b-[1px] bg-transparent outline-none w-full border-black" type="text" placeholder="Phone" />
            <div className="flex gap-5 basis-1/2">
            <label className="flex items-center gap-2">
            <input type="radio" value="male" checked={true} />
                Male
            </label>
            <label className="flex items-center gap-2">
            <input type="radio" value="female" checked={true} />
                Female
            </label>
            </div>
            </div>
            <div className="flex gap-10">
            <input className="border-b-[1px] bg-transparent outline-none w-full border-black" type="text" placeholder="State" />
            <input className="border-b-[1px] bg-transparent outline-none w-full border-black" type="text" placeholder="Country" />
            </div>
           
            <p className="font-medium">Educational Details</p>
        
            <div className="flex gap-10">
            <input className="border-b-[1px] bg-transparent outline-none w-full border-black" type="text" placeholder="Highest Qualification" />
            <input className="border-b-[1px] bg-transparent outline-none w-full border-black" type="text" placeholder="year of passout" />
            </div>
           
            <p className="font-medium">Proffesional Details</p>
            <div className="flex gap-5 basis-1/2">
            <label className="flex items-center gap-2">
            <input type="radio" value="male" checked={true} />
                Fresher
            </label>
            <label className="flex items-center gap-2">
            <input type="radio" value="female" checked={true} />
                Experienced
            </label>
            </div>
            <div className="flex gap-10">
            <input className="border-b-[1px] bg-transparent outline-none w-full border-black" type="number" placeholder="years of experience" />
            <input className="border-b-[1px] bg-transparent outline-none w-full border-black" type="text" placeholder="Employer Name" />
            </div>
            <div className="flex gap-10">
            <input className="border-b-[1px] bg-transparent outline-none w-full border-black" type="text" placeholder="Current Role" />
            <input className="border-b-[1px] bg-transparent outline-none w-full border-black" type="text" placeholder="Notice Period" />
            </div>
            <p className="font-medium">Attachment Details</p>
            <div className="flex gap-10">
                <div className="w-full">
                <label>Resume</label>
                <input className="border-b-[1px] bg-transparent outline-none w-full border-black" type="file" placeholder="Resume" />
                </div>
                <div className="w-full">
                <label>Cover letter</label>
                <input className="border-b-[1px] bg-transparent outline-none w-full border-black" type="file" placeholder="Resume" />
                </div>
            </div>
            <p className="font-medium">Social Links</p>
            <input className="border-b-[1px] bg-transparent outline-none w-full border-black" type="text" placeholder="Linkedin" />

            <button className="py-3 px-5 rounded-md text-white bg-secondary">Submit</button>
        </form>
    </div>
  )
}

export default ApplyNow