// to create any html document:
// var h1 = document.createElement('h1');

// var root = document.querySelector("#root")
// h1.innerHTML = "Hello world"
// root.append(h1);

//-------------------------------------------------------------------------------------------------->
// Creating element using React CDN
var h1 = React.createElement('h1' , null, "Hello from  React"); //('Name' , property , "body or message")
// property => tag , attributes, id , class etc...

//-------------------------------------------------------------------------------------------------->

// here "ReactDOM" used form link react and our "real DOM"
// Select parent
var parent = document.querySelector("#parent");
// made the parent as ==> root
var root = ReactDOM.createRoot(parent);
// Then render "h1" in root
root.render(h1);


