import React from "react";
import "./App.css";
import ModalPopup, { ModalPopupProps } from "./components/ModalPopup";

const App: React.FC = () => {
  const ModalPopupData: ModalPopupProps = {
    size: "lg", // 'sm', 'lg'
    buttons: "okay", // 'close' | 'okay' | 'confirm'
    confirm: () => {console.log('confirm')},
    cancel: () => {console.log('cancel')}
  };

  return (
    <div className="App">
      <ModalPopup
        show={true}
        {...ModalPopupData}
        header="U WoT Mate?"
        title="This Modal Has a Wall of Text"
      >
        <p>
          Bacon ipsum dolor amet hamburger fatback bresaola shankle brisket
          capicola. Doner pork loin ball tip, turkey hamburger pork belly
          shankle. Shoulder boudin buffalo, capicola bacon shankle pork loin
          brisket t-bone jowl beef ribs ribeye. Ground round jerky ball tip,
          meatloaf frankfurter pancetta strip steak filet mignon landjaeger.
          Meatloaf sausage boudin burgdoggen jowl chislic beef ribs, pork jerky
          pastrami swine ham filet mignon. Turkey tenderloin boudin jowl pork
          chop ground round. Turkey bacon pork loin, chicken pig buffalo
          landjaeger. Kevin flank strip steak pancetta filet mignon turducken
          rump tail boudin sausage.
        </p>
        <p>
          Kevin meatloaf cupim ground round burgdoggen spare ribs pastrami filet
          mignon pork loin bacon tongue t-bone tri-tip ham hock tenderloin.
          Bresaola ribeye pork belly frankfurter tri-tip bacon meatball beef
          porchetta. Shankle pork venison jowl, short loin ham hamburger chuck
          pancetta bacon cow capicola sirloin ball tip shoulder. Pancetta
          frankfurter pig corned beef. Venison capicola pork chop bacon. Shank
          pork chop beef ribs tail jerky. Beef ham hock alcatra, venison ham
          flank jerky chicken tri-tip turkey tenderloin spare ribs cupim. Boudin
          biltong tongue tri-tip bresaola brisket. Beef ribs spare ribs pork
          loin chuck. Tenderloin spare ribs ribeye fatback shankle capicola
          picanha short ribs. Bacon chuck capicola pastrami, pork chop chicken
          drumstick tri-tip turducken. Boudin venison ham hock, salami buffalo
          jerky corned beef frankfurter beef ribs. Bresaola ham hock prosciutto
          spare ribs beef ribs, ground round shank porchetta sirloin beef
          shoulder pork loin.
        </p>
        <p>
          Bacon ipsum dolor amet hamburger fatback bresaola shankle brisket
          capicola. Doner pork loin ball tip, turkey hamburger pork belly
          shankle. Shoulder boudin buffalo, capicola bacon shankle pork loin
          brisket t-bone jowl beef ribs ribeye. Ground round jerky ball tip,
          meatloaf frankfurter pancetta strip steak filet mignon landjaeger.
          Meatloaf sausage boudin burgdoggen jowl chislic beef ribs, pork jerky
          pastrami swine ham filet mignon. Turkey tenderloin boudin jowl pork
          chop ground round. Turkey bacon pork loin, chicken pig buffalo
          landjaeger. Kevin flank strip steak pancetta filet mignon turducken
          rump tail boudin sausage. Kevin meatloaf cupim ground round burgdoggen
          spare ribs pastrami filet mignon pork loin bacon tongue t-bone tri-tip
          ham hock tenderloin. Bresaola ribeye pork belly frankfurter tri-tip
          bacon meatball beef porchetta. Shankle pork venison jowl, short loin
          ham hamburger chuck pancetta bacon cow capicola sirloin ball tip
          shoulder. Pancetta frankfurter pig corned beef. Venison capicola pork
          chop bacon. Shank pork chop beef ribs tail jerky. Beef ham hock
          alcatra, venison ham flank jerky chicken tri-tip turkey tenderloin
          spare ribs cupim. Boudin biltong tongue tri-tip bresaola brisket. Beef
          ribs spare ribs pork loin chuck. Tenderloin spare ribs ribeye fatback
          shankle capicola picanha short ribs. Bacon chuck capicola pastrami,
          pork chop chicken drumstick tri-tip turducken. Boudin venison ham
          hock, salami buffalo jerky corned beef frankfurter beef ribs. Bresaola
          ham hock prosciutto spare ribs beef ribs, ground round shank porchetta
          sirloin beef shoulder pork loin.
        </p>
      </ModalPopup>
    </div>
  );
};

export default App;
