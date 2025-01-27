import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

function DrawerMenu() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Menu
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>FAQs & Booking</p>
      </Drawer>
    </>
  );
};

export default DrawerMenu;