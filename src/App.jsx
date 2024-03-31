import Nav from "./components/Nav";
import Create from "./sections/Create";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Signup from "./sections/Signup";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <main className="relative">
      <Nav />
        {/* <section className=" bg-peach xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section> */}
        <section className=" bg-light-peach ">
          <Create />
        </section>
        {/* <section className=" bg-peach xl:padding-l wide:padding-r padding-b">
          <Experience />
        </section>
        <section className=" bg-light-peach xl:padding-l wide:padding-r padding-b">
          <Signup />
        </section>
        <section className=" bg-black padding-x padding-t pb-8 pt-8">
          <Footer />
        </section> */}
    </main>
  );
};

export default App;

{/* <main className="relative">
      <Nav />
      <div className="snap-y snap-mandatory overflow-auto h-screen w-screen">
        <section className="snap-start h-screen bg-peach xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="snap-start h-screen bg-light-peach xl:padding-l wide:padding-r padding-b">
          <Create />
        </section>
        <section className="snap-start h-screen bg-peach xl:padding-l wide:padding-r padding-b">
          <Experience />
        </section>
        <section className="snap-start h-screen bg-light-peach xl:padding-l wide:padding-r padding-b">
          <Signup />
        </section>
        <section className="snap-start h-screen bg-black padding-x padding-t pb-8 pt-8">
          <Footer />
        </section>
      </div>
    </main> */}
