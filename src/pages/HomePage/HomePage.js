import Categories from "./Categories";
import Discover from "./Discover";
import Hero from "./Hero";
import NewArrival from "./NewArrival";
import Stats from "./Stats";

const HomePage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4">
      <Hero />
      <Discover />
      <Categories />
      <NewArrival />
      <Stats />
    </main>
  );
};

export default HomePage;
