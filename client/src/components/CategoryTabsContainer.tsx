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
          {Object.keys(this.state.categories).map((categoryKey) => {
            // Category ratings tab element goes here
          })}
      </div>
    );
  }
}

export default CategoryTabsContainer;
