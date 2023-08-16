import Hepta from "./hepta";

const Timeline = () => {
  return (
    <div className="my-12 flex flex-col pr-[140px] md:pr-0 md:flex-row w-[95vw] lg:w-[80vw] items-center justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative">
            <Hepta />
            <h1 className="absolute -top-2 md:top-10 ml-12 md:ml-0 md:-left-16 w-[170px] mt-4 text-white mb-4 md:mb-0 md:text-xl lg:text-3xl mx-1 text-center md:text-center">Registration begins<br/>16th Aug 9:30 pm</h1>
          </div>
          <span className="border-l-2 md:border-b-2 w-1 h-16 md:h-auto md:w-[12vw] lg:w-[13vw] xl:w-[15vw] border-dashed border-blue-400"></span>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative">
            <Hepta />
            <h1 className="absolute -top-2 md:top-10 ml-12 md:ml-0 md:-left-16 w-[170px] mt-4 text-white mb-4 md:mb-0 md:text-xl lg:text-3xl mx-1 text-center md:text-center">Registration closes<br/>25th Aug 12 midnight </h1>
          </div>
          <span className="border-l-2 md:border-b-2 w-1 h-16 md:h-auto md:w-[12vw] lg:w-[13vw] xl:w-[15vw] border-dashed border-blue-400"></span>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative">
            <Hepta />
            <h1 className="absolute -top-2 md:top-10 ml-12 md:ml-0 md:-left-16 w-[170px] mt-4 text-white mb-4 md:mb-0 md:text-xl lg:text-3xl mx-1 text-center md:text-center"> Event starts<br/>27th Aug 10am</h1>
          </div>
          <span className="border-l-2 md:border-b-2 w-1 h-16 md:h-auto md:w-[12vw] lg:w-[13vw] xl:w-[15vw] border-dashed border-blue-400"></span>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative">
            <Hepta />
            <h1 className="absolute -top-2 md:top-10 ml-12 md:ml-0 md:-left-16 w-[170px] mt-4 text-white mb-4 md:mb-0 md:text-xl lg:text-3xl mx-1 text-center md:text-center">Winner <br/>announcement</h1>
          </div>
          <span className="border-l-2 md:border-b-2 w-1 h-16 md:h-auto md:w-[12vw] lg:w-[13vw] xl:w-[15vw] border-dashed border-blue-400"></span>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative">
            <Hepta />
            <h1 className="absolute -top-2 md:top-10 ml-12 md:ml-0 md:-left-16 w-[170px] mt-4 text-white mb-4 md:mb-0 md:text-xl lg:text-3xl mx-1 text-center md:text-center">Event ends<br/>27th Aug 4pm</h1>
          </div>
          <span className="hidden border-l-2 md:border-b-2 w-1 h-16 md:h-auto md:w-0 lg:w-[13vw] xl:w-[15vw] border-dashed border-blue-400"></span>
        </div>
    </div>

  )
};

export default Timeline;
