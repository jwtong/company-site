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
  snackbarsContainerBottom: string;
  formEndpoint: string;
}

export interface State {
  errors: {
    [key: string]: string | null;
  };
  openSuccess: boolean;
  openFailure: boolean;
}

class Form extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    const state: State = { errors: {}, openSuccess: false, openFailure: false };
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
          this.setState({ openSuccess: true });
        })
        .catch(error => {
          this.setState({ openFailure: true });
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

  private getSnackbar = (children: any, open: string, otherProps?: any) => {
    return (
      <Snackbar
        className={this.props.classes.snackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={5000}
        onClose={() => {
          this.setState({ [open]: false });
        }}
        open={this.state[open]}
        TransitionComponent={Slide}
        TransitionProps={{
          direction: "up"
        }}
        {...otherProps}
      >
        {children}
      </Snackbar>
    );
  };

  private renderSnackbars = () => {
    const { classes, snackbarsContainerBottom } = this.props;
    return (
      <div
        className={classes.snackbarsContainer}
        style={{
          bottom: snackbarsContainerBottom
        }}
      >
        {this.getSnackbar(
          <SnackbarContent
            className={classes.snackbar}
            message="Thanks for reaching out! We've recieved your inquiry and will contact you soon."
          />,
          "openSuccess",
          {
            variant: "success"
          }
        )}
        {this.getSnackbar(
          <SnackbarContent
            className={clsx(classes.snackbar, classes.errorSnackbar)}
            message="Sorry, there was an error submitting the form. You can also reach us by email at _____@mail.com"
          />,
          "openFailure",
          {
            variant: "failure"
          }
        )}
      </div>
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
        {this.renderSnackbars()}
      </div>
    );
  }
}

export default withStyles(styles)(Form);
