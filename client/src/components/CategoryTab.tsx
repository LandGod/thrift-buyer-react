import React, { Component } from "react";
import { Category, CategoryRatings, CategoryNames } from "./sharedInterfaces";

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
          <div className="col-3">
            <h4>{CategoryNames[this.props.category]}</h4>
          </div>
          <div className="col-3">
            {/* <h3>Quality</h3> */}
          </div>
          <div className="col-3">
            {/* <h3>Quantity</h3> */}
          </div>
          <div className="col-3">
            {/* <h3>Price</h3> */}
          </div>
      </div>
    );
  }
}

export default CategoryTab;
