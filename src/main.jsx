import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, {githubInfoLoader} from "./components/Github/Github.jsx";

//Create an router using a method "CreateBrowserRouter":
//it takes all the list of object that required as an array

// METHOD 1 :
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "", // pathName
//         element: <Home />, //Required Element / Page
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// METHOD 2:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element ={<Layout />}> {/*Root of the Nesting*/}
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} /> {/*Here we create a userpath with parameter as "userid" */}
      
      <Route 
      loader={githubInfoLoader}
      path="github" 
      element={<Github />} />
    </Route>
  )
)  

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*It takes a prop to work*/}
    <RouterProvider router={router} />
  </StrictMode>
);
