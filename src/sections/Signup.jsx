import Button from '../components/Button';

const Signup = () => {
  return (
    <section id="home" className="w-full min-h-screen max-container flex flex-col item-center justify-center">
      <div className="relative flex flex-col justify-center items-center max-xl:padding-x pt-6 max-sm:pb-16">
        <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-5xl max-sm:text-4xl max-sm:leading-none font-bold text-center text-balance">
          Are you ready<br/>for<br /><span className="font-kalam text-red">taste-a-thon!</span>
        </h1>
        <h2 className="mt-8 xl:text-3xl lg:text-3xl md:text-3xl max-sm:text-3xl text-gray font-publicsans font-bold text-center">
          Join the restaurant waitlist:
        </h2>
        <Button className="px-7 py-4 border font-publicsans text-lg leading-none bg-red rounded text-white border-red font-bold cursor-pointer">
          Get in
        </Button>
      </div>
    </section>
  )
}

export default Signup