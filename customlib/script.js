// how react actually works

import { Children } from "react";

const mainContainer = document.querySelector("#root");
const ReactElement = {
    type : 'a',
    props : {
        href: 'https://google.com',
        target : '_blank' 
    },
    Children: 'Click Here TO Visit Google.'
}


//            inject this     into this
//               ||             ||
customRender (ReactElement, mainContainer);

function customRender(ReactElement, container) {

    // modular version of the code 
    const domElement = document.createElement(ReactElement.type);

    domElement.innerHTML = ReactElement.Children

    for (let prop in props) {
        if (prop == Children) continue ;

        domElement.setAttribue
    }
    /*
    const domElement = document.createElement(ReactElement.type);

    domElement.innerHTML = ReactElement.Children;
    domElement.setAttribute('href' , ReactElement.props.href);
    domElement.setAttribute('target' , ReactElement.props.target);

    container.appendChild(domElement); */

}