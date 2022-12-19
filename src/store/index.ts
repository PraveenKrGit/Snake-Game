// import{
//     createStore,
//     applyMiddleWare
// } from "redux";
// import createSagaMiddleware from "redux-saga";
// import gameReducer from "./reducers";
// import watcherSagas from "./store/saga";

// //to create saga middleware
// const sagaMiddleware = createSagaMiddleware();

// //connect it to our store by passing it as arguement
// //also passed gameReducer so that a reducer is mapped to our store
// const store = createStore(gameReducer, applyMiddleWare(sagaMiddleware));
            
// //run sagaMiddleware
// sagaMiddleware.run(watcherSagas);
// export default store;




import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import gameReducer from "./reducers";
import watcherSagas from "./saga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(gameReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSagas);
export default store;
