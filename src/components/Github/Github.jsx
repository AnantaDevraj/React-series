import React from "react";
// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
// "useLoaderData" is hook that used for get the result from the Method that we created => githubInfoLoader 
    const data = useLoaderData(githubInfoLoader);

//   const [data, setData] = useState([]);
  //we use useEffect as the followers will show to user whene the page refresh
//   useEffect(() => {
//     fetch("https://api.github.com/users/AnantaDevraj")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         console.log(data);
//       });
//   }, []);

  return (
    <div className="flex flex-col items-center text-2xl m-4 p-4
     bg-gray-600 text-white rounded-lg shadow-lg">
  <div className="mb-4"> {/* Add margin-bottom for spacing */}
    Github Followers : {data.followers}
  </div>

  {/* Image is second and made rounded */}
  <img
    className="rounded-full object-cover" // Added 'rounded-full' for Tailwind, 'object-cover' for aspect ratio
    src={data.avatar_url}
    alt="Github Profile picture"
    width={200}
    height={200} // IMPORTANT: Set height equal to width for a perfect circle
  />
</div>

  );
};

export default Github;

// To more optimize this  , we will create a methid and call that method at the Route.
// It is a more optimize method  , which make the response smooth
// It actually store the data of the fetched API in cache so we dont need to fetch it again:
export const githubInfoLoader = async () =>{
   const res =  await fetch('https://api.github.com/users/AnantaDevraj')
   return res.json();
}
