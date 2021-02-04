import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducers from "./reducers";
import rootSaga from "./sagas";

export type RootState = ReturnType<typeof rootReducers>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const composeEnhancers = (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const middleware = [
  sagaMiddleware,
];
const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducers, initialState, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
