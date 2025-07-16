
function customRender(reactElement , container){
    /*
    IT IS WORKING BUT IT IS STILL WRONG :
    // first create an element:
    const domElement = document.createElement(reactElement.type)
    // what should be inside the element:
    domElement.innerHTML = reactElement.children
    //Then set it's attribute : 
    domElement.setAttribute('href' , reactElement.props.href)
    domElement.setAttribute('target' , reactElement.props.target)

    //then append that element into the container:
    container.appendChild(domElement);
    */
   // what if there are multiple prop:

   const domElement = document.createElement(reactElement.type);
   domElement.innerHTML = reactElement.children

   for(const prop in reactElement.props){
    if(prop === 'children') continue;
    domElement.setAttribute( prop , reactElement.props[prop]);
   }
 
   container.appendChild(domElement);
}

// Create a object as reactElement:
const reactElement = {
    type :'a',
    props : {
        href : 'https://google.com',
        target : '_blank',
    },
    children : 'Click on me to visit Google !'

}

const mainContainer =  document.querySelector('#root');

customRender(reactElement , mainContainer); // we are trying to render our reactElement in mainContainer