import Categories from "./Categories";
import Hero from "./Hero";
import Offer from "./Offer";
import Stats from "./Stats";
import Trending from "./Trending";

const HomePage = () => {
  return (
    <main className="w-full px-4">
      <Hero/>
      <Trending />
      <Offer />
      <Categories />
      <Stats />
    </main>
  );
};

export default HomePage;
