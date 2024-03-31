import { copyright_sign, facebook, instagram, xtwitter } from "../assets/icons";
import { rmint_logo_white } from "../assets/images";


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-center items-center gap-20">
        <img src={rmint_logo_white} alt="rmint_logo_white" width={130}  />
      </div>
      <div className="flex justify-center gap-5 mt-8 mb-8 ">
        <div className="flex bg-white w-10 h-10 rounded-full justify-center items-center">
          <img src={facebook} alt="facebook" width={20} height={20} />
        </div>
        <div className="flex bg-white w-10 h-10 rounded-full justify-center items-center">
          <img src={instagram} alt="facebook" width={20} height={20} />
        </div>
        <div className="flex bg-white w-10 h-10 rounded-full justify-center items-center">
          <img src={xtwitter} alt="facebook" width={20} height={20} />
        </div>
      </div>
      <div className="flex flex-1 justify-start items-center gap-2 font-publicsans">
        <img src={copyright_sign}
        alt="copy_right"
        width={20}
        height={20}
        className="rounded-full m-0"
        />
        <p className="text-white">Copyright. All rights reserved.</p>
      </div>
      <p className="flex flex-1 justify-start items-center gap-2 font-publicsans  text-white mt-2">
        Terms & Conditions
      </p>

    </footer>
  )
}

export default Footer