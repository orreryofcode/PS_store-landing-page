import { CategoryCard } from "./CategoryCard";

export function CategoryGrid({ cards }) {
  return (
    <div className='grid__container'>
      <div className='grid__wrapper'>
        {cards &&
          cards.map((card, idx) => <CategoryCard img={card} key={idx} />)}
      </div>
    </div>
  );
}
