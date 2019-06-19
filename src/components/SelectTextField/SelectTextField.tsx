import React from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FilledInput,
  Input,
  Select,
  FormHelperText
} from "@material-ui/core";

interface Props {
  name: string;
  label: string;
  className?: string;
  SelectProps?: any;
  InputProps: { [key: string]: any };
  InputLabelProps?: any;
  variant?: "standard" | "outlined" | "filled";
  children?: any;
  helperText?: string;
  options?: Array<{ value: string | null; label: string }>;
  [key: string]: any;
}

interface State {
  value: any;
}

class SelectTextField extends React.Component<Props, State> {
  static defaultProps = {
    variant: "standard"
  };

  public constructor(props: Props) {
    super(props);
    this.state = { value: null };
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
    } = this.props;

    const variantToInputMap: any = {
      standard: Input,
      outlined: OutlinedInput,
      filled: FilledInput
    };

    return (
      <FormControl variant={variant} className={className} {...other}>
        <InputLabel variant={variant} {...InputLabelProps}>
          {label}
        </InputLabel>
        <Select
          value={this.state.value}
          onChange={(event: any) => {
            this.setState({ value: event.target.value });
          }}
          input={React.createElement(variantToInputMap[variant], {
            name: name,
            ...InputProps
          })}
          {...SelectProps}
        >
          {options
            ? options.map((o: { value: string; label: string }) => {
                return (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                );
              })
            : children}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }
}

export default SelectTextField;
