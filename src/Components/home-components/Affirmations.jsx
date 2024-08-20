import trophyIcon from "../../assets/Trophy.png";
import clientManagementIcon from "../../assets/user-icon.png";
import developmentSkillIcon from "../../assets/skill.png";
import Counter from "../common-components/Counter";

const affirmations = [
  {id:'awards', title:'Awards Won', value:6, countSpeed:200, imagePath:trophyIcon},
  {id:'yearsExperience', title:'Years Experience', value:8, countSpeed:200, imagePath:developmentSkillIcon},
  {id:'happyClients', title:'Happy Clients', value:78, countSpeed:20, imagePath:clientManagementIcon},
]

const Affirmations = () => {
    return (
    <div className="dark:text-white">
      <div className=" font-raleway font-semibold text-center text-primary dark:text-white">
        <p>Client Testimonials</p>
        <div className="font-extrabold  mb-10 pt-2 space-y-1">
          <p className="text-3xl lg:text-4xl uppercase">
            Resonating
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradientGreen to-gradientBlue">
              {" "}
              Affirmations
            </span>
          </p>
        </div>
      </div>
      <div
        className="w-[75%] font-montserrat flex flex-col sm:flex-row gap-9 items-center justify-between  max-w-[800px] mx-auto lg:mt-16 bg-green-30"
      >
        {affirmations?.map(stat=> (
          <div key={stat.id} className="flex flex-col items-center ">
            <img
              className="w-14 lg:w-20 dark:invert"
              src={stat.imagePath}
              alt={stat.id}
            />
            <p className="font-bold text-2xl lg:text-3xl mt-2 text-secondary">
              <Counter value={stat.value} countSpeed={stat.countSpeed} />+
            </p>
            <p className="font-semibold text-sm md:text-base">Awards Won</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Affirmations;
