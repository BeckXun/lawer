import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
// import mySaga from './sagas';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(mySaga);

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
