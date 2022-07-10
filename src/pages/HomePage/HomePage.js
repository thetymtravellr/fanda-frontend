import Categories from "./Categories";
import Discover from "./Discover";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4">
      <Hero />
      <Categories/>
      <Discover/>
    </main>
  );
};

export default HomePage;
