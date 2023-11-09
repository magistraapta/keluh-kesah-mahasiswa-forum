import { createStore } from 'redux'

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state, initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return initialState;

    default:
      return state;
  }
};

const store = createStore(authReducer)

export default authReducer
