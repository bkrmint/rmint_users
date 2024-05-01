import { sunday, monday, tuesday, wednesday, thursday, friday, saturday } from "../assets/images";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MobileCreate = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const weekdays = gsap.utils.toArray(scrollRef.current.children);
    const container = scrollRef.current;
    const containerChild = container.children;
    console.log("weekdays:", weekdays);
    console.log("containter element:", container);
    console.log("containter offset:", container.offsetWidth);
    console.log("container child:", containerChild);

    gsap.to(weekdays, {
      xPercent: -100 * (weekdays.length - 1 ),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current, // containerRef hook is used only here; rest is scrollRef
        pin: true,
        scrub: true,
        // markers: true,
        end: `+=${container.offsetWidth}`,
        onEnter: ({progress, direction, isActive, container}) => console.log("onEnter: ", progress, direction, isActive, container ),
        onLeave: ({progress, direction, isActive, container}) => console.log("onLeave: ", progress, direction, isActive, container )
      }
    });

  }, [scrollRef, containerRef]);

  return (
    <section
      className="h-screen w-screen overflow-hidden flex flex-col flex-nowrap relative "
      ref={containerRef}
    >
      <div className="h-1/3 flex justify-center items-center">
        <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl leading-none font-bold">
          <span className="font-kalam text-red">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
        </h1>
      </div>
      <div className=" flex h-2/3 w-700" ref={scrollRef}>
        <div className=" w-screen flex justify-center items-center ">
          <img src={sunday} alt="sunday"  className="w-4/5"/>
        </div>
        <div className=" w-screen flex justify-center items-center">
          <img src={monday} alt="monday" className="w-4/5" />
        </div>
        <div className=" w-screen flex justify-center items-center ">
          <img src={tuesday} alt="tuesday" className="w-4/5" />
        </div>
        <div className="w-screen flex justify-center items-center ">
          <img src={wednesday} alt="wednesday" className="w-4/5" />
        </div>
        <div className="w-screen flex justify-center items-center ">
          <img src={thursday} alt="thursday" className="w-4/5" />
        </div>
        <div className=" w-screen flex justify-center items-center ">
          <img src={friday} alt="friday" className="w-4/5" />
        </div>
        <div className=" w-screen flex justify-center items-center ">
          <img src={saturday} alt="saturday" className="w-4/5" />
        </div>
      </div>
    </section>
  )
}

export default MobileCreate;


