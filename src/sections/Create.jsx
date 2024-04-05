import { sunday, monday, tuesday, wednesday, thursday, friday, saturday, sunday_web, monday_web, tuesday_web, wednesday_web, thursday_web, friday_web, saturday_web } from "../assets/images";

import { useRef } from "react";
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
      className="h-screen w-screen overflow-hidden flex-nowrap relative "
      ref={containerRef}
    >
      <div className=" flex h-screen w-700" ref={scrollRef}>
        <div className=" w-screen flex max-md:flex-col flex-row items-center ">
          <div className="max-md:h-2/5 max-md:items-end md:w-1/2 flex justify-center">
            <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl leading-none font-bold">
              <span className="font-kalam text-red">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
            </h1>
          </div>
          <div className="max-md:h-3/5 max-md:w-4/5 flex items-center justify-center">
            <img src={sunday} alt="sunday" />
          </div>
        </div>
        <div className=" w-screen flex max-md:flex-col flex-row items-center ">
          <div className="max-md:h-2/5 max-md:items-end md:w-1/2 flex justify-center">
            <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl leading-none font-bold">
              <span className="font-kalam text-red">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
            </h1>
          </div>
          <div className="max-md:h-3/5 max-md:w-4/5 flex items-center justify-center">
            <img src={monday} alt="monday" />
          </div>
        </div>
        <div className=" w-screen flex max-md:flex-col flex-row items-center ">
          <div className="max-md:h-2/5 max-md:items-end md:w-1/2 flex justify-center">
            <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl leading-none font-bold">
              <span className="font-kalam text-red">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
            </h1>
          </div>
          <div className="max-md:h-3/5 max-md:w-4/5 flex items-center justify-center">
            <img src={tuesday} alt="tuesday" />
          </div>
        </div>
        <div className=" w-screen flex max-md:flex-col flex-row items-center ">
          <div className="max-md:h-2/5 max-md:items-end md:w-1/2 flex justify-center">
            <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl leading-none font-bold">
              <span className="font-kalam text-red">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
            </h1>
          </div>
          <div className="max-md:h-3/5 max-md:w-4/5 flex items-center justify-center">
            <img src={wednesday} alt="wednesday" />
          </div>
        </div>
        <div className=" w-screen flex max-md:flex-col flex-row items-center ">
          <div className="max-md:h-2/5 max-md:items-end md:w-1/2 flex justify-center">
            <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl leading-none font-bold">
              <span className="font-kalam text-red">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
            </h1>
          </div>
          <div className="max-md:h-3/5 max-md:w-4/5 flex items-center justify-center">
            <img src={thursday} alt="thursday" />
          </div>
        </div>
        <div className=" w-screen flex max-md:flex-col flex-row items-center ">
          <div className="max-md:h-2/5 max-md:items-end md:w-1/2 flex justify-center">
            <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl leading-none font-bold">
              <span className="font-kalam text-red">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
            </h1>
          </div>
          <div className="max-md:h-3/5 max-md:w-4/5 flex items-center justify-center">
            <img src={friday} alt="friday" />
          </div>
        </div>
        <div className=" w-screen flex max-md:flex-col flex-row items-center ">
          <div className="max-md:h-2/5 max-md:items-end md:w-1/2 flex justify-center">
            <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl leading-none font-bold">
              <span className="font-kalam text-red">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
            </h1>
          </div>
          <div className="max-md:h-3/5 max-md:w-4/5 flex items-center justify-center">
            <img src={saturday} alt="saturday" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Create


{/* <div className=" w-screen flex flex-col justify-center items-center ">
<div className="h-2/5 flex items-center justify-center">
  <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl max-sm:leading-none font-bold">
    <span className="font-kalam text-red xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-[76]">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
  </h1>
</div>
<div className="h-3/5 w-4/5 flex items-center justify-center">
  <img src={monday} alt="Sunday" />
</div>
</div>
<div className=" w-screen flex flex-col justify-center items-center ">
<div className="h-2/5 flex items-center justify-center">
  <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl max-sm:leading-none font-bold">
    <span className="font-kalam text-red xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-[76]">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
  </h1>
</div>
<div className="h-3/5  w-4/5 flex items-center justify-center">
  <img src={tuesday} alt="tuesday" />
</div>
</div>
<div className=" w-screen flex flex-col justify-center items-center ">
<div className="h-2/5 flex items-center justify-center">
  <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl max-sm:leading-none font-bold">
    <span className="font-kalam text-red xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-[76]">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
  </h1>
</div>
<div className="h-3/5 w-4/5 flex items-center justify-center">
  <img src={wednesday} alt="wednesday" />
</div>
</div>
<div className=" w-screen flex flex-col justify-center items-center ">
<div className="h-2/5 flex items-center justify-center">
  <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl max-sm:leading-none font-bold">
    <span className="font-kalam text-red xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-[76]">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
  </h1>
</div>
<div className="h-3/5 w-4/5 flex items-center justify-center">
  <img src={thursday} alt="thursday" />
</div>
</div>
<div className=" w-screen flex flex-col justify-center items-center ">
<div className="h-2/5 flex items-center justify-center">
  <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl max-sm:leading-none font-bold">
    <span className="font-kalam text-red xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-[76]">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
  </h1>
</div>
<div className="h-3/5 w-4/5 flex items-center justify-center">
  <img src={friday} alt="friday" />
</div>
</div>
<div className=" w-screen flex flex-col justify-center items-center ">
<div className="h-2/5 flex items-center justify-center">
  <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl max-sm:leading-none font-bold">
    <span className="font-kalam text-red xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-[76]">Create</span><br/>your own<br/>menus<span className="text-red">...</span>
  </h1>
</div>
<div className="h-3/5  w-4/5 flex items-center justify-center">
  <img src={saturday} alt="saturday" />
</div>
</div> */}