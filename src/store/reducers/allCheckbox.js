import {ALL_CHECKBOX, FETCH_USERS_SUCCESS} from '../actions/actionTypes'

const intialState = {
    allCheckbox: false,
    people: []
}

export default function changeCheckbox (state = intialState, action) {
    console.log('action', action)
    switch (action.type) {
        case ALL_CHECKBOX:
            return action.newState
        case FETCH_USERS_SUCCESS: 
            console.log('people')
            return {...state, people: action.people}
        default:
            return state
    }
}