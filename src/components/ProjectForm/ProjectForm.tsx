import React from 'react'
import _ from 'lodash'
import {
  WithStyles,
  createStyles,
  Button,
  withStyles,
  Typography,
  Divider,
  Theme,
} from '@material-ui/core'
import { formStyles } from '../Form/Form'
import Form from '../Form'
import MaskedTextField from '../MaskedTextField'
import SelectTextField from '../SelectTextField'
import clsx from 'clsx'

interface Props extends WithStyles<typeof styles> {
  fieldNames: Array<string>
  fieldValidations: {
    [key: string]: Array<{
      validate: (value: any) => boolean
      errorMessage: string
    }>
  }
  formId: string
  containerStyle: any
  formEndpoint: string
  successCallback?: () => any
  failureCallback?: () => any
}

interface State {
  showApplicationTypeOther: boolean
}

class ProjectForm extends React.Component<Props, State> {
  public static defaultProps = {
    fieldNames: [
      'name',
      'location',
      'email',
      'phone',
      'projectDescription',
      'applicationType',
      'applicationTypeOther',
      'timeframe',
      'misc',
    ],
    fieldValidations: {
      name: ['required'],
      location: ['required'],
      email: ['required', 'email'],
      phone: ['required', 'phone'],
      projectDescription: ['required'],
      applicationType: ['required'],
      applicationTypeOther: ['required'],
      timeframe: ['required'],
      misc: null,
    },
    formId: 'project-form',
  }

  public constructor(props: Props) {
    super(props)
    this.state = {
      showApplicationTypeOther: false,
    }
  }

  public renderForm = (
    _: any,
    handleSubmit: any,
    getTextField: any,
    getValidationProps: any
  ) => {
    const { classes, containerStyle, formId } = this.props
    return (
      <form
        style={containerStyle}
        className={classes.form}
        onSubmit={handleSubmit}
        id={formId}
      >
        <div>
          <div className={classes.formContainer}>
            <Typography variant="h6">General Info</Typography>
            <Divider className={classes.underline} />
            <div className={classes.formRow}>
              {getTextField('name', {
                className: classes.fieldWithMarginRight,
                label: 'Name *',
                autoComplete: 'name',
              })}
              {getTextField('location', {
                label: 'Location *',
                helperText: 'city, state',
              })}
            </div>
            <div className={classes.formRow}>
              {getTextField('email', {
                className: classes.fieldWithMarginRight,
                label: 'Email *',
                autoComplete: 'email',
              })}
              <MaskedTextField
                variant="outlined"
                mask={[
                  /[1-9]/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                className={clsx(classes.textField, classes.customField)}
                autoComplete="tel"
                name="phone"
                label="Phone *"
                InputProps={{
                  className: classes.inputText,
                  labelWidth: 70,
                }}
                InputLabelProps={{
                  className: classes.inputText,
                }}
                {...getValidationProps('phone')}
              />
            </div>
            <Typography className={classes.sectionTitle} variant="h6">
              Project Info
            </Typography>
            <Divider className={classes.underline} />
            {getTextField('projectDescription', {
              label: 'Project / Idea Description',
              className: classes.fullWidthField,
              rows: 10,
              multiline: true,
            })}
            <div className={classes.formRow}>
              <SelectTextField
                variant="outlined"
                className={clsx(
                  classes.textField,
                  classes.customField,
                  classes.fieldWithMarginRight
                )}
                SelectProps={{ native: true, className: classes.inputText }}
                InputLabelProps={{ className: classes.inputText }}
                InputProps={{ className: classes.inputText, labelWidth: 150 }}
                label={'Application Type'}
                name={'applicationType'}
                onChange={(event: { target: { value: string } }) => {
                  this.setState({
                    showApplicationTypeOther: event.target.value === 'other',
                  })
                }}
                options={[
                  { label: '', value: '' },
                  { label: 'Web', value: 'web' },
                  { label: 'Mobile', value: 'mobile' },
                  { label: 'Other', value: 'other' },
                  { label: 'Unsure', value: 'unsure' },
                ]}
                {...getValidationProps('applicationType')}
              />
              {this.state.showApplicationTypeOther &&
                getTextField('applicationTypeOther', {
                  label: 'Application Type *',
                  className: classes.fieldWithMarginRight,
                })}
              {getTextField('timeframe', {
                label: 'Timeframe *',
                helperText: 'approximate target',
              })}
            </div>
            <Typography className={classes.sectionTitle} variant="h6">
              Other
            </Typography>
            <Divider className={classes.underline} />
            {getTextField('misc', {
              label: 'Anything Else We Should Know',
              className: classes.fullWidthField,
              rows: 5,
              multiline: true,
            })}
            <Button
              color="secondary"
              variant="contained"
              className={classes.submitButton}
              type="submit"
              aria-label="Submit Project Form"
            >
              Submit
            </Button>
          </div>
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
        successCallback={this.props.successCallback}
        failureCallback={this.props.failureCallback}
        formEndpoint={this.props.formEndpoint}
      />
    )
  }
}

const styles = (theme: Theme) =>
  createStyles({
    customField: {
      marginTop: '16px',
      marginBottom: '8px',
    },
    underline: {
      height: '2px',
      backgroundColor: 'black',
    },
    formContainer: {
      marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(2),
      },
    },
    sectionTitle: {
      marginTop: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(1),
      },
    },
    ...formStyles(theme),
  })

export default withStyles(styles)(ProjectForm)
