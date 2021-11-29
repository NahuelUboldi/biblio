///////////////////////////////////////////
// BASIC REDUX SETUP
///////////////////////////////////////////

//USE CONST FOR ACTION TYPES (optional)
//common practice. If not set the string directly into the action
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// 1 - CREATE DEFAULT STATE
const defaultState = {
  login: false,
};

// 2 - CREATE REDUCER
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, login: true };
    case LOGOUT:
      return { ...state, login: false };
    default:
      return state;
  }
};

// 3 - CREATE REDUX STORE
//the folowing lines are equivalent
const store = Redux.createStore(reducer);
const store = Redux.createStore((state = 5) => state);

// 4 - DEFINE A REDUX ACTION
const action = {
  type: 'ACTION',
};
const loginUser = {
  type: LOGIN,
};
const logoutUser = {
  type: LOGOUT,
};

// 5 - DEFINE AN ACTION CREATOR
// An action creator is simply a JavaScript function that returns an action
const actionCreator = () => action;
const loginAction = () => loginUser;
const logoutAction = () => logoutUser;

// you can define the action directly with the action creator function and send specific data with in
const actionCreatorTwo = () => {
  return {
    type: 'ACTION_TWO',
    data: 'some data',
  };
};

// 6 - DISPATCH AN ACTION EVENT
// the following two lines are equivalent
store.dispatch(actionCreator());
store.dispatch({ type: LOGIN });

store.dispatch(loginAction());
store.dispatch(logoutAction());

// 7 - GET STATE FROM REDUX STORE
const currentState = store.getState();

// REGISTER A STORE LISTENER (optional)
// This allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store. One simple use for this method is to subscribe a function to your store that simply logs a message every time an action is received and the store is updated.
const sendMessage = () => console.log('an action was received');
store.subscribe(sendMessage);

// COMBINE MULTIPLE REDUCERS (optional)
// if the app grows and became more complex you will need multiple reducers to take care of state. You can combine them with a rootReducer.
const rootReducer = Redux.combine.Reducers({
  auth: authenticatorReducer,
  other: otherReducer,
});

////////////////////////////////////////////
// ASYNCHRONOUS CALLS
// USE MIDDLEWARE TO HANDLE ASYNCHRONOUS ACTIONS
////////////////////////////////////////////
const REQUESTING_DATA = 'REQUESTING_DATA';
const RECEIVED_DATA = 'RECEIVED_DATA';

// actions
const requestingData = () => {
  return { type: REQUESTING_DATA };
};
const receivedData = (data) => {
  return { type: RECEIVED_DATA, users: data.users };
};

// dispatcher
const handleAsync = () => {
  return function (dispatch) {
    // Dispatch request action here
    store.dispatch(requestingData());
    setTimeout(function () {
      let data = {
        users: ['Jeff', 'William', 'Alice'],
      };
      // Dispatch received data action here
      store.dispatch(receivedData(data));
    }, 2500);
  };
};

//default state
const defaultState = {
  fetching: false,
  users: [],
};

//reducer
const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: [],
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users,
      };
    default:
      return state;
  }
};

// create store
const store = Redux.createStore(
  // first argument is the reducer
  asyncDataReducer,
  // second arguments is the middleware
  Redux.applyMiddleware(ReduxThunk.default)
);

/////////////////////////////////////////////
// REMOVE ITEMS FROM ARRAY WITHOUT MUTATING STATE
/////////////////////////////////////////////
// is recomended to use the spred operator, the slice method and the concat method to create copies of state without mutating it

const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      // don't mutate state here or the tests will fail
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length),
      ];
    // or return state.slice(0, action.index).concat(state.slice(action.index + 1, state.length));
    default:
      return state;
  }
};
const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index,
  };
};
const store = Redux.createStore(immutableReducer);

/////////////////////////////////////////////
// COPY AN OBJECT WITH OBJECT ASSIGN
////////////////////////////////////////////
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp',
};
const immutableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return Object.assign({}, state, { status: 'online' });
    default:
      return state;
  }
};
const wakeUp = () => {
  return {
    type: 'ONLINE',
  };
};
const store = Redux.createStore(immutableReducer);
////////////////////////////////////
//IN REACT
///////////////////////////////////
// INSTALATION
//option 1: create boilerplate
//npx create-react-app name-app --template redux

//option 2: install manualy
// npx create-react-app app-name
// npm install redux react-redux
// npm install redux-thunk

//CREATE THE STORE
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

//hooks
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
const state = useSelector((state) => state);
const dispatch = useDispatch();
const AC = bindActionCreators(actionCreators, dispatch);
