import { DeliveryTime, PriceRange } from "@/types";

export const deliveryTimes: DeliveryTime[]  = [
  {id: 0, name: '0-10 min', min: 0, max: 10},
  {id: 1, name: '10-30 min', min: 10, max: 30},
  {id: 2, name: '30-60 min', min: 30, max: 60},
  {id: 3, name: '1 hour+', min: 60, max: 9999}
]

export const priceRanges: PriceRange[] = [
  '$',
  '$$',
  '$$$',
  '$$$$'
]