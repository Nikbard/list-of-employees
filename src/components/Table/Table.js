import React from 'react'
import './Table.scss';
import { CheckboxLabels } from '../UI/Checkbox/Checkbox';
import { connect } from 'react-redux';
import { allCheckbox } from '../../store/actions/allCheckbox';

const renderPeople = (props, handle) => {
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
    return {
        allCheckboxProps: state.allCheckbox,

    }
}
const dispatchTo = { allCheckbox }

export default connect(didState, dispatchTo)(Table)