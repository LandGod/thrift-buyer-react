import React, { Component, ReactNode, ReactNodeArray, ReactElement } from "react";
import { CategoryList } from "./sharedInterfaces";
// Import 

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
          {this.state.categories.keys().map(() => {})}
      </div>
    );
  }
}

export default CategoryTabsContainer;
