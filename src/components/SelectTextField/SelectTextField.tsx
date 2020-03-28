import React from 'react'
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FilledInput,
  Input,
  Select,
  FormHelperText,
} from '@material-ui/core'

interface Props {
  name: string
  label: string
  className?: string
  SelectProps?: any
  InputProps: { [key: string]: any }
  InputLabelProps?: any
  variant?: 'standard' | 'outlined' | 'filled'
  helperText?: string
  options?: Array<{ value: string | null; label: string }>
  [key: string]: any
}

class SelectTextField extends React.Component<Props> {
  static defaultProps = {
    variant: 'standard',
  }

  render() {
    const {
      label,
      options,
      InputLabelProps,
      InputProps,
      SelectProps,
      variant,
      className,
      mask,
      name,
      autoComplete,
      children,
      helperText,
      ...other
    } = this.props

    const variantToInputMap: any = {
      standard: Input,
      outlined: OutlinedInput,
      filled: FilledInput,
    }

    return (
      <FormControl variant={variant} className={className} {...other}>
        <InputLabel variant={variant} {...InputLabelProps}>
          {label}
        </InputLabel>
        <Select
          aria-label={label}
          input={React.createElement(variantToInputMap[variant], {
            name: name,
            ...InputProps,
          })}
          {...SelectProps}
        >
          {options
            ? options.map((o: { value: string; label: string }) => {
                return (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                )
              })
            : children}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    )
  }
}

export default SelectTextField
