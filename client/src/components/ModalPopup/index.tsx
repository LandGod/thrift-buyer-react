import React, { Component, createRef } from "react";
import "./styles.css";

export type buttons = "close" | "okay" | "confirm";

export type ModalPopupProps = {
  header?: string;
  title?: string;
  message?: string; // Message or children can be passed in for maximum customizeability
  buttons: buttons;
  confirm: (...args: any[]) => void;
  cancel: (...arg: any[]) => void;
  show?: boolean; // Defaults to true
};

class ModalPopup extends Component<ModalPopupProps> {
  static defaultProps: ModalPopupProps = {
    buttons: "close",
    confirm: () => {},
    cancel: () => {},
    show: true,
  };

  private background = createRef<HTMLDivElement>();

  componentDidMount = () => {
    if (this.props.show) {
      document.addEventListener("keydown", this.cancelOnBackgroundClickOrEsc);
    }
  };

  componentWillUnmount = () => {
      document.removeEventListener("keydown", this.cancelOnBackgroundClickOrEsc);
  };

  componentDidUpdate = (prevProps: ModalPopupProps) => {
    if (prevProps.show && !this.props.show) {
      document.removeEventListener(
        "keydown",
        this.cancelOnBackgroundClickOrEsc
      );
    } else if (!prevProps.show && this.props.show) {
      document.addEventListener("keydown", this.cancelOnBackgroundClickOrEsc);
    }
  };

  cancelOnBackgroundClickOrEsc = (e: Event | React.MouseEvent) => {
    switch (e.type) {
      case "click":
        if (e.target === this.background.current) {
          this.props.cancel();
          break;
        }
        break;
      case "keydown":
        //@ts-ignore (Code unreachable if wrong type)
        let keyPressed: number = e.which || e.keyCode;
        if (keyPressed === 27) {
          console.log("Logged Esc press");
          this.props.cancel();
          break;
        }
    }
  };

  // Select the buttons to render based on props.
  private buttonSelect = (buttonType: buttons): React.ReactElement => {
    switch (buttonType) {
      default:
      // @ts-ignore -- Intentional fallthrough.
      case "close" || "okay":
        return (
          <div className="modal__footer">
            <button
              className="modal__button modal__button--neutral"
              onClick={this.props.confirm}
            >
              {buttonType}
            </button>
          </div>
        );

      case "confirm":
        return (
          <div className="modal__footer">
            <button
              className="modal__button modal__button--confirm"
              onClick={this.props.confirm}
            >
              Confirm
            </button>
            <button
              className="modal__button modal__button--cancel"
              onClick={this.props.cancel}
            >
              Cancel
            </button>
          </div>
        );
    }
  };

  render() {
    if (this.props.show) {
      return (
        <div
          className="modal__background"
          onClick={this.cancelOnBackgroundClickOrEsc}
          ref={this.background}
        >
          <div className="modal__container">
            <div className="modal">
              <div className="modal__header">
                {this.props.header ? (
                  <span className="modal__header-text">
                    {this.props.header}
                  </span>
                ) : null}
                <button className="modal__x" onClick={this.props.cancel}>
                  x
                </button>
              </div>
              <div className="modal__body">
                {this.props.title ? (
                  <div className="modal__title">{this.props.title}</div>
                ) : (
                  ""
                )}
                <div className="modal__text">
                  {this.props.message ? <div>{this.props.message}</div> : ""}
                  {this.props.children ? this.props.children : ""}
                </div>
              </div>
              {/* Footer rendered below based on desired buttons */}
              {this.buttonSelect(this.props.buttons)}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ModalPopup;
