import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import {
  Slide,
  Collapse,
  Fade,
  Grow,
  Zoom,
  GridList,
  GridListTile
} from "@material-ui/core";

interface GridListTileData {
  props: any;
  children: any;
  delay: number;
}

interface Props {
  gridListTileData: Array<GridListTileData>;
  gridListProps: any;
  visibilitySensorProps: any;
  transitionType: "Slide" | "Collapse" | "Fade" | "Grow" | "Zoom";
  transitionProps: any;
  transitionsMap: any;
}

export default class TransitionGridList extends React.Component<Props, any> {
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
    const dataLength = this.props.gridListTileData.length;
    const preState: any = {};
    for (let i = 0; i < dataLength; i++) {
      preState[i] = false;
    }

    this.state = {
      ...preState
    };
  }

  private onChange = (isVisible: boolean) => {
    if (isVisible) {
      for (let i = 0; i < this.props.gridListTileData.length; i++) {
        setTimeout(() => {
          this.setState({
            [i]: true
          });
        }, this.props.gridListTileData[i].delay || 0);
      }
    }
  };

  private getGridListTileFromData = (glt: GridListTileData) => {
    return <GridListTile {...glt.props}>{glt.children}</GridListTile>;
  };

  public render() {
    const {
      visibilitySensorProps,
      gridListProps,
      transitionType,
      transitionProps
    } = this.props;

    return (
      <VisibilitySensor {...visibilitySensorProps} onChange={this.onChange}>
        <GridList {...gridListProps}>
          {this.props.gridListTileData.map(
            (glt: GridListTileData, index: number) => {
              return React.createElement(
                this.props.transitionsMap[transitionType],
                {
                  ...transitionProps,
                  in: this.state[index],
                  key: index
                },
                this.getGridListTileFromData(glt)
              );
            }
          )}
        </GridList>
      </VisibilitySensor>
    );
  }
}
