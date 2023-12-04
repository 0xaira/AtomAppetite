import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from '../utils/constants';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  
  // Simulate shimmer effect with Tailwind CSS
  const MenuShimmer = () => (
    <div className="animate-pulse bg-gray-200 rounded-md p-4 mb-4">
      <div className="h-6 w-3/4 bg-gray-300 mb-2"></div>
      <div className="h-4 bg-gray-300 mb-2"></div>
      <div className="h-4 w-1/2 bg-gray-300 mb-2"></div>
      <div className="h-12 w-20 bg-gray-300"></div>
    </div>
  );

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resId);
      const json = await response.json();

      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find(
            (x) => x && x['@type'] === RESTAURANT_TYPE_KEY
          )?.card?.info || null;
      setRestaurant(restaurantData);

      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.map((x) => x.card?.card)
          ?.filter((x) => x['@type'] === MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          ?.map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
  <div className="restaurant-summary">
    <img
      className="restaurant-img"
      src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
      alt={restaurant?.name}
    />
    <div className="restaurant-summary-details">
      <h2 className="restaurant-title">{restaurant?.name}</h2>
      <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
      <div className="restaurant-details">
        <div
          className={`restaurant-rating ${
            restaurant?.avgRating < 4
              ? "bg-red-300"
              : restaurant?.avgRating === "--"
              ? "bg-white text-black"
              : "text-white"
          }`}
        >
          <i className="fa-solid fa-star"></i>
          <span>{restaurant?.avgRating}</span>
        </div>
        <div className="restaurant-rating-slash">|</div>
        <div>{restaurant?.sla?.slaString}</div>
        <div className="restaurant-rating-slash">|</div>
        <div>{restaurant?.costForTwoMessage}</div>
      </div>
    </div>
  </div>

  <div className="restaurant-menu-content">
    <div className="menu-items-container">
      <div className="menu-title-wrap">
        <h3 className="menu-title">Recommended</h3>
        <p className="menu-count">{menuItems.length} ITEMS</p>
      </div>
      <div className="menu-items-list">
        {menuItems.map((item) => (
          <div className="menu-item" key={item?.id}>
            <div className="menu-item-details">
              <h3 className="item-title">{item?.name}</h3>
              <p className="item-cost">
                {item?.price > 0
                  ? new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(item?.price / 100)
                  : " "}
              </p>
              <p className="item-desc">{item?.description}</p>
            </div>
            <div className="menu-img-wrapper">
              {item?.imageId && (
                <img
                  className="menu-item-img"
                  src={ITEM_IMG_CDN_URL + item?.imageId}
                  alt={item?.name}
                />
              )}
              <button className="add-btn"> ADD +</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default RestaurantMenu;
