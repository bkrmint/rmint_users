import { sunday, monday, tuesday, wednesday, thursday, friday, saturday, sunday_web, monday_web, tuesday_web, wednesday_web, thursday_web, friday_web, saturday_web } from "../assets/images";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Create = () => {
  const scrollRef = useRef(null);

  useGSAP(() => {
    const weekdays = gsap.utils.toArray(scrollRef.current.children);
    const container = scrollRef.current;
    const containerChild = container.children;
    console.log(weekdays);
    console.log(container);
    console.log(container.offsetWidth);
    console.log(containerChild);
    console.log("start & end:", self.start, self.end)

    gsap.to(weekdays, {
      xPercent: -100 * (weekdays.length - 1 ),
      ease: "none",
      scrollTrigger: {
        trigger: scrollRef.current,
        pin: true,
        scrub: true,
        markers: true,
        end: `+=${container.offsetWidth}`,
        onEnter: ({progress, direction, isActive, container}) => console.log("onEnter: ", progress, direction, isActive, container ),
        onLeave: ({progress, direction, isActive, container}) => console.log("onLeave: ", progress, direction, isActive, container )
      }
    });

  },{scope: scrollRef} );

  return (
    <section id="container" className="flex h-screen w-700" ref={scrollRef}>
      <div className=" w-screen flex flex-col justify-center items-center ">
        <div className="h-1/3 flex items-center justify-center">
          <h1 className="mt-6 font-publicsans xl:text-6xl lg:text-4xl md:text-4xl max-sm:text-[38px] max-sm:leading-none font-bold">
            <span className="font-kalam text-red xl:text-7xl lg:text-4xl md:text-4xl max-sm:text-[42px]">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
          </h1>
        </div>
        <div className="h-2/3 w-4/5 flex items-center justify-center">
          <img src={sunday} alt="sunday" />
        </div>
      </div>
      <div className=" w-screen flex flex-col justify-center items-center ">
        <div className="h-1/3 flex items-center justify-center">
          <h1 className="mt-6 font-publicsans xl:text-6xl lg:text-4xl md:text-4xl max-sm:text-[38px] max-sm:leading-none font-bold">
            <span className="font-kalam text-red xl:text-7xl lg:text-4xl md:text-4xl max-sm:text-[42px]">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
          </h1>
        </div>
        <div className="h-2/3 w-4/5 flex items-center justify-center">
          <img src={monday} alt="Sunday" />
        </div>
      </div>
      <div className=" w-screen flex flex-col justify-center items-center ">
        <div className="h-1/3 flex items-center justify-center">
          <h1 className="mt-6 font-publicsans xl:text-6xl lg:text-4xl md:text-4xl max-sm:text-[38px] max-sm:leading-none font-bold">
            <span className="font-kalam text-red xl:text-7xl lg:text-4xl md:text-4xl max-sm:text-[42px]">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
          </h1>
        </div>
        <div className="h-2/3  w-4/5 flex items-center justify-center">
          <img src={tuesday} alt="tuesday" />
        </div>
      </div>
      <div className=" w-screen flex flex-col justify-center items-center ">
        <div className="h-1/3 flex items-center justify-center">
          <h1 className="mt-6 font-publicsans xl:text-6xl lg:text-4xl md:text-4xl max-sm:text-[38px] max-sm:leading-none font-bold">
            <span className="font-kalam text-red xl:text-7xl lg:text-4xl md:text-4xl max-sm:text-[42px]">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
          </h1>
        </div>
        <div className="h-2/3 w-4/5 flex items-center justify-center">
          <img src={wednesday} alt="wednesday" />
        </div>
      </div>
      <div className=" w-screen flex flex-col justify-center items-center ">
        <div className="h-1/3 flex items-center justify-center">
          <h1 className="mt-6 font-publicsans xl:text-6xl lg:text-4xl md:text-4xl max-sm:text-[38px] max-sm:leading-none font-bold">
            <span className="font-kalam text-red xl:text-7xl lg:text-4xl md:text-4xl max-sm:text-[42px]">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
          </h1>
        </div>
        <div className="h-2/3 w-4/5 flex items-center justify-center">
          <img src={thursday} alt="thursday" />
        </div>
      </div>
      <div className=" w-screen flex flex-col justify-center items-center ">
        <div className="h-1/3 flex items-center justify-center">
          <h1 className="mt-6 font-publicsans xl:text-6xl lg:text-4xl md:text-4xl max-sm:text-[38px] max-sm:leading-none font-bold">
            <span className="font-kalam text-red xl:text-7xl lg:text-4xl md:text-4xl max-sm:text-[42px]">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
          </h1>
        </div>
        <div className="h-2/3 w-4/5 flex items-center justify-center">
          <img src={friday} alt="friday" />
        </div>
      </div>
      <div className=" w-screen flex flex-col justify-center items-center ">
        <div className="h-1/3 flex items-center justify-center">
          <h1 className="mt-6 font-publicsans xl:text-6xl lg:text-4xl md:text-4xl max-sm:text-[38px] max-sm:leading-none font-bold">
            <span className="font-kalam text-red xl:text-7xl lg:text-4xl md:text-4xl max-sm:text-[42px]">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
          </h1>
        </div>
        <div className="h-2/3  w-4/5 flex items-center justify-center">
          <img src={saturday} alt="saturday" />
        </div>
      </div>
    </section>
  )
}

export default Create