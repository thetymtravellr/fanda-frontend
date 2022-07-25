import Footer from "../../components/Footer";
import Categories from "./Categories";
import Hero from "./Hero";
import NewArrival from "./NewArrival";
import Offer from "./Offer";
import Stats from "./Stats";
import Trending from "./Trending";

const HomePage = () => {
  return (
    <>
      <main className="w-full px-4">
        <Hero />
        <Trending />
        <NewArrival />
        <Offer />
        <Categories />
        <Stats />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
