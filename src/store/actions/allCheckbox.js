import {ALL_CHECKBOX} from './actionTypes';

export function allCheckbox(name, status) {
    return {
            type: ALL_CHECKBOX,
            name, status
    }
}