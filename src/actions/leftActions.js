

const addLeft = left => {
  return {
    type: 'CREATE_LEFT_SUCCESS',
    left
  }
}

// ** Async Actions **
export const getLefts = () => {
  return dispatch => {
    return fetch(`${API_URL}/lefts`)
      .then(response => response.json())
      .then(lefts => dispatch(setLefts(lefts)))
      .catch(error => console.log(error));
  }
}

export const createLeft = left  => {
  return dispatch => {

    return fetch('https://lr12-server.herokuapp.com/api/v1/lefts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({left: left})
    })
    .then(response =>  response.json())
    .then(left => {
        dispatch(addLeft(left))
      })
    .catch(error => {
      return error;
    });
  }
}

