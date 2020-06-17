import {ALL_CHECKBOX, FETCH_USERS_SUCCESS} from './actionTypes';
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

const getUsers = people => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(people);
        },5000)
    });
}
const fetchUsersSuccees = (people) => {
    return {
        type: FETCH_USERS_SUCCESS,
        people
    }
}
const query = (obj) => {
    const newArray = obj.map((item, i) => {
        item.status = false;
        item.nameId = `id_${i}`
        return item;
    });
    return newArray;
}
export function fetchUsers () {
    return async (dispatch) => {
        const users = await getUsers(people);
        const updateUsers = query(users);
        dispatch(fetchUsersSuccees(updateUsers))
    }
}

export function allCheckbox(name, status) {
    const newState = name === 'allCheckbox' ? {allCheckbox: status} : {allCheckbox: false}
            
    if (name === 'allCheckbox' && status) {
        newState.people = people.map(item => {
            item.status = true;
            return item;
        })                
    } else if (name === 'allCheckbox' && !status) {
        newState.people = people.map(item => {
            item.status = false;
            return item;
        })      
    } else {
        newState.people = people.map(item => {
            if (item.nameId === name) item.status = status;
            return item;
        })              
    }


    return {
            type: ALL_CHECKBOX,
            newState
    }
}