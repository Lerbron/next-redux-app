import actionTypes from './../actionTypes';
import http from './../../utils/fetch';


function add() {
  return dispatch => {
    return dispatch({
      type: actionTypes.INCREMENT
    })
  }
}

function minus() {
  return dispatch => {
    return dispatch({
      type: actionTypes.DECREMENT
    })
  }
}




function fetchHomeList(page) {
	return {
		type: actionTypes.FETCH_HOME_LIST,
		page
	}
}

function receiveHomeList(list) {
	return {
		type: actionTypes.RECEIVE_HOME_LIST,
		list,
	}
}

function fetchHomeListErr(err) {
	return {
		type: actionTypes.FETCH_HOME_LIST_ERR,
		err,
	}
}


function requestHomeList(page = 1, limit = 10) {
	return dispatch => {
		dispatch(fetchHomeList(page));

		http.get(`/api/v1/topics?page=${page}&limit=${limit}`).then(res => {
			dispatch(receiveHomeList(res.data.data));
		})
			.catch(err => {
				dispatch(fetchHomeListErr(err))
			})
	}
}

export {
  add,
	minus,
	receiveHomeList,
  requestHomeList
}