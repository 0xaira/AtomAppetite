import RestaurantCard from "./RestaurantCard";
import {restaurantlist} from "../utils/restaurantlist"
import { useState } from "react";

  const Body = () => {
    const [listofrestaurants, setlistofrestaurants] = useState(restaurantlist); 
    
    return (

      <>
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>{
          const filteredlist = listofrestaurants.filter((restaurant)=>restaurant.data.avgRating>4.2);
          setlistofrestaurants(filteredlist);
          console.log(filteredlist);
        }}
        
       > Filter Restaurant</button>


      <div className="flex-wrap flex justify-between mt-12 px-16">
        {listofrestaurants.map((restaurant) => {  // here restaurant is object of restaurantList array
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
      </>
    );
  };

  export default Body;




/*

if no dependency array in use effect, it will be called everytime the component is rendered
if empty dependency array in use effect, it will be called only once when the component is rendered

*/






 