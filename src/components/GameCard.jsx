export function GameCard({ title, img }) {
  return (
    <div className='card card--s'>
      <img src={`/game_art/${img}`} alt='' className='card__img ' />
      <h2>{title}</h2>
    </div>
  );
}
