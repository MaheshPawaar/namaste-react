import React from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
  const dispatch = useDispatch();

  // const handleAddItem = () => {
  //   dispatch(addItem('Four'));
  // };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cloudinaryImageId,
    areaName,
    city,
    avgRating,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { title, itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="flex">
      <div>
        <h2>{name}</h2>
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="Img" />
        <h3>{areaName}</h3>
        <h3>{city}</h3>
        <h3>{avgRating}</h3>
        <h4>{costForTwoMessage}</h4>
      </div>
      <div>
        <button
          className="p-2 m-5 bg-green-500"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button>
      </div>
      <div className="p-5">
        <h2>MENU</h2>
        <h2>{title}</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}{' '}
              -{' '}
              <button
                className="p-1 bg-green-100"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
