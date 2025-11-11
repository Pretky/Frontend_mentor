import React from 'react';
import ReactDOM from 'react-dom/client';
// import {createRoot} from 'react-dom/client';
import App from './App'; 
// import {createStore} from 'redux';
// import { Provider } from "react-redux";
// import store from "./store";

//console.log("working");
//Example-1
//reducer
// function reducer1(state = 0, action){
//     if(action.type == "INCREMENT"){
//         return state += 1;
//     }
//     else if(action.type == "DECREMENT"){
//         return state -= 1;
//     }
//     return state;
// }

// //store;
// let store = createStore(reducer1);
// console.log(store.getState());
// store.dispatch({type : "INCREMENT"})
// console.log(store.getState());

//Example2
// function reducer2(state={name:"sowmiya"}, action){
//     if(action.type == "CHANGENAME"){
//         return {name:action.name}
//     }
// else if (action.type == "RESETNAME") {
//         return { name:"sowmiya" }
//       }
//       return state;
//     }
    
// let store = createStore(reducer2);
// console.log(store.getState());

// store.dispatch({ type: "CHANGENAME", name: "Lakshmi" })
// console.log(store.getState())

// store.dispatch({ type: "RESETNAME" })
// console.log(store.getState())


//Combine both reducers
//const r1 = 0; //instead of state = 0  above u can give state = r1
// const r2 = {name : "sowmiya"};
// function reducer(state = {r1,r2},action){
//     return(
//         re1: reducer1(state.r1,action),
//         re2: reducer2(state.r2,action)
//     )
// }
//the above method is difficult so directly a new function can be called like below

// let reducer = combineReducers({
//   re1:reducer1,
//   re2:reducer2
// })


const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);

// ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById("root")
//   );
