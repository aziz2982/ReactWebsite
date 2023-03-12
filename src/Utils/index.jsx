import About from "../Components/About";
import Furniture from "../Components/Furniture";
import Home from "../Components/Home";
import Servise from "../Components/Servise";

export const Utils = [
     {id:1, name: 'Home', path: '/home', element: <Home/> },
     {id:2, name: 'About', path: '/about', element: <About/> },
     {id:3, name: 'Service', path: '/service', element: <Servise/> },
     {id:4, name: 'Furniture', path: '/furniture', element: <Furniture/> },
]