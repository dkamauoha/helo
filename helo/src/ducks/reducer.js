const initialState = {
    username: '',
    password: '',
    id: null,
    profile_pic: ''
}

const UPDATE_INPUT = 'UPDATE_INPUT';

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT:
        return {...state, ...action.payload};

    default:
        return state
  }
}

export function updateInput (value) {
    return {
        type: UPDATE_INPUT,
        payload: value
    }
}
