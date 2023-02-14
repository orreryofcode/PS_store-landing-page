import { useFetchGames } from "../hooks/useFetchGames";
import { GameCard } from "./GameCard";

export function GamesCarousel({ type }) {
  const [gameData] = useFetchGames();

  return (
    // This desperately needs a refactor
    <>
      {type === "top" ? (
        <div className='grid__container'>
          <div className='grid__wrapper--carousel--heading'>
            <h2>Top 10 Games in your country</h2>
          </div>

          <div className='grid__wrapper grid__wrapper--carousel'>
            {gameData.map(
              (game, idx) =>
                game.top && (
                  <GameCard title={game.name} img={game.img} key={idx} />
                )
            )}
            <button className='carousel-btn'>&gt;</button>
          </div>
        </div>
      ) : type === "recent" ? (
        <div className='grid__container'>
          <div className='grid__wrapper--carousel--heading'>
            <h2>New Games</h2>
            <button className='btn btn-tertiary'>View All</button>
          </div>

          <div className='grid__wrapper grid__wrapper--carousel'>
            {gameData.map(
              (game, idx) =>
                game.recent && (
                  <GameCard title={game.name} img={game.img} key={idx} />
                )
            )}
            <button className='carousel-btn'>&gt;</button>
          </div>
        </div>
      ) : type === "unreleased" ? (
        <div className='grid__container'>
          <div className='grid__wrapper--carousel--heading'>
            <h2>Coming Soon</h2>
            <button className='btn btn-tertiary'>View All</button>
          </div>

          <div className='grid__wrapper grid__wrapper--carousel'>
            {gameData.map(
              (game, idx) =>
                game.unreleased && (
                  <GameCard title={game.name} img={game.img} key={idx} />
                )
            )}
            <button className='carousel-btn'>&gt;</button>
          </div>
        </div>
      ) : type === "demos" ? (
        <div className='grid__container'>
          <div className='grid__wrapper--carousel--heading'>
            <h2>Demos</h2>
            <button className='btn btn-tertiary'>View All</button>
          </div>

          <div className='grid__wrapper grid__wrapper--carousel'>
            {gameData.map(
              (game, idx) =>
                game.demo && (
                  <GameCard title={game.name} img={game.img} key={idx} />
                )
            )}
            <button className='carousel-btn'>&gt;</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
