import { user_section3_video, user_section3_gif } from "../assets/images";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full flex flex-col-reverse lg:flex-row justify-center min-h-screen max-container"
    >
      <div className="relative flex flex-col justify-center items-start w-full lg:w-1/2 max-xl:padding-x pt-6 max-sm:pb-16">
        <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-6xl max-sm:text-4xl max-sm:leading-none font-bold">
          <span className="font-kalam text-red">Experience</span>
          <br />
          Phygital
          <br />
          Flavors<span className="text-red">.</span>
        </h1>
        <h2 className="mt-6 xl:text-4xl lg:text-4xl md:text-4xl max-sm:text-3xl text-gray font-publicsans font-bold max-sm:leading-tight">
          From YouTube
          <br />
          To Your Plate
        </h2>
      </div>
      <div className="relative flex flex-1 justify-center items-center max-lg:py-40 max-sm:max-h-dvh max-sm:pt-28 max-sm:pb-0">
        <video autoPlay muted loop playsInline className="w-full">
          <source src={user_section3_video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Experience;
