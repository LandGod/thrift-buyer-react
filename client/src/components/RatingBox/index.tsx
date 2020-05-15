import React, { useEffect, useState } from "react";
import "./styles.css";

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
    
  const [currentRating, updateCurrentRating] = useState(initialRating || 0);

  // Report changes in the rating to parent element, but not more than once per second
  useEffect(() => {
    const reportDebounceTimer = setTimeout(() => {
      ratingReportsTo(currentRating);
    }, 100);
    return () => {
      clearTimeout(reportDebounceTimer);
    };
  }, [currentRating, ratingReportsTo]);

  const Star = (number: number) => {
    const selected =
      number === 1
        ? currentRating > 0
          ? true
          : false
        : currentRating > number - 0.5
        ? true
        : false;

    if (!userCanEdit) {
      if (selected) {
        return (
          <span key={number} className="star--selected">
            <svg width="24" height="24">
              <rect width="24" height="24" fill="none" rx="0" ry="0" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.9499 9.67141C21.8299 9.29141 21.4799 9.02141 21.0799 8.98141L15.2099 8.48141L12.9199 3.05141C12.7599 2.68141 12.3999 2.44141 11.9999 2.44141C11.5999 2.44141 11.2399 2.68141 11.0799 3.05141L8.78994 8.48141L2.91994 8.98141C2.51994 9.01141 2.17994 9.28141 2.04994 9.67141C1.92994 10.0514 2.03994 10.4714 2.34994 10.7314L6.79994 14.5914L5.46994 20.3314C5.37994 20.7214 5.52994 21.1314 5.85994 21.3714C6.18994 21.6114 6.61994 21.6214 6.95994 21.4214L11.9999 18.3714L17.0499 21.4114C17.2099 21.5114 17.3899 21.5514 17.5699 21.5514C17.7799 21.5514 17.9799 21.4914 18.1599 21.3614C18.4899 21.1214 18.6399 20.7214 18.5499 20.3214L17.2199 14.5814L21.6699 10.7214C21.9599 10.4714 22.0799 10.0514 21.9499 9.67141Z"
                fill="#F8B500"
              />
            </svg>
          </span>
        );
      } else {
        return (
          <span key={number} className="star--unselected">
            <svg width="24" height="24">
              <rect width="24" height="24" fill="none" rx="0" ry="0" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.9692 9.67997C21.8992 9.44997 21.6892 9.28997 21.4492 9.26997L15.0492 8.71997L12.5492 2.79997C12.3592 2.35997 11.6292 2.35997 11.4392 2.79997L8.93918 8.71997L2.54918 9.26997C2.30918 9.28997 2.09918 9.44997 2.02918 9.67997C1.95918 9.90997 2.02918 10.16 2.20918 10.32L7.05918 14.53L5.60918 20.79C5.55918 21.02 5.64918 21.27 5.83918 21.41C6.02918 21.55 6.29918 21.56 6.49918 21.44L11.9992 18.12L17.4992 21.44C17.5992 21.5 17.6992 21.53 17.8092 21.53C17.9292 21.53 18.0592 21.49 18.1592 21.42C18.3592 21.28 18.4492 21.03 18.3892 20.8L16.9392 14.54L21.7892 10.33C21.9792 10.16 22.0392 9.90997 21.9692 9.67997ZM15.8792 13.86C15.7092 14.01 15.6392 14.23 15.6892 14.45L16.9092 19.68L12.3192 16.91C12.2192 16.85 12.1192 16.82 12.0092 16.82C11.8992 16.82 11.7992 16.85 11.6992 16.91L7.09918 19.67L8.31918 14.44C8.36918 14.22 8.29918 14 8.12918 13.85L4.06918 10.34L9.40918 9.87997C9.62918 9.85997 9.81918 9.71997 9.90918 9.51997L11.9992 4.57997L14.0892 9.51997C14.1792 9.72997 14.3692 9.86997 14.5892 9.87997L19.9292 10.34L15.8792 13.86Z"
                fill="#F8B500"
              />
            </svg>
          </span>
        );
      }
    } else {
      if (selected) {
        return (
          <span
            key={number}
            className="star--selected"
            onClick={() => updateCurrentRating(number)}
          >
            <svg width="24" height="24">
              <rect width="24" height="24" fill="none" rx="0" ry="0" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.9499 9.67141C21.8299 9.29141 21.4799 9.02141 21.0799 8.98141L15.2099 8.48141L12.9199 3.05141C12.7599 2.68141 12.3999 2.44141 11.9999 2.44141C11.5999 2.44141 11.2399 2.68141 11.0799 3.05141L8.78994 8.48141L2.91994 8.98141C2.51994 9.01141 2.17994 9.28141 2.04994 9.67141C1.92994 10.0514 2.03994 10.4714 2.34994 10.7314L6.79994 14.5914L5.46994 20.3314C5.37994 20.7214 5.52994 21.1314 5.85994 21.3714C6.18994 21.6114 6.61994 21.6214 6.95994 21.4214L11.9999 18.3714L17.0499 21.4114C17.2099 21.5114 17.3899 21.5514 17.5699 21.5514C17.7799 21.5514 17.9799 21.4914 18.1599 21.3614C18.4899 21.1214 18.6399 20.7214 18.5499 20.3214L17.2199 14.5814L21.6699 10.7214C21.9599 10.4714 22.0799 10.0514 21.9499 9.67141Z"
                fill="#F8B500"
              />
            </svg>
          </span>
        );
      } else {
        return (
          <span
            key={number}
            className="star--unselected"
            onClick={() => updateCurrentRating(number)}
          >
            <svg width="24" height="24">
              <rect width="24" height="24" fill="none" rx="0" ry="0" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.9692 9.67997C21.8992 9.44997 21.6892 9.28997 21.4492 9.26997L15.0492 8.71997L12.5492 2.79997C12.3592 2.35997 11.6292 2.35997 11.4392 2.79997L8.93918 8.71997L2.54918 9.26997C2.30918 9.28997 2.09918 9.44997 2.02918 9.67997C1.95918 9.90997 2.02918 10.16 2.20918 10.32L7.05918 14.53L5.60918 20.79C5.55918 21.02 5.64918 21.27 5.83918 21.41C6.02918 21.55 6.29918 21.56 6.49918 21.44L11.9992 18.12L17.4992 21.44C17.5992 21.5 17.6992 21.53 17.8092 21.53C17.9292 21.53 18.0592 21.49 18.1592 21.42C18.3592 21.28 18.4492 21.03 18.3892 20.8L16.9392 14.54L21.7892 10.33C21.9792 10.16 22.0392 9.90997 21.9692 9.67997ZM15.8792 13.86C15.7092 14.01 15.6392 14.23 15.6892 14.45L16.9092 19.68L12.3192 16.91C12.2192 16.85 12.1192 16.82 12.0092 16.82C11.8992 16.82 11.7992 16.85 11.6992 16.91L7.09918 19.67L8.31918 14.44C8.36918 14.22 8.29918 14 8.12918 13.85L4.06918 10.34L9.40918 9.87997C9.62918 9.85997 9.81918 9.71997 9.90918 9.51997L11.9992 4.57997L14.0892 9.51997C14.1792 9.72997 14.3692 9.86997 14.5892 9.87997L19.9292 10.34L15.8792 13.86Z"
                fill="#F8B500"
              />
            </svg>
          </span>
        );
      }
    }
  };

  //   Display star version
  if (type === "stars") {
    return (
      <div>
        <div
          className={
            !userCanEdit ? "rating-box rating-box--view-only" : "rating-box"
          }
        >
          {[1, 2, 3].map((num) => {
            return Star(num);
          })}
        </div>
      </div>
    );
  } else {
    return null; // Temp value to avoid errors until this section is fleshed out
  }
}
