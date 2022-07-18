import Categories from "./Categories";
import Hero from "./Hero";
import NewArrival from "./NewArrival";
import Offer from "./Offer";
import Stats from "./Stats";

const HomePage = () => {
  return (
    <main className="w-full px-4">
      <Hero/>
      <NewArrival />
      <Offer />
      <Categories />
      <Stats />
    </main>
  );
};

export default HomePage;
