import { IMG_CDN_URL } from '../utils/constants';

const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  // const { name, cuisines, lastMileTravelString, cloudinaryImageId } =
  //   restaurant.data;
  return (
    <div className="m-4 p-4 w-[275px] bg-gray-200 rounded-xl hover:bg-gray-300">
      <img
        className="rounded-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h3>{cuisines?.join(', ')}</h3>
      <h4>{lastMileTravelString} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
