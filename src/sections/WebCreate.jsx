import { sunday, monday, tuesday, wednesday, thursday, friday, saturday } from "../assets/images";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WebCreate = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const weekdays = gsap.utils.toArray(scrollRef.current.children);
    const container = scrollRef.current;
    const containerChild = container.children;
    console.log("weekdays:", weekdays);
    console.log("containter element:", container);
    console.log("containter offset:", container.offsetHeight);
    console.log("container child:", containerChild);

    gsap.to(weekdays, {
      yPercent: -100 * (weekdays.length - 1 ),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current, // containerRef hook is used only here; rest is scrollRef
        pin: true,
        scrub: true,
        markers: true,
        end: `+=${container.offsetWidth}`,
        onEnter: ({progress, direction, isActive, container}) => console.log("onEnter: ", progress, direction, isActive, container ),
        onLeave: ({progress, direction, isActive, container}) => console.log("onLeave: ", progress, direction, isActive, container )
      }
    });

  }, [scrollRef, containerRef]);

  return (
    <section
      className="h-screen w-screen overflow-hidden flex flex-row flex-nowrap relative "
      ref={containerRef}
    >
      <div className="w-1/2 h-screen flex items-center justify-center">
        <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl leading-none font-bold">
          <span className="font-kalam text-red">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
        </h1>
      </div>
      <div className="flex flex-col w-1/2 h-700 " ref={scrollRef}>
        <div className=" h-screen flex justify-start items-center ">
            <img src={sunday} alt="sunday" />
        </div>
        <div className="h-screen flex justify-start items-center ">
            <img src={monday} alt="monday" />
        </div>
        <div className=" h-screen flex justify-start items-center">
            <img src={tuesday} alt="tuesday" />
        </div>
        <div className=" h-screen flex justify-start items-center ">
            <img src={wednesday} alt="wednesday" />
        </div>
        <div className=" h-screen flex justify-start items-center ">
            <img src={thursday} alt="thursday" />
        </div>
        <div className=" h-screen flex justify-start items-center ">
            <img src={friday} alt="friday" />
        </div>
        <div className=" h-screen flex justify-start items-center ">
            <img src={saturday} alt="saturday" />
        </div>
      </div>
    </section>
  )
}

export default WebCreate;
