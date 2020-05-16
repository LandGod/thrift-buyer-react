import React, { ReactNode } from "react";
import { action } from "@storybook/addon-actions";
import "../../index.css";
import RatingBox, { RatingBoxProps } from "./";

export default {
  component: RatingBox,
  title: "RatingBox",
  decorator: [(story: ReactNode) => <div>{story}</div>],
  excludeStories: /.*Data$/,
};

export const RatingBoxData: RatingBoxProps = {
  ratingReportsTo: action("Report New Rating to Parent"),
};

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
export const NoRatingsStatic = () => <RatingBox {...RatingBoxData} />;
export const NoRatingsInteractive = () => (
  <RatingBox {...RatingBoxData} userCanEdit={true} />
);
export const OneStarStatic = () => (
  <RatingBox {...RatingBoxData} initialRating={1} />
);
export const OneStarInteractive = () => (
  <RatingBox {...RatingBoxData} userCanEdit={true} initialRating={1} />
);
export const TwoStarStatic = () => (
  <RatingBox {...RatingBoxData} initialRating={2} />
);
export const TwoStarInteractive = () => (
  <RatingBox {...RatingBoxData} userCanEdit={true} initialRating={2} />
);
export const ThreeStarStatic = () => (
  <RatingBox {...RatingBoxData} initialRating={3} />
);
export const ThreeStarInteractive = () => (
  <RatingBox {...RatingBoxData} userCanEdit={true} initialRating={3} />
);

export const FailureModeBadType = () => (
  // @ts-ignore
  <RatingBox {...RatingBoxData} type="test" />
);

//  --------------- PRICE ------------------------

export const PriceNoRatingsStatic = () => <RatingBox {...RatingBoxData} ratingType="price" />;
export const PriceNoRatingsInteractive = () => (
  <RatingBox {...RatingBoxData} userCanEdit={true} ratingType="price" />
);
export const PriceOneStarStatic = () => (
  <RatingBox {...RatingBoxData} initialRating={1} ratingType="price" />
);
export const PriceOneStarInteractive = () => (
  <RatingBox {...RatingBoxData} userCanEdit={true} initialRating={1} ratingType="price" />
);
export const PriceTwoStarStatic = () => (
  <RatingBox {...RatingBoxData} initialRating={2} ratingType="price" />
);
export const PriceTwoStarInteractive = () => (
  <RatingBox {...RatingBoxData} userCanEdit={true} initialRating={2} ratingType="price" />
);
export const PriceThreeStarStatic = () => (
  <RatingBox {...RatingBoxData} initialRating={3} ratingType="price" />
);
export const PriceThreeStarInteractive = () => (
  <RatingBox {...RatingBoxData} userCanEdit={true} initialRating={3} ratingType="price" />
);