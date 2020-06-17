import React, {useEffect} from 'react'
import './Table.scss';
import { CheckboxLabels } from '../UI/Checkbox/Checkbox';
import { connect } from 'react-redux';
import { allCheckbox, fetchUsers } from '../../store/actions/allCheckbox';

const renderPeople = (props, handle) => {
    console.log(props, 'RENDER')
    if (!props) return 
    return props.map((item, index) => (
        <CheckboxLabels
            key = {index}
            label={item.name + ' ' + item.surname + ' ' + item.age}
            checked = {item.status}
            handleChange={handle}
            name={item.nameId}
        />
    ));
}

const Table = (props) => {
    const handleChange = (event) => {
        const id = event.target.closest('label').id;
        props.allCheckbox(id, event.target.checked);
    };
    useEffect(() => {props.fetchUsers()}, []);
    console.log(props)

    return (
        <div className='Table'>
            <div className="Table__header">
                <CheckboxLabels
                    label='Список сотрудников'
                    checked = {props.allCheckboxProps.allCheckbox}
                    handleChange={handleChange}
                    name='allCheckbox'
                />
            </div>
            <div className="Table__employees">
                {
                    renderPeople(props.allCheckboxProps.people, handleChange)  
                }
            </div>
        </div>
    );
}

const didState = (state) => {
    console.log(state, 'state')
    return {
        allCheckboxProps: state.allCheckbox,
    }
}

const dispatchTo = { allCheckbox,  fetchUsers}

export default connect(didState, dispatchTo)(Table)