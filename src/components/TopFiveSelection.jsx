// import React from "react";

// const TopFiveSelection = () => {
//   return (
//     <div className="flex justify-center items-center">
//       <div className="flex flex-col items-center">
//         <h2 className="text-2xl mb-4 self-start">Your top 5 selections</h2>
//         <div className="flex justify-center">
//           {[...Array(5)].map((_, index) => (
//             <div
//               key={index}
//               className="w-16 h-24 border-dashed border-white border-2 mx-2"
//             ></div>
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-space ml-7">
//         <button
//           className="p-2 rounded font-bold text-black bg-yellow-600 cursor-pointer mb-4"
//           onClick={() => console.log("Next button clicked")}
//           style={{ width: "256px", height: "56px" }}
//         >
//           Next
//         </button>
//         <button
//           className="p-2 border border-white rounded text-white bg-transparent hover:bg-gray-800"
//           onClick={() => console.log("Skip button clicked")}
//           style={{ width: "256px", height: "56px" }}
//         >
//           Skip
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TopFiveSelection;

import React from "react";

const TopFiveSelection = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl mb-4 self-start">Your top 5 selections</h2>
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-16 h-24 border-dashed border-white border-2 mx-2"
            ></div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center ml-7 justify-between h-32">
        <button
          className="p-2 rounded font-bold text-black bg-yellow-600 cursor-pointer mb-4"
          onClick={() => console.log("Next button clicked")}
          style={{ width: "256px", height: "56px" }}
        >
          Next
        </button>
        <button
          className="p-2 border border-white rounded text-white bg-transparent hover:bg-gray-800"
          onClick={() => console.log("Skip button clicked")}
          style={{ width: "256px", height: "56px" }}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default TopFiveSelection;
