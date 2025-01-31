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
      <button type="primary" onClick={showDrawer} className="font-extrabold text-xl bg-transparent border-none cursor-pointer" style={{ fontFamily: 'var(--font-navigation)', color: 'var(--color--secondary)' }}>
        MENU
      </button>
      <Drawer 
      title="MENU" 
      onClose={onClose} 
      open={open} 
      bodyStyle={{ backgroundColor: 'var(--color--background)' }} 
      headerStyle={{ backgroundColor: 'var(--color--background)' }} 
      placement="right" 
      style={{ fontFamily: 'var(--font-header)', color: 'var(--color--text)', fontSize: '1.5rem' }}
      closeIcon={<p style={{ color: 'white', fontSize: '1.5rem', fontFamily: 'var(--font-navigation)' }}>X</p>} >
        <p className='cursor-pointer my-6 hover:text-[rgb(244,178,154)]'>Home</p>
        <p className='cursor-pointer my-6 hover:text-[rgb(244,178,154)]' >About</p>
        <p className='cursor-pointer my-6 hover:text-[rgb(244,178,154)]'>Contact</p>
        <p className='cursor-pointer my-6 hover:text-[rgb(244,178,154)]'>FAQs & Booking</p>
      </Drawer>
    </>
  );
};

export default DrawerMenu;