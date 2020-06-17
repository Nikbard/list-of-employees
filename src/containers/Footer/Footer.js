import React from 'react'
import './Footer.scss';
import { connect } from 'react-redux';

const Footer = (props) => {
    const renderSurname = (props) => {
        if (props) {
            return props.map(item => {
                if (item.status) return item.name + ' '
                return null
            });
        }
        return '';
    }
    console.log(props, 'FOOTER')
    return (
        <footer className='Footer'>
            {renderSurname(props.allCheckboxProps.people)}
        </footer>
    );
}

const didState = (state) => {
    return {
        allCheckboxProps: state.allCheckbox,

    }
}

export default connect(didState)(Footer)