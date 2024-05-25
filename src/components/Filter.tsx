import { useContext } from 'react'
import { FilterStateContext } from '../context/FilterContext';
import FilterBtn from './FilterBtn';
import { deliveryTimes, priceRanges } from '@/lib/filterData';

interface Category {
  id: string;
  name: string;
  image_url: string;
}

interface FilterProps {
  categories: Array<Category>
}

export default function Filter({ categories }: FilterProps) {
  const {
    selectedCategories, setSelectedCategories,
    selectedTime, setSelectedTime,
    selectedPrice, setSelectedPrice
  } = useContext(FilterStateContext)

  return (
    <div className="hidden card lg:flex flex-col p-6 min-w-[239px] w-[239px] h-[764px]">
      <h2>Filter</h2>
      <p className="filter-label">FOOD CATEGORIES</p>
      <div className="flex flex-row flex-wrap gap-[10px]">
        {categories.map((category: any) => <FilterBtn key={category.id} label={category.name} onSelect={() => setSelectedCategories(category.id)} active={selectedCategories.includes(category.id)}/> )}
      </div>

      <p className="filter-label">DELIVERY TIME</p>
      <div className="flex flex-row flex-wrap gap-[10px]">
        {deliveryTimes.map((time: any) => (
          <FilterBtn key={time.name} label={time.name} onSelect={() => setSelectedTime(time)} active={selectedTime.map(st => st.id).includes(time.id)}/>
        ))}
      </div>

      <p className="filter-label">PRICE RANGE</p>
      <div className="flex flex-row flex-wrap gap-[10px]">
        {priceRanges.map((price: any) => <FilterBtn key={price} label={price} onSelect={() => setSelectedPrice(price)} active={selectedPrice.includes(price)}/> )}
      </div>
    </div>
  )
}


