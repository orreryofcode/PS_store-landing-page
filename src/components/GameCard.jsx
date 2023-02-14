export function GameCard({ title, img, platforms }) {
  return (
    <div className='card card--s'>
      <img src={`/game_art/${img}`} alt='' className='card__img' />
      <h2>{title}</h2>
      {platforms &&
        platforms.map((platform) => (
          <span className='card__badge'>{platform}</span>
        ))}
    </div>
  );
}
