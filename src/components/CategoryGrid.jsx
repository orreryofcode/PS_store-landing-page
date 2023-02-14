import { CategoryCard } from "./CategoryCard";

export function CategoryGrid() {
  return (
    <div className='grid__container'>
      <div className='grid__wrapper'>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}
