// import userApi from '../api/userApi';
// import * as types from './actionTypes';

// export function loadUsers() {
//   return function(dispatch) {
//     return userApi.getAllUsers().then(users => {
//       dispatch(loadUsersSuccess(users));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

// export function loadUsersSuccess(users) {
//   return {type: 'LOAD_USERS_SUCCESS', users};
// }

// export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
// export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
//** Action Creators **
const setUsers = users => {
  return {
    type: 'GET_USERS_SUCCESS',
    users
  }
}

const addUser = user => {
  return {
    type: 'CREATE_USER_SUCCESS',
    user
  }
}

//** Async Actions **
export const getUsers = () => {
  return dispatch => {
    return fetch('https://lr12-server.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(users => dispatch(setUsers(users)))
    .catch(error => console.log(error));
  }
}

export const createUser = user => {
  return dispatch => {
    return fetch(`'https://lr12-server.herokuapp.com/api/v1/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user })
    })
      .then(response => response.json())
      .then(user => {
        dispatch(addUser(user))
      })
      .catch(error => console.log(error))
  }
}

