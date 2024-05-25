import { useContext } from "react";
import Image from "next/image";
import { FilterStateContext } from "@/context/FilterContext";
import FilterBtn from "./FilterBtn";

interface Category {
  id: string;
  name: string;
  image_url: string;
}

interface CategoryProps {
  categories: Array<Category>
}

export default function Categories({ categories = [] }: CategoryProps) {
  const { selectedCategories, setSelectedCategories, selectedTime, setSelectedTime } = useContext(FilterStateContext)

  return (
    <>
      <div className="flex flex-col lg:hidden ">
        <p className="filter-label !mt-0 !mb-[10px]">FOOD CATEGORIES</p>
        <div className="flex flex-row flex-wrap gap-[10px] mb-6">
          {[{id: 0, name: '0-10 min', min: 0, max: 10},{id: 1, name: '10-30 min', min: 10, max: 30},{id: 2, name: '30-60 min', min: 30, max: 60},{id: 3, name: '1 hour+', min: 60, max: 9999}].map((time: any) => (
            <FilterBtn key={time.name} label={time.name} onSelect={() => setSelectedTime(time)} active={selectedTime.map(st => st.id).includes(time.id)}/>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-[10px] max-w-full overflow-x-scroll overflow-hidden">
        {categories.map((category: any) => {
          return (
            <div onClick={() => setSelectedCategories(category.id)} key={category.id} className={`card flex flex-row justify-between min-w-40 cursor-pointer ${selectedCategories.includes(category.id) ? 'border-green shadow-md' : ''}`}>
              <p className="pl-3 pt-4">{category.name}</p>
              <Image src={process.env.NEXT_PUBLIC_BASE_URL + category.image_url} alt={category.name} width={80} height={80} />
            </div>
          )
        })}
      </div>
    </>
  )
}
