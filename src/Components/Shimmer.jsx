import { shimmer_card_unit } from "../utils/constants";

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="bg-gray-200 rounded-md p-4 m-2 animate-pulse">
      <div className="h-40 w-full bg-gray-300 mb-4"></div>
      <div className="h-6 w-3/4 bg-gray-300 mb-2"></div>
      <div className="h-4 w-2/4 bg-gray-300 mb-2"></div>
      <div className="h-4 w-3/4 bg-gray-300"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {new Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;
