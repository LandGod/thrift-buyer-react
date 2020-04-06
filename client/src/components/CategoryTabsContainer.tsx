import React, { Component, ReactNode, ReactNodeArray, ReactElement } from "react";
import { CategoryList } from "./sharedInterfaces";

interface CataegoryTabsContainerProps {
  categories: CategoryList;
}

export class CategoryTabsContainer extends Component<CataegoryTabsContainerProps> {

  state = {
    categories: this.props.categories
  }

  componentDidMount() {

  }

  render() {
    return (

      <div className="container">

        <div className="row">

          <div className="col-3">
            <h4>Category</h4>
          </div>
          <div className="col-3">
            <h3>Quality</h3>
          </div>
          <div className="col-3">
            <h3>Quantity</h3>
          </div>
          <div className="col-3">
            <h3>Price</h3>
          </div>

        </div>

        {Object.keys(this.state.categories).map((categoryKey) => {
          // Category ratings tab element goes here as bootstrap rows
        })}

        <div className="row">
          {/* Add category button goes here */}
        </div>

      </div>
    );
  }
}

export default CategoryTabsContainer;
