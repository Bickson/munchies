import { useContext, useEffect, useState } from 'react';
import { FilterStateContext } from '../context/FilterContext';
import { PriceRange, Restaurant } from '../types';
import RestaurantCard from './RestaurantCard';

export default function Restaurants( { restaurants }: { restaurants: Restaurant[] }) {
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(restaurants)
  const { selectedCategories, selectedTime, selectedPrice } = useContext(FilterStateContext);

  useEffect(() => {
    if (!selectedCategories.length && !selectedTime.length && !selectedPrice.length) {
      setFilteredRestaurants(restaurants)
      return
    }

    // Restaurant should be in every filter for exclusive filtering
    const filtered = restaurants.filter((restaurant: Restaurant) => {
      // Filter categories
      if (selectedCategories.length > 0) {
        if (!restaurant.filter_ids.some(id => selectedCategories.includes(id))) {
          return false
        }
      }
      // Filter price
      if (selectedPrice.length > 0) {
        if (!selectedPrice.includes(restaurant.priceRange as PriceRange)) {
          return false
        }
      }
      if (selectedTime.length > 0) {
        // Cant deliver if closed
        if (!restaurant.isOpen) {
          return false
        }
        // Filter time
        let inTimeFilter = false
        selectedTime.forEach(time => {
          if (restaurant.delivery_time_minutes >= time.min && restaurant.delivery_time_minutes <= time.max) {
            inTimeFilter = true
          }
        })
        if (!inTimeFilter) {
          return false
        }
      }
      return true
    })

    setFilteredRestaurants(filtered)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTime, selectedCategories, selectedPrice])

  return (
    <div className="flex flex-col">
        <h1 className=" mt-10 mb-8">Restaurant’s</h1>
        {
          filteredRestaurants.length === 0
            ? <div className="flex flex-col justify-center items-center mt-12">
                <p className="text-[40px] leading-[40px] -tracking-[0.5px] text-black opacity-20">No restaurants in filter</p>
              </div>
            : <div className="flex flex-wrap flex-row gap-[10px] w-fit">
              {filteredRestaurants.map((restaurant: Restaurant) => <RestaurantCard key={restaurant.id} {...restaurant} /> )}
            </div>
        }
    </div>
  )

}