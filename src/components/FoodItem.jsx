import { IMG_CDN_URL } from '../utils/constants';

const FoodItem = ({
  name,
  description,
  imageId,
  price
}) => {
  // const { name, cuisines, lastMileTravelString, cloudinaryImageId } =
  //   restaurant.data;
  return (
    <div className="m-4 p-4 w-[275px] bg-gray-200 rounded-xl hover:bg-gray-300">
      <img
        className="rounded-lg"
        src={IMG_CDN_URL + imageId}
        alt=""
      />
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h3>{description}</h3>
      <h4>₹{price/100}</h4>
    </div>
  );
};

export default FoodItem;
