import React, {ReactNode} from "react";
import { action } from "@storybook/addon-actions";

import ModalPopup, { ModalPopupProps } from "../components/ModalPopup";

export default {
  component: ModalPopup,
  title: "ModalPopup",
  decorator: [(story:ReactNode) => <div>{story}</div>],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const ModalPopupData: ModalPopupProps = {
  header: "Test Header",
  title: "This is an LG Size Modal Title",
  message:
    "Bacon ipsum dolor amet hamburger fatback bresaola shankle brisket capicola. Doner pork loin ball tip, turkey hamburger pork belly shankle. Shoulder boudin buffalo, capicola bacon shankle pork loin brisket t-bone jowl beef ribs ribeye. Ground round jerky ball tip, meatloaf frankfurter pancetta strip steak filet mignon landjaeger.",
  size: "lg", // 'sm', 'lg'
  buttons: "okay", // 'close' | 'okay' | 'confirm'
  confirm: action("onConfirm"),
  cancel: action("onCancel")
};

// export const actionsData = {
  
  
// };

export const Default = () => <ModalPopup {...ModalPopupData} />;

export const Small = () => <ModalPopup {...ModalPopupData} size='sm' />;

export const Confirm = () => <ModalPopup {...ModalPopupData} buttons='confirm' />;

// export const Pinned = () => (
//   <ModalPopup
//     ModalPopup={{ ...ModalPopupData, state: "ModalPopup_PINNED" }}
//     {...actionsData}
//   />
// );

// export const Archived = () => (
//   <ModalPopup
//     ModalPopup={{ ...ModalPopupData, state: "ModalPopup_ARCHIVED" }}
//     {...actionsData}
//   />
// );
