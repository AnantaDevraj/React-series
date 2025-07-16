import React from "react";

const Card = ({ name , btn = "click me"}) => {
    // We can pass multiple properties and  , give them default value 
    // Here the default value of btn is  "click me".
  // We can also use {props name } instead of props directly
  // console.log(Obj);
  // we can pass value form one component  to different compnent , using props
  return (
    <>
      <div
        className="flex flex-col rounded-xl  p-4"
        style={{
          border: "0.88px solid",

          backdropFilter: "saturate(180%) blur(14px)",
          background: " #ffffff0d",
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">
              Hello from TailwindCSS | {name}
            </h1>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            {btn}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
