// import React , { useState } from 'react';
// import ParentComponent from './Parent_component';
//import Product from './Product';
//import Employee from './Employee';
//import Effect from './Effect';
// const product = {Product_name : "IQOO Mobile",
//   Product_price : "25000"};
// function App() {
//   return (
//     <Product product = {product} /> 
//   );
// }
// function App(){
//   return(
// <div style = {{ textAlign: 'left'}}>
//   <h1> Welcome to my React </h1>
//   <hr />
//   <ul>
//     <li> HTML </li>
//     <li> CSS </li>
//   </ul>
// </div>
//   );
// }
//function App(){
// const [empCount,setEmpCount] = useState(0);
//   const empCountHandler = (data) => { //1
//     setEmpCount(data);
//   }
//   return (
//     <div style={{ textAlign: 'left'}}>
//       <h1>Learning React </h1>
//       <hr color='red' />

//import ListUpdate from "./practicereact";

//       {/* <h3>Employee Registration - {empCount} </h3>
//       <h3>Total Registration - {empCount}</h3>

//       <hr />
//       <table width="100%">
//         <tr>
//           <td><Employee empCount = {empCount} empHandler={empCountHandler} /></td> // to get data from a child component we need a prop empHandler.
//         </tr>
//       </table> */}
//       <Effect />

//     </div>
//   );
// }

// export default App;

//Reach router
// import React from "react";
// import {Routes,Route ,BrowserRouter} from 'react-router-dom';
// import Home from './Home';
// import Products from './Products';
// import Cart from './Cart';

// function App() {
//     const inputRef = useRef(null);

//     function handleSubmit(event) {
//         event.preventDefault();
//         alert(`Name: ${inputRef.current.value}`);
//     }
//     return (
//         <div>
//             <h1>Learning React</h1>
//             <h3>Uncontrolled Component</h3>
//             <form onSubmit={handleSubmit}>
//                 <label>Name :</label>
//                 <input
//                     type="text"
//                     //name="name"
//                     ref={inputRef}
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default App;

// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "add":
//       return state + 1;
//     case "subtract":
//       return state - 1;
//     case "reset":
//       return 0;
//     default:
//       throw new Error("Unexpected action");
//   }
// };

// const App = () => {
//   // Initialising useReducer hook
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     // Instead of directly passing the string action ("add", "subtract", "reset"), you pass an object like { type: "add" } 
//     <div>
//       <h2>{count}</h2>
//       <button onClick={() => dispatch({ type: "add" })}> 
//         add
//       </button> 
//       <button onClick={() => dispatch({ type: "subtract" })}>
//         subtract
//       </button>
//       <button onClick={() => dispatch({ type: "reset" })}>
//         reset
//       </button>
//     </div>
//   );
// };

// function App(){
//      return(
// <ParentComponent /> //referring a component
//      )
//  }
// export default App;


//  function App() {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   return (
//     <>
//       <label>
//         Name{': '}
//         <input value={name} onChange={e => setName(e.target.value)} />
//       </label>
//       <label>
//         Address{': '}
//         <input value={address} onChange={e => setAddress(e.target.value)} />
//       </label>
//       <Greeting name={name} />
//     </>
//   );
// }

// export default App;
// const Greeting = memo (function Greeting({ name }) {
//   console.log("Greeting was rendered at", new Date().toLocaleTimeString());
//   return <h3>Hello{name && ', '}{name}!</h3>;
// });



// function App(){
// return(
//   <BrowserRouter>
//   <div>
//   <Routes>
//     <Route path = "/" element= {<Home/>}/>
//     <Route path = "/Products" element = {<Products/>}/>
//     <Route path = "/Cart"  element = {<Cart/>}/>
//   </Routes>
//   </div>
//   </BrowserRouter>
// )
// }
// export default App;


// function App(){
// return(
// <ListUpdate />
// )
// }
// export default App;


// Redux Example
//import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./actions";

// const App = () => {
//   // Using useSelector to read the counter from the Redux state
//   const counter = useSelector((state) => state.counter);

//   // Using useDispatch to dispatch actions
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Counter: {counter}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// };


// Authentication Lazy loading
// import React , {Suspense} from 'react';
// const MyComp = React.lazy(() => import('./Authentication'));

// function App() {
//     return (
//         <div>
//             <h1>Welcome to Lazy Loading!</h1>
//             <Suspense fallback={<div>Loading...</div>}>
//                 <MyComp />
//             </Suspense>
//         </div>
//     )
// }
// export default App;

//import React , {useState,useEffect} from "react";
// import Product1 from "./Product";

// const productInfo = [{Product_name : "IQOO Mobile",
//     Product_price : "25000"},
//     {Product_name : "Samsung Mobile",
//     Product_price : "15000"}];
// export default function App() {

//       return (
//         //console.log(productInfo.Product_name)
//         <Product1 product = {productInfo} /> 
//       );
//     }

// import React , {useState,useEffect} from 'react';
// import Extensions from './Project1_Extensions';
// export default function App(){
//     return(
//         <div>
//             <Extensions />
//         </div>
//     )
// }

//----------- QR Code Project -------------------------------//
import React from 'react';
import './Qr_style.css';
export default function App(){
return(

    <div className = "outer">
<div className = "inner1"> 
    <img src = "/Qr_code/image-qr-code.png" alt = "QR_code" />
    <a className  = "inner3" href = "https://www.frontendmentor.io/home" > https://www.frontendmentor.io/home </a>
</div>
<div className = "inner2">
    <div className = "para"><p><b>Improve your front-end skills by building projects </b></p> </div> 
    <div className = "para"><p> Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p></div>
    </div>
    </div>
)
}