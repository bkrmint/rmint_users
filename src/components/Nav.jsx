import { rmint_logo } from "../assets/images";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-center items-center max-container">
        <a href="/">
          <img 
            src={rmint_logo}
            alt="logo" 
            width="130"
          />
        </a>
      </nav>
    </header>
  )
}

export default Nav