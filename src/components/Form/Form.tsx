import React from "react";
import axios from "axios";
import _ from "lodash";
import {
  TextField,
  WithStyles,
  createStyles,
  withStyles,
  Snackbar,
  SnackbarContent,
  Slide
} from "@material-ui/core";
import validations from "../../utils/validations";
import clsx from "clsx";

export const formStyles = (theme: any) => ({
  form: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  fullWidthField: {
    width: "100%"
  },
  fieldWithMarginRight: {
    marginRight: "5%",
    [theme.breakpoints.down("xs")]: {
      marginRight: "0%"
    }
  },
  fieldsContainer: {
    display: "flex",
    flexDirection: "column"
  },
  formRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap"
  },
  textField: {
    width: "300px",
    [theme.breakpoints.down("sm")]: {
      width: "275px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  inputText: {
    fontSize: "1.25rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem"
    }
  },
  submitButton: {
    width: "200px",
    alignSelf: "center",
    marginTop: "3%"
  },
  snackbarsContainer: {
    width: "100%",
    position: "absolute"
  },
  snackbar: {
    fontSize: "1rem",
    textAlign: "center",
    position: "absolute",
    width: "70%",
    padding: "2%"
  },
  errorSnackbar: {
    backgroundColor: theme.palette.secondary.main
  }
});

const styles = (theme: any) => createStyles(formStyles(theme));

export interface Props extends WithStyles<typeof styles> {
  fieldNames: Array<string>;
  fieldValidations: {
    [key: string]: Array<{
      validate: (value: any) => boolean;
      errorMessage: string;
    }>;
  };
  renderForm: (
    handleValidations: any,
    handleSubmit: any,
    getTextField: any,
    getValidationProps: any
  ) => any;
  formId: string;
  formEndpoint: string;
  successCallback?: () => any;
  failureCallback?: () => any;
}

export interface State {
  errors: {
    [key: string]: string | null;
  };
}

class Form extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    const state: State = { errors: {} };
    for (var fieldName of props.fieldNames) {
      state.errors[fieldName] = null;
    }
    this.state = state;
  }

  private handleValidations = (fieldName: string, value: any) => {
    if (this.props.fieldValidations[fieldName]) {
      const validationNames = this.props.fieldValidations[fieldName];
      let message = "";
      for (var validation of validationNames) {
        const validationObject = validations[validation];
        if (validationObject.validate(value)) {
          message = message + validationObject.errorMessage + " ";
        }
      }

      if (message !== "") {
        this.setState(prevState => ({
          errors: {
            ...prevState.errors,
            [fieldName]: message
          }
        }));
        return false;
      } else {
        this.setState(prevState => ({
          errors: { ...prevState.errors, [fieldName]: null }
        }));
      }
    }
    return true;
  };

  private handleSubmit = (event: any) => {
    event.preventDefault();
    const data: any = new FormData(event.target);
    let formOk = true;
    for (var key of data.keys()) {
      const value = data.get(key);
      const validationOk = this.handleValidations(key, value);
      if (!validationOk) {
        formOk = false;
      }
    }

    if (formOk) {
      axios
        .post(this.props.formEndpoint, data, {
          headers: { Accept: "application/json" }
        })
        .then(response => {
          if (document.getElementById(this.props.formId)) {
            document.getElementById(this.props.formId).reset();
          }
          if (this.props.successCallback) {
            this.props.successCallback();
          }
        })
        .catch(error => {
          if (this.props.failureCallback) {
            this.props.failureCallback();
          }
        });
    }
  };

  private getValidationProps = (fieldName: any, helperText: any = null) => {
    return {
      error: !!this.state.errors[fieldName],
      helperText: this.state.errors[fieldName] || helperText,
      onBlur: (event: any) => {
        // event.preventDefault();
        this.handleValidations(fieldName, event.target.value);
      }
    };
  };

  private getTextField = (fieldName: string, customProps: any) => {
    const { classes } = this.props;

    const { className, helperText, ...otherCustomProps } = customProps;

    return (
      <TextField
        InputProps={{
          className: classes.inputText
        }}
        inputProps={{
          "aria-label": _.capitalize(fieldName)
        }}
        InputLabelProps={{
          className: classes.inputText
        }}
        label={_.capitalize(fieldName)}
        className={clsx(classes.textField, customProps.className)}
        name={fieldName}
        margin="normal"
        variant="outlined"
        {...this.getValidationProps(fieldName, helperText)}
        {...otherCustomProps}
      />
    );
  };

  public render() {
    return (
      <div>
        {this.props.renderForm(
          this.handleValidations,
          this.handleSubmit,
          this.getTextField,
          this.getValidationProps
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Form);
