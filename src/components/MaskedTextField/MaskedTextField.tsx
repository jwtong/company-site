import React from "react";
import MaskedInput from "react-text-mask";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FilledInput,
  Input,
  FormHelperText
} from "@material-ui/core";

interface Props {
  name: string;
  mask: Array<string | RegExp>;
  label: string;
  className?: string;
  InputProps?: any;
  InputLabelProps?: any;
  autoComplete?: string;
  helperText?: string;
  variant?: "standard" | "outlined" | "filled";
  [key: string]: any;
}

interface State {
  value: any;
}

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

class MaskedTextField extends React.Component<Props, State> {
  static defaultProps = {
    variant: "standard"
  };

  public constructor(props: Props) {
    super(props);
    this.state = { value: "" };
  }

  private TextMaskCustom = (textMaskProps: TextMaskCustomProps) => {
    const { inputRef, ...other } = textMaskProps;

    return (
      <MaskedInput
        {...other}
        ref={(ref: any) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={this.props.mask}
        placeholderChar={"\u2000"}
      />
    );
  };

  render() {
    const {
      label,
      InputLabelProps,
      InputProps,
      variant,
      className,
      mask,
      name,
      autoComplete,
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
        {React.createElement(variantToInputMap[variant], {
          name: name,
          autoComplete: autoComplete,
          inputComponent: this.TextMaskCustom,
          ...InputProps
        })}
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }
}

export default MaskedTextField;
