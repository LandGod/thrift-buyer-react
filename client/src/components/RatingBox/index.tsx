import React, { useEffect } from "react";
import "./styles.css";
import { useState } from "@storybook/addons";

export interface RatingBoxProps {
  type?: "stars" | "price"; // Default 'stars'
  initialRating?: number; // Default undefined
  userCanEdit?: boolean; // Default undefined (false)
  ratingReportsTo: (newUserRating: number) => void; // Requires function that reports any change in rating to the parent component.
}

export default function RatingBox({
  type = "stars",
  userCanEdit,
  initialRating,
  ratingReportsTo,
}: RatingBoxProps) {
  const [currentRating, updateCurrentRating]: [
    number,
    (number: number) => void
  ] = useState(initialRating || 0);

  // Report changes in the rating to parent element, but not more than once per second
  useEffect(() => {
    const reportDebounceTimer = setTimeout(() => {
      ratingReportsTo(currentRating);
    }, 1000);
    return () => {
      clearTimeout(reportDebounceTimer);
    };
  }, [currentRating]);

  if (type === "stars") {
    return (
      <div>
        <div
          className={
            !userCanEdit ? "rating-box rating-box--view-only" : "rating-box"
          }
        >
          <span className={}></span>
        </div>
      </div>
    );
  }
}
