import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Signup from "./sections/Signup";
import Hero from "./sections/Hero";
import Header from "./sections/Header";
import MobileCreate from "./sections/MobileCreate";
import WebCreate from "./sections/WebCreate";

const App = () => {
  
  return (
    <main className="relative">
      <Header />
      <section className="padding-t bg-peach xl:padding-l wide:padding-r ">
        <Hero />
      </section>
      <section className="max-sm:hidden padding-t bg-light-peach xl:padding-l wide:padding-r ">
        <WebCreate />
      </section>
      <section className="sm:hidden padding-t bg-light-peach xl:padding-l wide:padding-r ">
        <MobileCreate />
      </section>
      <section className=" padding-t bg-peach xl:padding-l wide:padding-r">
        <Experience />
      </section>
      <section className=" padding-t bg-light-peach xl:padding-l wide:padding-r">
        <Signup />
      </section>
      <section className=" bg-black padding-x padding-t pb-8 pt-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;

