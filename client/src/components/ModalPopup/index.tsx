import React, { Component } from "react";
import "./styles.css";

export type buttons = "close" | "okay" | "confirm";

export type ModalPopupProps = {
  header?: string;
  title?: string;
  message?: string; // Message or children can be passed in for maximum customizeability
  // ToDo: Figure out how to import type defenitions from react-bootstrap module for use here
  size: "sm" | "lg";
  buttons: buttons;
  confirm: (...args: any[]) => void;
  cancel: (...arg: any[]) => void;
  show?: boolean; // Defaults to true
};

class ModalPopup extends Component<ModalPopupProps> {
  static defaultProps: ModalPopupProps = {
    size: "lg",
    buttons: "close",
    confirm: () => {},
    cancel: () => {},
    show: true,
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
              className="modal__button--neutral"
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
              className="modal__button--confirm"
              onClick={this.props.confirm}
            >
              Confirm
            </button>
            <button
              className="modal__button--cancel"
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
        <div className="modal__background" onClick={this.props.cancel}>
          <div
            className={`modal ${
              this.props.size === "sm" ? "modal--small" : ""
            }`}
          >
            <div className="modal__header">
              {this.props.header ? (
                <div className="modal__header">{this.props.header}</div>
              ) : null}
              <button className="modal__x" onClick={this.props.cancel}>x</button>
            </div>
            <div className="modal__body">
              {this.props.title ? <h4>{this.props.title}</h4> : ""}
              {this.props.message ? <p>{this.props.message}</p> : ""}
              {this.props.children ? this.props.children : ""}
            </div>
            {/* Footer rendered below based on desired buttons */}
            {this.buttonSelect(this.props.buttons)}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ModalPopup;
