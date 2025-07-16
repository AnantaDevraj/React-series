import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function MyApp() {
  return (
    <div>
      <h1>Hello Guys!!!!</h1>
    </div>
  );
}

const reactElement = {
    type :'a',
    props : {
        href : 'https://google.com',
        target : '_blanck',
    },
    children : 'Click on me to visit Google !',
}

const anotherUser = "Learn react";

// Special Method to create Element that work in react :=========================>
//it will directly injected  , using "bable Method"
const ReactElement = React.createElement(
  'a', /* type */
  {href : 'https//:google.com' , target :'_blank'}, /* Properties or Attribute , if there is  no attribute then just leave it empty {}*/
  'Click on me to visit',/*children*/
  anotherUser , /*Evaluated expression */
)
//===================================================================================>
const AnotherElement = (
  <a href="https//:google.com" target = "_blank"> Click on Me</a>
)

//It create a root by selecting the id = "root" that created in index.html file =>
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // MyApp() ===> It will work as React is eventually Javascript only , but it is not a good practice
  // reactElement  {/* It will not work as it has its own implementation with a custom Render method */}
 // Special Method ===> 
  // ReactElement
);
