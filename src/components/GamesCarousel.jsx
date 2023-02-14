import { GameCard } from "./GameCard";

export function GamesCarousel() {
  return (
    <div className='grid__container'>
      <div className='grid__wrapper--carousel--heading'>
        <h2>Top 10 Games in your country</h2>
      </div>

      <div className='grid__wrapper grid__wrapper--carousel'>
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
}
