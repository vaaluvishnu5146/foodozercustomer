export async function getRestaurants() {
  try {
    const response = await fetch("http://localhost:5000/restaurant/");
    let data;
    if (response.status === 200) {
      data = await response.json();
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRestaurant(restaurantId = null) {
  if (!restaurantId) return;
  try {
    const response = await fetch(
      `http://localhost:5000/restaurant/${restaurantId}`
    );
    let data;
    if (response.status === 200) {
      data = await response.json();
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFoodForRestaurant(restaurantId = null) {
  if (!restaurantId) return;
  try {
    const response = await fetch(
      `http://localhost:5000/food/getFoods/${restaurantId}`
    );
    let data;
    if (response.status === 200) {
      data = await response.json();
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}
