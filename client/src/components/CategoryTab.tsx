import React, { Component } from "react";
import { Category, CategoryRatings } from "./sharedInterfaces";

interface CataegoryTabProps {
    category: Category,
    ratings: CategoryRatings
}

export class CategoryTab extends Component<CataegoryTabProps> {

  state = {
    
  }

  render() {
    return (

      <div className="row">

      </div>
    );
  }
}

export default CategoryTab;
