import { Navbar } from "./components/Navbar";
import { CategoryGrid } from "./components/CategoryGrid";
import { GamesCarousel } from "./components/GamesCarousel";
import { PromoBanner } from "./components/PromoBanner";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <PromoBanner />
      <CategoryGrid />
      <GamesCarousel />
      <GamesCarousel />
      <GamesCarousel />
      <GamesCarousel />
      <PromoBanner />
      <PromoBanner />
      <CategoryGrid />
    </div>
  );
}

export default App;
