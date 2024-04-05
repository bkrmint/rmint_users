import { copyright_sign, facebook, instagram, xtwitter } from "../assets/icons";
import { rmint_logo_white } from "../assets/images";

import { footer_mkplace } from "../constants"
import { socials } from "../constants"


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-center items-center px-6 py-6 md:py-8">
        <img src={rmint_logo_white} alt="rmint_logo_white" width={130}  />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-publicsans text-white font-bold text-xl">
          RMINT Marketplace
        </h2>
      <div className="flex justify-center content-center items-start flex-col lg:flex-row py-4 md:py-8">
        {footer_mkplace.map((item) => (
          <a key={item.id} href={item.url} className="flex flex-row justify-center font-publicsans items-center text-white px-6  py-2 lg:-mr-0.25 lg:text-md lg:font-semibold">
            <img src={item.iconUrl} alt={item.title} width={20} height={20} className="mr-2"/>
            <p className="text-xl ">{item.title}</p>
          </a>
        ))}
      </div>
      </div>
      <div className="flex justify-center items-center m-auto flex-row mt-6">
        {socials.map((item) => (
          <a key={item.id} href={item.url} className="flex flex-row justify-center px-2 lg:-mr-0.25">
            <img src={item.iconUrl} alt={item.title} width={30} height={30}/>
          </a>
        ))}
      </div>
      <div className="flex flex-col md:flow-row lg:flex-row justify-center items-center text-white/50 font-publicsans text-sm gap-6 px-6 py-6 md:py-8">
        <p>
          Privacy Policy
        </p>
        <div className="flex flex-row gap-1">
          <img src={copyright_sign}
          alt="copy_right"
          width={12}
          height={12}
          className="rounded-full m-0"
          />
          <p>RMINT 2024</p>
        </div>
        <p>
          Terms & Conditions
        </p>
      </div>

    </footer>
  )
}

export default Footer