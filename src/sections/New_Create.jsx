import { sunday, monday, tuesday, wednesday, thursday, friday, saturday, sunday_web, monday_web, tuesday_web, wednesday_web, thursday_web, friday_web, saturday_web } from "../assets/images";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Create = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {

    const weekdays = gsap.utils.toArray(sectionRef.current.children);

    gsap.fromTo(weekdays, {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0.5,
    }, {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 5,
      duration: 5,
      repeat: -1,
      // scrollTrigger: {
      //   trigger: sectionRef.current,
      //   start: "top 80%",
      //   end: "top 20%",
      //   markers: true,
      //   toggleActions: "play none none none"
      // },
    },
    )
  },{scope: sectionRef} );

    // weekdays.forEach((weekday, index) => {
    //   gsap.fromTo(weekday, {
    //     x: 0,
    //     y: 0,
    //     opacity: 0,
    //     scale: 0.5,
    //     stagger: 0.5
    //   }, {
    //     x: 0,
    //     y: 0,
    //     opacity: 1,
    //     scale: 1,
    //     duration: 5,
    //     scrollTrigger: {
    //       trigger: weekday,
    //       start: "top 80%",
    //       end: "top 20%",
    //       markers: true,
    //       toggleActions: "play none none none"
    //     }
    //   })
      
  //   });
  // },{scope: sectionRef} );

  return (
    <section className="h-screen w-screen flex flex-col" >
      <div className="max-sm:h-1/3 flex flex-1 items-center justify-center">
        <h1 className="mt-6 font-publicsans xl:text-6xl lg:text-4xl md:text-4xl max-sm:text-[38px] max-sm:leading-none font-bold">Create your own menus...</h1>
      </div>
      <div ref={sectionRef} className="max-sm:h-2/3 flex flex-1 flex-col items-center justify-center">
        <div className="absolute">
          <img src={sunday} alt="Sunday" />
        </div>
        <div className="absolute">
          <img src={monday} alt="monday" />
        </div>
        <div className="absolute">
          <img src={tuesday} alt="tuesday" />
        </div>
        <div className="absolute">
          <img src={wednesday} alt="wednesday" />
        </div>
    
      </div>
    </section>
  );
}

export default Create;