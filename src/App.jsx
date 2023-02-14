import { Navbar } from "./components/Navbar";
import { CategoryGrid } from "./components/CategoryGrid";
import { GamesCarousel } from "./components/GamesCarousel";
import { PromoBanner } from "./components/PromoBanner";
import { cards } from "./data/primarycards";
import { categories } from "./data/categories";
import { banners } from "./data/banners";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <PromoBanner banner={banners[0]} />
      <CategoryGrid cards={cards} />
      <GamesCarousel type={"top"} />
      <GamesCarousel type={"recent"} />
      <GamesCarousel type={"unreleased"} />
      <GamesCarousel type={"demos"} />
      <PromoBanner banner={banners[1]} />
      <PromoBanner banner={banners[2]} />
      <CategoryGrid cards={categories} heading={"See more"} />
    </div>
  );
}

export default App;
