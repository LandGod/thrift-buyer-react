import React, { Component, ReactNode, ReactNodeArray, ReactElement } from "react";
import { CategoryList } from "./sharedInterfaces";
// Import 

type CataegoryTabsContainerProps = {
  categories: CategoryList
}

export class CategoryTabsContainer extends Component<CataegoryTabsContainerProps> {

  render() {
    return (

      <div className="container">
          {this.props.categoryMap.map(() => {})}
      </div>
    );
  }
}

export default CategoryTabsContainer;
