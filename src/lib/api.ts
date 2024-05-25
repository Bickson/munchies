const getHeaders = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
}

export async function fetchRestaurants() {
  const res = await fetch(`${process.env.API_URL}/restaurants`, {
    cache: 'no-cache',
    ...getHeaders
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function fetchFilter() {
  const res = await fetch(`${process.env.API_URL}/filter`, getHeaders);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function fetchRestaurantIsOpen(id: string) {
  const res = await fetch(`${process.env.API_URL}/open/${id}`, getHeaders);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function fetchRestaurantPriceRange(id: string) {
  const res = await fetch(`${process.env.API_URL}/price-range/${id}`, getHeaders);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}