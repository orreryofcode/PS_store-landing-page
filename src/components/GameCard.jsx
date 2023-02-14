import img from "../assets/imgs/game_art/wild-hearts.avif";

export function GameCard() {
  return (
    <div className='card card--s'>
      <img src={img} alt='' className='card__img ' />
    </div>
  );
}
