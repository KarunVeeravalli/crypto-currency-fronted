import { legacy_createStore, combineReducers, compose, applyMiddleware, } from 'redux';
import { coinReducer } from '../Redux/Coins/reducer';
import { thunk } from 'redux-thunk';
import { authreducer } from '../Redux/auth/reducer'; 
import { userReducer } from '../Redux/User/reducer';
import { coinWalletReducer } from '../Redux/coinWallet/reducer';
import { cartReducer } from './cart/reducer';

let combineRed = combineReducers({
    coinReducer,authreducer,userReducer,coinWalletReducer,cartReducer
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

export const store = legacy_createStore(
    combineRed,
    composeEnhancers(applyMiddleware(thunk))
);
