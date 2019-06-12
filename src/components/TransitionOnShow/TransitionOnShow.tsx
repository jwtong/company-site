import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Slide, Collapse, Fade, Grow, Zoom } from "@material-ui/core";

interface Props {
  visibilitySensorProps: any;
  transitionType: "Slide" | "Collapse" | "Fade" | "Grow" | "Zoom";
  transitionProps: any;
  transitionsMap: any;
  delay?: number;
}

interface State {
  isVisible: boolean;
}

export default class TransitionOnShow extends React.Component<Props, State> {
  public static defaultProps = {
    transitionsMap: {
      Collapse: Collapse,
      Slide: Slide,
      Fade: Fade,
      Grow: Grow,
      Zoom: Zoom
    }
  };

  public constructor(props: Props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  private onChange = (isVisible: boolean) => {
    if (isVisible) {
      setTimeout(() => {
        this.setState({
          isVisible: true
        });
      }, this.props.delay || 0);
    }
  };

  render() {
    const {
      visibilitySensorProps,
      transitionType,
      transitionProps
    } = this.props;

    return (
      <VisibilitySensor {...visibilitySensorProps} onChange={this.onChange}>
        <div>
          {React.createElement(
            this.props.transitionsMap[transitionType],
            { ...transitionProps, in: this.state.isVisible },
            this.props.children
          )}
        </div>
      </VisibilitySensor>
    );
  }
}
