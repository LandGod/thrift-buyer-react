import React, { Component } from "react";
import { instanceOf } from "prop-types";

export class CategoryTabsContainer extends Component {

  render() {
    return (

      <div className="container">
          {this.props.children?.map()}
      </div>
    );
  }
}

export default CategoryTabsContainer;
