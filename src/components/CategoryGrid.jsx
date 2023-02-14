import { CategoryCard } from "./CategoryCard";

export function CategoryGrid({ cards, heading }) {
  return (
    <div className='grid__container'>
      <div className='grid__heading'>
        <h2>{heading}</h2>
      </div>

      <div className='grid__wrapper'>
        {cards &&
          cards.map((card, idx) => <CategoryCard img={card} key={idx} />)}
      </div>
    </div>
  );
}
