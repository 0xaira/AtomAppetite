import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        className="w-full h-40 object-cover rounded-t-lg"
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <h5 className="text-sm text-gray-600 mb-1">{cuisines.join(", ")}</h5>
        <h5 className="text-sm text-gray-600 mb-1">{areaName}</h5>
        <div className="flex items-center">
          <h4
            className={
              avgRatingString < 4
                ? "bg-red-500 text-white rounded-full px-2 py-1 mr-2"
                : avgRatingString === "--"
                ? "bg-white text-black rounded-full px-2 py-1 mr-2"
                : "text-white rounded-full bg-green-500 px-2 py-1 mr-2"
            }
          >
            <i className="fas fa-star mr-1"></i>
            {avgRatingString}
          </h4>
          <h4 className="text-gray-600 mr-2">•</h4>
          <h4 className="text-gray-600 mr-2">
            {sla?.lastMileTravelString ?? "2.0 km"}
          </h4>
          <h4 className="text-gray-600">•</h4>
          <h4 className="text-gray-600">
            {costForTwo ?? "₹200 for two"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
