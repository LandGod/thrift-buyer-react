import React, { ReactNode } from "react";
import { action } from "@storybook/addon-actions";
import "../../index.css";
import RatingBox, { RatingBoxProps } from "./";

export default {
  component: RatingBox,
  title: "RatingBox",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const RatingBoxData: RatingBoxProps = {
  ratingReportsTo: (reportedNumber: number) => action(`${reportedNumber}`),
};

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

export const Default = () => <RatingBox {...RatingBoxData} initialRating={2} />;
