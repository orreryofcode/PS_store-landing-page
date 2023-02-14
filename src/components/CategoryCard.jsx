import img from "../assets/imgs/game_art/wild-hearts.avif";

export function CategoryCard() {
  return (
    <div className='card card--lrg'>
      <img src={img} alt='' className='card__img ' />
    </div>
  );
}
