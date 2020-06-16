import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export const CheckboxLabels = function (props) {

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={props.checked} onChange={props.handleChange} name="checked" />}
        label={props.label}
        id={props.name}
      />
    </FormGroup>
  );
}