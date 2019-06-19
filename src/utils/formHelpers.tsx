//TODO: refactor to superclass
import validations from "./validations";
import { TextField } from "@material-ui/core";
import React from "react";
import _ from "lodash";

interface State {
  errors: {
    [key: string]: string | null;
  };
}

export const handleValidations = (
  props: any,
  setState: (prevState: State) => State,
  fieldName: string,
  value: any
) => {
  if (props.fieldValidations[fieldName]) {
    const validationNames = props.fieldValidations[fieldName];
    for (var validation of validationNames) {
      const validationObject = validations[validation];
      if (!validationObject.validate(value)) {
        setState((prevState: State) => ({
          errors: {
            ...prevState.errors,
            [fieldName]: validationObject.errorMessage
          }
        }));
      } else {
        setState((prevState: State) => ({
          errors: { ...prevState.errors, [fieldName]: null }
        }));
      }
    }
  }
};

export const handleSubmit = (
  props: any,
  state: State,
  setState: (prevState: State) => State
) => (event: any) => {
  event.preventDefault();
  const data: any = new FormData(event.target);
  for (var key of data.keys()) {
    const value = data.get(key);
    handleValidations(props, setState, key, value);
  }

  const formOk = !_.find(
    Object.values(state.errors),
    (val: any) => val !== null
  );

  return formOk;
};

export const getTextField = (
  props: any,
  state: State,
  setState: (prevState: State) => State,
  fieldName: string,
  customProps: any,
  classes: any,
  helperText = null
) => {
  return (
    <TextField
      InputProps={{
        className: classes.inputText
      }}
      InputLabelProps={{
        className: classes.inputText
      }}
      label={_.capitalize(fieldName)}
      className={classes.textField}
      name={fieldName}
      margin="normal"
      variant="outlined"
      error={!!state.errors[fieldName]}
      helperText={state.errors[fieldName] || helperText}
      onBlur={event => {
        event.preventDefault();
        handleValidations(props, setState, fieldName, event.target.value);
      }}
      {...customProps}
    />
  );
};
