import React from 'react'
import {
  WithStyles,
  createStyles,
  Button,
  withStyles,
  Theme,
} from '@material-ui/core'
import { formStyles } from '../Form/Form'
import Form from '../Form'

const styles = (theme: Theme) => createStyles(formStyles(theme))

export interface Props extends WithStyles<typeof styles> {
  fieldNames: Array<string>
  fieldValidations: {
    [key: string]: Array<{
      validate: (value: any) => boolean
      errorMessage: string
    }>
  }
  formId: string
  formEndpoint: string
  successCallback?: () => any
  failureCallback?: () => any
}

class ContactForm extends React.Component<Props> {
  public static defaultProps = {
    fieldNames: ['name', 'email', 'message'],
    fieldValidations: {
      name: ['required'],
      email: ['required', 'email'],
      message: ['required'],
    },
    formId: 'contact-form',
  }

  public renderForm = (_: any, handleSubmit: any, getTextField: any) => {
    const { classes, formId } = this.props
    return (
      <form id={formId} className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.fieldsContainer}>
          <div className={classes.row1}>
            {getTextField('name', {
              className: classes.fieldWithMarginRight,
              label: 'Name *',
              autoComplete: 'name',
            })}
            {getTextField('email', {
              label: 'Email *',
              autoComplete: 'email',
            })}
          </div>
          {getTextField('message', {
            label: 'Message *',
            className: classes.fullWidthField,
            rows: 10,
            multiline: true,
          })}

          <Button
            color="secondary"
            variant="contained"
            className={classes.submitButton}
            type="submit"
            aria-label="Submit Contact Form"
          >
            Submit
          </Button>
        </div>
      </form>
    )
  }

  public render() {
    return (
      <Form
        formId={this.props.formId}
        fieldNames={this.props.fieldNames}
        fieldValidations={this.props.fieldValidations}
        renderForm={this.renderForm}
        //TODO: Edit value
        successCallback={this.props.successCallback}
        failureCallback={this.props.failureCallback}
        formEndpoint={this.props.formEndpoint}
      />
    )
  }
}
export default withStyles(styles)(ContactForm)
