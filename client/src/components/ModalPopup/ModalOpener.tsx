import React, { useState } from "react";

const styles = {
    border: '1px solid black',
    padding: '1em',
    margin: '0.5em 1em'
}

export default function ModalOpener({passthroughAction,children}: any) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    passthroughAction();
    setOpen(!open);
  };

  return (
    <>
      <button onClick={toggle} style={styles}>Click to open</button>
      {React.cloneElement(children, {...children.props, show:open, confirm:toggle, cancel:toggle})}
    </>
  );
}
