import React from 'react'
import Categories from '../components/Categories';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { Restaurant } from '../types';
import { fetchRestaurants, fetchFilter, fetchRestaurantPriceRange, fetchRestaurantIsOpen } from '../lib/api';
import Logo from '../components/Logo';
import { FilterProvider } from '../context/FilterContext';
import Filter from '../components/Filter';
import Restaurants from '../components/Restaurants';
import Overlay from '@/components/Overlay';

export const getServerSideProps: GetServerSideProps = async function ({ req, res }) {
  const restaurantsData = fetchRestaurants()
  const categoriesData = fetchFilter()

  const [restaurants, categories] = await Promise.all([restaurantsData, categoriesData])

  // This data should be included in all restaurants response
  const filledRest = await Promise.all(restaurants.restaurants.map(async (restaurant: Restaurant) => {
    const priceRange = await fetchRestaurantPriceRange(restaurant.price_range_id)
    const isOpen = await fetchRestaurantIsOpen(restaurant.id)
    return { ...restaurant, priceRange: priceRange?.range, isOpen: isOpen?.is_open }
  }))


  return {
    props: {
      restaurants: filledRest || [],
      categories: categories?.filters || [],
    },
  }
}

export default function Home({ restaurants, categories }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <FilterProvider>
      <div className="content">
        <div className="mt-10 mb-6 lg:mt-14 lg:mb-12">
          <Logo />
        </div>
        <div className="flex flex-row gap-5">
          <Filter categories={categories} />
          <div className="flex flex-col w-fit overflow-auto">
            <Categories categories={categories} />
            <Restaurants restaurants={restaurants} />
          </div>
        </div>
        <Overlay />
      </div>
    </FilterProvider>
  );
}
