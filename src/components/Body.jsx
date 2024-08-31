import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  // To create state variable
  // searchText is a local state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5415099&lng=73.7924769&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();
    // console.log(json);

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search m-4 p-4">
        <input
          type="text"
          className="border border-solid border-black"
          name="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-0.5 bg-green-200 m-4 rounded-lg"
          onClick={() => {
            // need to filter data
            const data = filterData(searchText, allRestaurants);

            // Update the state - restaurants>
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {/* Show No Restaurant found when search text does not match the filtered restaurants */}
        {filteredRestaurants.length ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.data.id}
              to={'/restaurant/' + restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          ))
        ) : (
          <h1>No restaurant found...</h1>
        )}
      </div>
    </>
  );
};
export default Body;
