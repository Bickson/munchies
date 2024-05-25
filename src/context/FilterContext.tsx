import { DeliveryTime, PriceRange } from '@/types';
import { createContext, useState } from 'react';

type FilterContextType = {
  selectedCategories: string[],
  setSelectedCategories: (category: string) => void,
  selectedTime: DeliveryTime[],
  setSelectedTime: ({}: DeliveryTime) => void,
  selectedPrice: PriceRange[],
  setSelectedPrice: (price: PriceRange) => void,
}

const FilterStateContext = createContext<FilterContextType>({
  selectedCategories: [],
  setSelectedCategories: () => {},
  selectedTime: [],
  setSelectedTime: () => {},
  selectedPrice: [],
  setSelectedPrice: () => {},
});

const FilterProvider = ({ children }) => {
  const [selectedCategories, _setSelectedCategories] = useState<string[]>([]);
  const [selectedTime, _setSelectedTime] = useState<DeliveryTime[]>([]);
  const [selectedPrice, _setSelectedPrice] = useState<PriceRange[]>([]);

  const setSelectedCategories = (category: string) => {
    if (selectedCategories.includes(category)) {
      _setSelectedCategories(selectedCategories.filter(selectedCategory => selectedCategory !== category))
    } else {
      _setSelectedCategories([...selectedCategories, category])
    }
  }

  const setSelectedTime = (time: {id: number, name: string, min: number, max: number }) => {
    if (selectedTime.map(st => st.id).includes(time.id)) {
      _setSelectedTime(selectedTime.filter(selectedTime => selectedTime.id !== time.id))
    } else {
      _setSelectedTime([...selectedTime, time])
    }
  }

  const setSelectedPrice = (price: PriceRange) => {
    if (selectedPrice.includes(price)) {
      _setSelectedPrice(selectedPrice.filter(selectedPrice => selectedPrice !== price))
    } else {
      _setSelectedPrice([...selectedPrice, price])
    }

  }

  return (
    <FilterStateContext.Provider value={{
      selectedCategories, setSelectedCategories,
      selectedTime, setSelectedTime,
      selectedPrice, setSelectedPrice
    }}>
      {children}
    </FilterStateContext.Provider>
  );
}

export { FilterProvider, FilterStateContext }