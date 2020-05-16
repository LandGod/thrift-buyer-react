import React, { useEffect, useState } from "react";
import {
  StarIconEmpty,
  StarIconFull,
  DollarIconEmpty,
  DollarIconFull,
} from "./icons";
import "./styles.css";

/* 
Notes about this module:
- In order to help normalize the scoring in the back end the rating recieved by this component will always be opposite of how it should
    be displayed if it is displaying a price rating. Thus, the component will invert all ratings recieved as props if in price mode. It 
    will also invert the rating again, when reporting back to the parent, since user input is not itself inverted.
- To state the above more simply: When recieving a price rating of 3 from the parent, a 1 rating will be displayed. When sending a 1 rating
    from the user, the parent component will recive a report of a 3 rating. 
- We are doing this because we want a 1 rating to always be 'worst', while 3 is always 'best'. However, visually 3 dollar signs is bad,
    and 1 is good. This way, there won't be confution for the user, but the back end can also stay consistent. 
- Icons used are svgs and are stored in the icon.tsx file in this folder.
*/

export type ratingIcons = "stars" | "price";

export interface RatingBoxProps {
  ratingType?: ratingIcons; // Default 'stars'
  initialRating?: number; // Default undefined
  userCanEdit?: boolean; // Default undefined (false)
  ratingReportsTo: (newUserRating: number) => void; // Requires function that reports any change in rating to the parent component.
}

export default function RatingBox({
  ratingType = "stars",
  userCanEdit,
  initialRating,
  ratingReportsTo,
}: RatingBoxProps) {
  // Used for inverting the numerical score of a rating (for translation to dollar ratings)
  // We flip the ratings for dollar ammounts, since more dollar signs is actually worse, and I want to be consistent on the back end.
  function invertScore(num: number) {
    // There are no valid ratings less than 1 since nobody can give a rating of 0
    // (0 means no ratings at all)
    if (num === 0) {
      return 0;
    } else if (num < 1) {
      throw Error(
        `Encountered invalid rating value "${num}". Valid values can only be between 1and 3. `
      );
    }
    // Distance = absolute distance of 'num' from 2
    let distance = Math.abs(num - 2);
    // Reflect num across the axis of 2.
    if (num > 2) {
      return num - distance * 2;
    } else if (num < 2) {
      return num + distance * 2;
    } else {
      return 2;
    }
  }

  // Track current rating based on user click. Render will update whenever this changes.
  const [currentRating, updateCurrentRating] = useState(
    ratingType === "price"
      ? invertScore(initialRating || 0)
      : initialRating || 0
  );

  // Track the last update we sent to the parent so that we can avoid sending repeats.
  const [lastSentRating, updateLastSentRating] = useState(
    ratingType === "price"
      ? invertScore(initialRating || 0)
      : initialRating || 0
  );

  // Report changes in the rating to parent element, but not more than once per second
  useEffect(() => {
    if (currentRating !== lastSentRating) {
      const reportDebounceTimer = setTimeout(() => {
        if (ratingType === "price") {
          ratingReportsTo(invertScore(currentRating));
        } else {
          ratingReportsTo(currentRating);
        }
        updateLastSentRating(currentRating);
      }, 1000);
      return () => {
        clearTimeout(reportDebounceTimer);
      };
    }
  }, [currentRating, ratingReportsTo]);

  // Instantiates the filled and empty rating icons, based on whether we want stars or dollar signs.
  const IconEmpty =
    ratingType === "stars"
      ? StarIconEmpty
      : ratingType === "price"
      ? DollarIconEmpty
      : null;

  const IconFilled =
    ratingType === "stars"
      ? StarIconFull
      : ratingType === "price"
      ? DollarIconFull
      : null;

  // Creates a span, and puts in either the filled or unfilled icon, with or without click event
  const Icon = (num: number) => {
    const selected =
      num === 1
        ? currentRating > 0
          ? true
          : false
        : currentRating > num - 0.5
        ? true
        : false;

    if (!userCanEdit) {
      return (
        <span
          key={num}
          className={selected ? "icon--selected" : "icon--unselected"}
        >
          {selected ? IconFilled : IconEmpty}
        </span>
      );
    } else {
      return (
        <span
          key={num}
          className={selected ? "icon--selected" : "icon--unselected"}
          onClick={() => updateCurrentRating(num)}
        >
          {selected ? IconFilled : IconEmpty}
        </span>
      );
    }
  };

  //   Final Render
  if (ratingType === "stars" || ratingType === "price") {
    return (
      <div>
        <div
          className={
            !userCanEdit ? "rating-box rating-box--view-only" : "rating-box"
          }
        >
          {[1, 2, 3].map((num) => {
            return Icon(num);
          })}
        </div>
      </div>
    );
  } else {
    console.error(
      `Improper ratingType specified for "ratingType" property in RatingBox. Must be "stars" or "price". Provided value was: "${ratingType}"`
    );
    return <div>Error. Rating data corrupted.</div>;
  }
}
