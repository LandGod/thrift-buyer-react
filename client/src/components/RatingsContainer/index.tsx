import React from "react";
import RatingBox from "../RatingBox";
import { CategoryList, CategoryRatings } from "../sharedInterfaces";

export default function RatingsContainer({
  categories,
}: {
  categories: CategoryList;
}) {
  return (
    <div className="ratings__container">
      {Object.entries(categories).map(
        (categoryTuple: [string, CategoryRatings], i: number) => {
          return (
            <div className="ratings__row" key={i}>
              <div className="ratings__column">
                <h5 className="">{categoryTuple[1].name}</h5>
              </div>
              <div className="ratings__column"></div>
            </div>
          );
        }
      )}
    </div>
  );
}
