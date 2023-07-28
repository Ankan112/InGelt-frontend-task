import Banner from "../components/ui/Banner";
import Contact from "../components/ui/Contact";
import Navbar from "../components/ui/Navbar";
import Review from "../components/ui/Review";
import Service from "../components/ui/Service";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Service></Service>
      <Review></Review>
      <Contact></Contact>
    </>
  );
};

export default Home;
