

import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";


// const restaurantList = [
//  {
//   hello:1,

//  }
// ];


// const RestaurantCard = ({
//   name,
//   cuisines,
//   cloudinaryImageId,
//   lastMileTravelString,
// }) => {
//   const { user } = useContext(UserContext);
//   return (
//     <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
//       <img src={IMG_CDN_URL + cloudinaryImageId} />
//       <h2 className="font-bold text-xl">{name}</h2>
//       <h3>{cuisines.join(", ")}</h3>
//       <h4>{lastMileTravelString}</h4>
//       <h5 className="font-bold">
//         {user.name} - {user.email}
//       </h5>
//     </div>
//   );
// };







// const Body = () => {

  
//   const [allRestaurants, setAllRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const { user, setUser } = useContext(UserContext);

//   useEffect(() => {
//     getRestaurants();
//   }, []);

//   async function getRestaurants() {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//     setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//   }
//   if (!allRestaurants) return null;

//   return allRestaurants?.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <>
//       <div className="search-container p-5 bg-pink-50 my-5">
//         <input
//           data-testid="search-input"
//           type="text"
//           className="focus:bg-green-200 p-2 m-2"
//           placeholder="Search"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//           }}
//         />
//         <button
//           data-testid="search-btn"
//           className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
//           onClick={() => {
//             //need to filter the data
//             const data = filterData(searchText, allRestaurants);
//             // update the state - restaurants
//             setFilteredRestaurants(data);
//           }}
//         >
//           Search
//         </button>
//         <input
//           value={user.name}
//           onChange={(e) =>
//             setUser({
//               ...user,
//               name: e.target.value,
//             })
//           }
//         ></input>
//         <input
//           value={user.email}
//           onChange={(e) =>
//             setUser({
//               ...user,
//               email: e.target.value,
//             })
//           }
//         ></input>
//       </div>
//       <div className="flex flex-wrap " data-testid="res-list">
//         {/* You have to write logic for NO restraunt fount here */}
//         {filteredRestaurants.map((restaurant) => {
//           return (
//             <Link
              
//               to={"/restaurant/" + restaurant.data.id}
//               key={restaurant.data.id}
//             >
//               <RestaurantCard {...restaurant.data} />
//             </Link>
//           );
//         })}
//       </div>
//     </>
//   );
// };


const Body=()=>{
  return(
    <h1>hello</h1>
  )
}

export default Body;