import React, { Component, createRef } from "react";
import "./styles.css";

// TODO:
//  -- Use effect to add event listener to DOM for 'esc' keypress
//  -- Refactor to functional component
//  -- Check accessibility

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

  cancelOnBackgroundClickOrEsc = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target == this.background.current) {
      this.props.cancel();
    }
  };

  // Select the buttons to render based on props.
  buttonSelect = (buttonType: buttons): React.ReactElement => {
    switch (buttonType) {
      default:
      // Intentional fallthrough.
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
