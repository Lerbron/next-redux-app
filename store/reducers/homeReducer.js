import actionTypes from './../actionTypes';

const initialState = {
  count: 0,
  fetching: false,
  homeList: []
}
export default function homeReducer (state = initialState, action){
  console.log('action:', action)
  switch (action.type) {
    
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case actionTypes.FETCH_HOME_LIST:
      return Object.assign({}, state, {
        fetching: true,
      })
    case actionTypes.RECEIVE_HOME_LIST:
      return Object.assign({}, state, {
        fetching: false,
        homeList: action.list
      })
    case actionTypes.FETCH_HOME_LIST_ERR:
      return Object.assign({}, state, {
        fetching: false,
        err: actions.err
      })
    default:
      return state
  }
};
