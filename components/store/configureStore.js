
// import { createStore, applyMiddleware, compose } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// // import Reactotron from '../config/ReactotronConfig';
// // import RootReducer from './reducers';
// // import { rootSaga } from './sagas';
// import Reactotron from '../config/ReactotronConfig';
// import RootReducer from './reducer'
// import rootSaga from './sagas'
// let store, persistor, persistConfig;

// persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     // blacklist: [],      //these reduce will not persist data
//     // whitelist: []         //these reduce will persist data
// };

// if (!__DEV__) {
//     // Middleware: Redux Saga
//     sagaMonitor = Reactotron.createSagaMonitor();

//     sagaMiddleware = createSagaMiddleware();
//     middleware = applyMiddleware(sagaMiddleware);
//     persistedReducer = persistReducer(persistConfig, RootReducer);
//     // Redux: Store
//     store = createStore(persistedReducer, middleware)
// } else {
//     sagaMonitor = Reactotron.createSagaMonitor();
//     sagaMiddleware = createSagaMiddleware({ sagaMonitor });
//     middleware = applyMiddleware(sagaMiddleware);
//     enhancer = compose(middleware, Reactotron.createEnhancer());
//     persistedReducer = persistReducer(persistConfig, RootReducer);
//     store = createStore(persistedReducer, enhancer)
// }

// sagaMiddleware.run(rootSaga);
// persistor = persistStore(store);

// export { store, persistor };
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from '../config/ReactotronConfig'
import RootReducer from './reducer';
import { rootSaga } from './sagas';

let store, persistor, persistConfig;

persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    // blacklist: [],      //these reduce will not persist data
    // whitelist: []         //these reduce will persist data
};

if (!__DEV__) {
    // Middleware: Redux Saga
    sagaMonitor = Reactotron.createSagaMonitor();

    sagaMiddleware = createSagaMiddleware();
    middleware = applyMiddleware(sagaMiddleware);
    persistedReducer = persistReducer(persistConfig, RootReducer);
    // Redux: Store
    store = createStore(persistedReducer, middleware)
} else {
    sagaMonitor = Reactotron.createSagaMonitor();
    sagaMiddleware = createSagaMiddleware({ sagaMonitor });
    middleware = applyMiddleware(sagaMiddleware);
    enhancer = compose(middleware, Reactotron.createEnhancer());
    persistedReducer = persistReducer(persistConfig, RootReducer);
    store = createStore(persistedReducer, enhancer)
}

sagaMiddleware.run(rootSaga);
persistor = persistStore(store);

export { store, persistor };
