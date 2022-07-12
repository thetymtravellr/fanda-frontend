import Categories from "./Categories";
import Hero from "./Hero";
import NewArrival from "./NewArrival";
import Stats from "./Stats";

const HomePage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4">
      <Hero />
      <NewArrival />
      <Categories />
      <Stats />
    </main>
  );
};

export default HomePage;
