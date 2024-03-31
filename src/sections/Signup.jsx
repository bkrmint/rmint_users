import Button from '../components/Button';

const Signup = () => {
  return (
    <section id="home" className="w-full flex justify-center item-center min-h-screen max-container">
      <div className="relative flex flex-col justify-center items-start w-full max-xl:padding-x pt-6 max-sm:pb-16">
        <h1 className="mt-6 font-publicsans xl:text-6xl lg:text-4xl md:text-4xl max-sm:text-[38px] max-sm:leading-none font-bold">
          Are you ready for<br /><span className="font-kalam text-red xl:text-7xl lg:text-4xl md:text-4xl max-sm:text-[42px]">taste-a-thon!</span>
        </h1>
        <h2 className="text-4xl text-gray font-publicsans font-bold max-sm:text-3xl text-center">
          Join our Restaurant Waitlist:
        </h2>
        <Button />
      </div>
    </section>
  )
}

export default Signup