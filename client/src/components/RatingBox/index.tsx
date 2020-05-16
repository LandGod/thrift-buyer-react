import React, { useEffect, useState } from "react";
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
    ratingType === "stars" ? (
      <svg width="24" height="24">
        <rect width="24" height="24" fill="none" rx="0" ry="0" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.9692 9.67997C21.8992 9.44997 21.6892 9.28997 21.4492 9.26997L15.0492 8.71997L12.5492 2.79997C12.3592 2.35997 11.6292 2.35997 11.4392 2.79997L8.93918 8.71997L2.54918 9.26997C2.30918 9.28997 2.09918 9.44997 2.02918 9.67997C1.95918 9.90997 2.02918 10.16 2.20918 10.32L7.05918 14.53L5.60918 20.79C5.55918 21.02 5.64918 21.27 5.83918 21.41C6.02918 21.55 6.29918 21.56 6.49918 21.44L11.9992 18.12L17.4992 21.44C17.5992 21.5 17.6992 21.53 17.8092 21.53C17.9292 21.53 18.0592 21.49 18.1592 21.42C18.3592 21.28 18.4492 21.03 18.3892 20.8L16.9392 14.54L21.7892 10.33C21.9792 10.16 22.0392 9.90997 21.9692 9.67997ZM15.8792 13.86C15.7092 14.01 15.6392 14.23 15.6892 14.45L16.9092 19.68L12.3192 16.91C12.2192 16.85 12.1192 16.82 12.0092 16.82C11.8992 16.82 11.7992 16.85 11.6992 16.91L7.09918 19.67L8.31918 14.44C8.36918 14.22 8.29918 14 8.12918 13.85L4.06918 10.34L9.40918 9.87997C9.62918 9.85997 9.81918 9.71997 9.90918 9.51997L11.9992 4.57997L14.0892 9.51997C14.1792 9.72997 14.3692 9.86997 14.5892 9.87997L19.9292 10.34L15.8792 13.86Z"
          fill="#F8B500"
        />
      </svg>
    ) : ratingType === "price" ? (
      <svg width="24" height="24">
        <rect width="24" height="24" fill="none" rx="0" ry="0" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6901 22.7056C7.18006 22.7056 2.69006 18.2156 2.69006 12.7056C2.69006 7.19557 7.18006 2.70557 12.6901 2.70557C18.2001 2.70557 22.6901 7.19557 22.6901 12.7056C22.6901 18.2156 18.2001 22.7056 12.6901 22.7056ZM12.6901 3.90557C7.84006 3.90557 3.89006 7.85557 3.89006 12.7056C3.89006 17.5556 7.84006 21.5056 12.6901 21.5056C17.5401 21.5056 21.4901 17.5556 21.4901 12.7056C21.4901 7.85557 17.5401 3.90557 12.6901 3.90557Z"
          fill="#F8B500"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3601 11.6055H13.2901V8.07546H13.6701C14.4701 8.07546 15.0001 8.41546 15.2701 9.12546C15.3901 9.43546 15.7401 9.58546 16.0501 9.46546C16.3601 9.34546 16.5101 8.99546 16.3901 8.68546C15.9301 7.51546 14.9701 6.86546 13.6701 6.86546H13.2901V5.69546C13.2901 5.36546 13.0201 5.09546 12.6901 5.09546C12.3601 5.09546 12.0901 5.36546 12.0901 5.69546V6.87546H11.7601C10.1301 6.87546 8.80008 8.20546 8.80008 9.83546C8.80008 11.4655 10.1301 12.7955 11.7601 12.7955H12.0901V17.1955H11.2401C10.4001 17.1955 9.94008 16.7355 9.70008 16.3455C9.52008 16.0655 9.16008 15.9755 8.87008 16.1555C8.59008 16.3355 8.51008 16.7055 8.68008 16.9855C9.25008 17.8955 10.1601 18.3955 11.2401 18.3955H12.0901V19.7055C12.0901 20.0355 12.3601 20.3055 12.6901 20.3055C13.0201 20.3055 13.2901 20.0355 13.2901 19.7055V18.3955H13.4201C15.2801 18.3955 16.7901 16.8855 16.7901 15.0255C16.7901 13.1355 15.2501 11.6055 13.3601 11.6055ZM11.7601 11.6055C10.7901 11.6055 10.0001 10.8155 10.0001 9.84546C10.0001 8.87546 10.7901 8.07546 11.7601 8.07546H12.0901V11.6055H11.7601ZM13.4201 17.1955H13.2901V12.7955H13.3601C14.5901 12.7955 15.5901 13.7955 15.5901 15.0255C15.5901 16.2255 14.6201 17.1955 13.4201 17.1955Z"
          fill="#cfcfcf"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.2901 6.87547V5.70547C13.2901 5.36547 13.0201 5.10547 12.6901 5.10547C12.3601 5.10547 12.0901 5.36547 12.0901 5.70547V6.87547H13.2901ZM12.0901 11.6057V8.07568H13.2901V11.6057H12.0901ZM12.0901 12.8057V17.2057H13.2901V12.8057H12.0901ZM13.2901 19.7155V18.4055H12.0901V19.7155C12.0901 20.0455 12.3601 20.3155 12.6901 20.3155C13.0201 20.3155 13.2901 20.0455 13.2901 19.7155Z"
          fill="#cfcfcf"
          fill-opacity="0.3"
        />
      </svg>
    ) : null;

  const IconFilled =
    ratingType === "stars" ? (
      <svg width="24" height="24">
        <rect width="24" height="24" fill="none" rx="0" ry="0" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.9499 9.67141C21.8299 9.29141 21.4799 9.02141 21.0799 8.98141L15.2099 8.48141L12.9199 3.05141C12.7599 2.68141 12.3999 2.44141 11.9999 2.44141C11.5999 2.44141 11.2399 2.68141 11.0799 3.05141L8.78994 8.48141L2.91994 8.98141C2.51994 9.01141 2.17994 9.28141 2.04994 9.67141C1.92994 10.0514 2.03994 10.4714 2.34994 10.7314L6.79994 14.5914L5.46994 20.3314C5.37994 20.7214 5.52994 21.1314 5.85994 21.3714C6.18994 21.6114 6.61994 21.6214 6.95994 21.4214L11.9999 18.3714L17.0499 21.4114C17.2099 21.5114 17.3899 21.5514 17.5699 21.5514C17.7799 21.5514 17.9799 21.4914 18.1599 21.3614C18.4899 21.1214 18.6399 20.7214 18.5499 20.3214L17.2199 14.5814L21.6699 10.7214C21.9599 10.4714 22.0799 10.0514 21.9499 9.67141Z"
          fill="#F8B500"
        />
      </svg>
    ) : ratingType === "price" ? (
      <svg width="24" height="24">
        <rect width="24" height="24" fill="none" rx="0" ry="0" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6901 22.7056C7.18006 22.7056 2.69006 18.2156 2.69006 12.7056C2.69006 7.19557 7.18006 2.70557 12.6901 2.70557C18.2001 2.70557 22.6901 7.19557 22.6901 12.7056C22.6901 18.2156 18.2001 22.7056 12.6901 22.7056ZM12.6901 3.90557C7.84006 3.90557 3.89006 7.85557 3.89006 12.7056C3.89006 17.5556 7.84006 21.5056 12.6901 21.5056C17.5401 21.5056 21.4901 17.5556 21.4901 12.7056C21.4901 7.85557 17.5401 3.90557 12.6901 3.90557Z"
          fill="#F8B500"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3601 11.6055H13.2901V8.07546H13.6701C14.4701 8.07546 15.0001 8.41546 15.2701 9.12546C15.3901 9.43546 15.7401 9.58546 16.0501 9.46546C16.3601 9.34546 16.5101 8.99546 16.3901 8.68546C15.9301 7.51546 14.9701 6.86546 13.6701 6.86546H13.2901V5.69546C13.2901 5.36546 13.0201 5.09546 12.6901 5.09546C12.3601 5.09546 12.0901 5.36546 12.0901 5.69546V6.87546H11.7601C10.1301 6.87546 8.80008 8.20546 8.80008 9.83546C8.80008 11.4655 10.1301 12.7955 11.7601 12.7955H12.0901V17.1955H11.2401C10.4001 17.1955 9.94008 16.7355 9.70008 16.3455C9.52008 16.0655 9.16008 15.9755 8.87008 16.1555C8.59008 16.3355 8.51008 16.7055 8.68008 16.9855C9.25008 17.8955 10.1601 18.3955 11.2401 18.3955H12.0901V19.7055C12.0901 20.0355 12.3601 20.3055 12.6901 20.3055C13.0201 20.3055 13.2901 20.0355 13.2901 19.7055V18.3955H13.4201C15.2801 18.3955 16.7901 16.8855 16.7901 15.0255C16.7901 13.1355 15.2501 11.6055 13.3601 11.6055ZM11.7601 11.6055C10.7901 11.6055 10.0001 10.8155 10.0001 9.84546C10.0001 8.87546 10.7901 8.07546 11.7601 8.07546H12.0901V11.6055H11.7601ZM13.4201 17.1955H13.2901V12.7955H13.3601C14.5901 12.7955 15.5901 13.7955 15.5901 15.0255C15.5901 16.2255 14.6201 17.1955 13.4201 17.1955Z"
          fill="#F8B500"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.2901 6.87547V5.70547C13.2901 5.36547 13.0201 5.10547 12.6901 5.10547C12.3601 5.10547 12.0901 5.36547 12.0901 5.70547V6.87547H13.2901ZM12.0901 11.6057V8.07568H13.2901V11.6057H12.0901ZM12.0901 12.8057V17.2057H13.2901V12.8057H12.0901ZM13.2901 19.7155V18.4055H12.0901V19.7155C12.0901 20.0455 12.3601 20.3155 12.6901 20.3155C13.0201 20.3155 13.2901 20.0455 13.2901 19.7155Z"
          fill="#F8B500"
          fill-opacity="0.3"
        />
      </svg>
    ) : null;

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
      if (selected) {
        return (
          <span key={num} className="icon--selected">
            {IconFilled}
          </span>
        );
      } else {
        return (
          <span key={num} className="icon--unselected">
            {IconEmpty}
          </span>
        );
      }
    } else {
      if (selected) {
        return (
          <span
            key={num}
            className="icon--selected"
            onClick={() => updateCurrentRating(num)}
          >
            {IconFilled}
          </span>
        );
      } else {
        return (
          <span
            key={num}
            className="icon--unselected"
            onClick={() => updateCurrentRating(num)}
          >
            {IconEmpty}
          </span>
        );
      }
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
