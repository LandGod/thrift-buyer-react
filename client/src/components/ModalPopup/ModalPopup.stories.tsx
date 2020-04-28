import React, { ReactNode } from "react";
import { action } from "@storybook/addon-actions";
import "../../index.css";
import ModalPopup, { ModalPopupProps } from "./";
import ModalOpener from "./ModalOpener";

export default {
  component: ModalPopup,
  title: "ModalPopup",
  decorator: [(story: ReactNode) => <div>{story}</div>],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const ModalPopupData: ModalPopupProps = {
  buttons: "okay", // 'close' | 'okay' | 'confirm'
  confirm: action("onConfirm"),
  cancel: action("onCancel"),
};

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

export const Default = () => (
  <ModalOpener passthroughAction={action("toggle")}>
    <ModalPopup {...ModalPopupData} />
  </ModalOpener>
);

export const DefaultOpen = () => <ModalPopup {...ModalPopupData} />;

export const TitleOnly = () => (
  <ModalOpener passthroughAction={action("toggle")}>
    <ModalPopup {...ModalPopupData} title="Modal with only a title" />
  </ModalOpener>
);

export const TitleOnlyOpen = () => (
  <ModalPopup {...ModalPopupData} title="Modal with only a title" />
);

export const MessageOnly = () => (
  <ModalOpener passthroughAction={action("toggle")}>
    <ModalPopup {...ModalPopupData} message="This modal has no title." />
  </ModalOpener>
);

export const MessageOnlyOpen = () => (
  <ModalPopup {...ModalPopupData} message="This modal has no title." />
);

export const Confirm = () => (
  <ModalOpener passthroughAction={action("toggle")}>
    <ModalPopup
      {...ModalPopupData}
      buttons="confirm"
      title="This is a Large Confirm Modal"
      message="This is a short message explaining what's up with this confirm modal."
    />
  </ModalOpener>
);

export const ConfirmOpen = () => (
  <ModalPopup
    {...ModalPopupData}
    buttons="confirm"
    title="This is a Large Confirm Modal"
    message="This is a short message explaining what's up with this confirm modal."
  />
);

export const WallOfText = () => (
  <ModalOpener passthroughAction={action("toggle")}>
    <ModalPopup
      {...ModalPopupData}
      header="U WoT Mate?"
      title="This Modal Has a Wall of Text"
    >
      <p>
        Bacon ipsum dolor amet hamburger fatback bresaola shankle brisket
        capicola. Doner pork loin ball tip, turkey hamburger pork belly shankle.
        Shoulder boudin buffalo, capicola bacon shankle pork loin brisket t-bone
        jowl beef ribs ribeye. Ground round jerky ball tip, meatloaf frankfurter
        pancetta strip steak filet mignon landjaeger. Meatloaf sausage boudin
        burgdoggen jowl chislic beef ribs, pork jerky pastrami swine ham filet
        mignon. Turkey tenderloin boudin jowl pork chop ground round. Turkey
        bacon pork loin, chicken pig buffalo landjaeger. Kevin flank strip steak
        pancetta filet mignon turducken rump tail boudin sausage.
      </p>
      <p>
        Kevin meatloaf cupim ground round burgdoggen spare ribs pastrami filet
        mignon pork loin bacon tongue t-bone tri-tip ham hock tenderloin.
        Bresaola ribeye pork belly frankfurter tri-tip bacon meatball beef
        porchetta. Shankle pork venison jowl, short loin ham hamburger chuck
        pancetta bacon cow capicola sirloin ball tip shoulder. Pancetta
        frankfurter pig corned beef. Venison capicola pork chop bacon. Shank
        pork chop beef ribs tail jerky. Beef ham hock alcatra, venison ham flank
        jerky chicken tri-tip turkey tenderloin spare ribs cupim. Boudin biltong
        tongue tri-tip bresaola brisket. Beef ribs spare ribs pork loin chuck.
        Tenderloin spare ribs ribeye fatback shankle capicola picanha short
        ribs. Bacon chuck capicola pastrami, pork chop chicken drumstick tri-tip
        turducken. Boudin venison ham hock, salami buffalo jerky corned beef
        frankfurter beef ribs. Bresaola ham hock prosciutto spare ribs beef
        ribs, ground round shank porchetta sirloin beef shoulder pork loin.
      </p>
      <p>
        Bacon ipsum dolor amet hamburger fatback bresaola shankle brisket
        capicola. Doner pork loin ball tip, turkey hamburger pork belly shankle.
        Shoulder boudin buffalo, capicola bacon shankle pork loin brisket t-bone
        jowl beef ribs ribeye. Ground round jerky ball tip, meatloaf frankfurter
        pancetta strip steak filet mignon landjaeger. Meatloaf sausage boudin
        burgdoggen jowl chislic beef ribs, pork jerky pastrami swine ham filet
        mignon. Turkey tenderloin boudin jowl pork chop ground round. Turkey
        bacon pork loin, chicken pig buffalo landjaeger. Kevin flank strip steak
        pancetta filet mignon turducken rump tail boudin sausage. Kevin meatloaf
        cupim ground round burgdoggen spare ribs pastrami filet mignon pork loin
        bacon tongue t-bone tri-tip ham hock tenderloin. Bresaola ribeye pork
        belly frankfurter tri-tip bacon meatball beef porchetta. Shankle pork
        venison jowl, short loin ham hamburger chuck pancetta bacon cow capicola
        sirloin ball tip shoulder. Pancetta frankfurter pig corned beef. Venison
        capicola pork chop bacon. Shank pork chop beef ribs tail jerky. Beef ham
        hock alcatra, venison ham flank jerky chicken tri-tip turkey tenderloin
        spare ribs cupim. Boudin biltong tongue tri-tip bresaola brisket. Beef
        ribs spare ribs pork loin chuck. Tenderloin spare ribs ribeye fatback
        shankle capicola picanha short ribs. Bacon chuck capicola pastrami, pork
        chop chicken drumstick tri-tip turducken. Boudin venison ham hock,
        salami buffalo jerky corned beef frankfurter beef ribs. Bresaola ham
        hock prosciutto spare ribs beef ribs, ground round shank porchetta
        sirloin beef shoulder pork loin.
      </p>
    </ModalPopup>
  </ModalOpener>
);

export const WallOfTextOpen = () => (
  <ModalPopup
    {...ModalPopupData}
    header="U WoT Mate?"
    title="This Modal Has a Wall of Text"
  >
    <p>
      Bacon ipsum dolor amet hamburger fatback bresaola shankle brisket
      capicola. Doner pork loin ball tip, turkey hamburger pork belly shankle.
      Shoulder boudin buffalo, capicola bacon shankle pork loin brisket t-bone
      jowl beef ribs ribeye. Ground round jerky ball tip, meatloaf frankfurter
      pancetta strip steak filet mignon landjaeger. Meatloaf sausage boudin
      burgdoggen jowl chislic beef ribs, pork jerky pastrami swine ham filet
      mignon. Turkey tenderloin boudin jowl pork chop ground round. Turkey bacon
      pork loin, chicken pig buffalo landjaeger. Kevin flank strip steak
      pancetta filet mignon turducken rump tail boudin sausage.
    </p>
    <p>
      Kevin meatloaf cupim ground round burgdoggen spare ribs pastrami filet
      mignon pork loin bacon tongue t-bone tri-tip ham hock tenderloin. Bresaola
      ribeye pork belly frankfurter tri-tip bacon meatball beef porchetta.
      Shankle pork venison jowl, short loin ham hamburger chuck pancetta bacon
      cow capicola sirloin ball tip shoulder. Pancetta frankfurter pig corned
      beef. Venison capicola pork chop bacon. Shank pork chop beef ribs tail
      jerky. Beef ham hock alcatra, venison ham flank jerky chicken tri-tip
      turkey tenderloin spare ribs cupim. Boudin biltong tongue tri-tip bresaola
      brisket. Beef ribs spare ribs pork loin chuck. Tenderloin spare ribs
      ribeye fatback shankle capicola picanha short ribs. Bacon chuck capicola
      pastrami, pork chop chicken drumstick tri-tip turducken. Boudin venison
      ham hock, salami buffalo jerky corned beef frankfurter beef ribs. Bresaola
      ham hock prosciutto spare ribs beef ribs, ground round shank porchetta
      sirloin beef shoulder pork loin.
    </p>
    <p>
      Bacon ipsum dolor amet hamburger fatback bresaola shankle brisket
      capicola. Doner pork loin ball tip, turkey hamburger pork belly shankle.
      Shoulder boudin buffalo, capicola bacon shankle pork loin brisket t-bone
      jowl beef ribs ribeye. Ground round jerky ball tip, meatloaf frankfurter
      pancetta strip steak filet mignon landjaeger. Meatloaf sausage boudin
      burgdoggen jowl chislic beef ribs, pork jerky pastrami swine ham filet
      mignon. Turkey tenderloin boudin jowl pork chop ground round. Turkey bacon
      pork loin, chicken pig buffalo landjaeger. Kevin flank strip steak
      pancetta filet mignon turducken rump tail boudin sausage. Kevin meatloaf
      cupim ground round burgdoggen spare ribs pastrami filet mignon pork loin
      bacon tongue t-bone tri-tip ham hock tenderloin. Bresaola ribeye pork
      belly frankfurter tri-tip bacon meatball beef porchetta. Shankle pork
      venison jowl, short loin ham hamburger chuck pancetta bacon cow capicola
      sirloin ball tip shoulder. Pancetta frankfurter pig corned beef. Venison
      capicola pork chop bacon. Shank pork chop beef ribs tail jerky. Beef ham
      hock alcatra, venison ham flank jerky chicken tri-tip turkey tenderloin
      spare ribs cupim. Boudin biltong tongue tri-tip bresaola brisket. Beef
      ribs spare ribs pork loin chuck. Tenderloin spare ribs ribeye fatback
      shankle capicola picanha short ribs. Bacon chuck capicola pastrami, pork
      chop chicken drumstick tri-tip turducken. Boudin venison ham hock, salami
      buffalo jerky corned beef frankfurter beef ribs. Bresaola ham hock
      prosciutto spare ribs beef ribs, ground round shank porchetta sirloin beef
      shoulder pork loin.
    </p>
  </ModalPopup>
);
