import {ALL_CHECKBOX} from '../actions/actionTypes'
const people = [
    {
        name: 'Иван',
        surname: 'Путров',
        age: 23
    },
    {
        name: 'Вася',
        surname: 'Путров',
        age: 22
    },
    {
        name: 'Георгий',
        surname: 'Путров',
        age: 33
    },
    {
        name: 'Алексей',
        surname: 'Путров',
        age: 19
    },
    {
        name: 'Геннадий',
        surname: 'Путров',
        age: 44
    },
    {
        name: 'Жозе',
        surname: 'Путров',
        age: 31
    },
    {
        name: 'Валерий',
        surname: 'Путров',
        age: 18
    },
    {
        name: 'Лариса',
        surname: 'Путрова',
        age: 24
    }
]
const query = (obj) => {
    const result = {allCheckbox: false};
    const newArray = obj.map((item, i) => {
        item.status = false;
        item.nameId = `id_${i}`
        return item;
    });
    result.people = newArray;
    return result;
}
const peopleState = query(people);

export default function changeCheckbox (state = peopleState, action) {
    switch (action.type) {
        case ALL_CHECKBOX:
            const newState = action.name === 'allCheckbox' ? {allCheckbox: action.status} : {allCheckbox: false}
            
            if (action.name === 'allCheckbox' && action.status) {
                newState.people = state.people.map(item => {
                    item.status = true;
                    return item;
                })                
            } else if (action.name === 'allCheckbox' && !action.status) {
                newState.people = state.people.map(item => {
                    item.status = false;
                    return item;
                })      
            } else {
                newState.people = state.people.map(item => {
                    if (item.nameId === action.name) item.status = action.status;
                    return item;
                })              
            }

            return newState
        default:
            return state
    }
}