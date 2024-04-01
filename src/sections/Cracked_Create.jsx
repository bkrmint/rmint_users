import {
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday_web,
  monday_web,
  tuesday_web,
  wednesday_web,
  thursday_web,
  friday_web,
  saturday_web,
} from "../assets/images";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Create = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const weekdays = gsap.utils.toArray(scrollRef.current.children);
    const container = scrollRef.current;
    const containerChild = scrollRef.current.children;
    console.log(weekdays);
    console.log("containter element:", container);
    console.log("containter offset:", container.offsetWidth);
    console.log("container child:", containerChild);
    console.log("weekdays:", weekdays);
    console.log("start & end:", self.start, self.end);

    gsap.to(weekdays, {
      xPercent: -100 * (weekdays.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: true,
        markers: true,
        end: `+=${container.offsetWidth}`,
        toggleClass: "active",
        onEnter: ({ progress, direction, isActive, container }) =>
          console.log("onEnter: ", progress, direction, isActive, container),
        onLeave: ({ progress, direction, isActive, container }) =>
          console.log("onLeave: ", progress, direction, isActive, container),
      },
    });
  }, [scrollRef, containerRef]);

  return (
    <section
      className="h-screen w-screen overflow-hidden flex-nowrap relative "
      ref={containerRef}
    >
      <div className=" flex h-screen w-700" ref={scrollRef}>
        <div
          id="sunday"
          className=" w-4/5 h-4/5 flex items-center justify-center"
        >
          <img src={sunday} alt="sunday" />
        </div>
        <div className="  w-4/5 h-4/5 flex items-center justify-center">
          <img src={monday} alt="monday" />
        </div>
        <div className="  w-4/5 h-4/5 flex items-center justify-center">
          <img src={tuesday} alt="tuesday" />
        </div>
        <div className=" w-4/5 h-4/5 flex items-center justify-center">
          <img src={wednesday} alt="wednesday" />
        </div>
        <div className=" w-4/5 h-4/5 flex items-center justify-center">
          <img src={thursday} alt="thursday" />
        </div>
        <div className=" w-4/5 h-4/5 flex items-center justify-center">
          <img src={friday} alt="friday" />
        </div>
        <div className=" w-4/5 h-4/5 flex items-center justify-center">
          <img src={saturday} alt="saturday" />
        </div>
      </div>
    </section>
  );
};

export default Create;
