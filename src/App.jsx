import { Navbar } from "./components/Navbar";
import { CategoryGrid } from "./components/CategoryGrid";
import { GamesCarousel } from "./components/GamesCarousel";
import { PromoBanner } from "./components/PromoBanner";
import { cards } from "./data/primarycards";
import { categories } from "./data/categories";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <PromoBanner />
      <CategoryGrid cards={cards} />
      <GamesCarousel type={"top"} />
      <GamesCarousel type={"recent"} />
      <GamesCarousel type={"unreleased"} />
      <GamesCarousel type={"demos"} />
      <PromoBanner />
      <PromoBanner />
      <CategoryGrid cards={categories} />
    </div>
  );
}

export default App;
