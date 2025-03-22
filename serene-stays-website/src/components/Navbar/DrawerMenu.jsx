import React, { useState } from 'react';
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';

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
      <button 
        type="primary" 
        onClick={showDrawer} 
        className="font-bold text-xl bg-transparent border-none cursor-pointer text-[var(--color-primary)] font-[var(--font-header)]">
        MENU
      </button>
      
      <Drawer 
        title="MENU" 
        onClose={onClose} 
        open={open} 
        bodyStyle={{ backgroundColor: 'var(--color-background)' }} 
        headerStyle={{ backgroundColor: 'var(--color-background)' }} 
        placement="right" 
        className="text-2xl text-[var(--color-text)] font-header"
        closeIcon={<p className="text-xl text-[var(--color-text)] font-navigation">X</p>} >
        
        {/* Existing Links */}
        <Link to="/" onClick={onClose}>
          <p className='cursor-pointer text-[var(--color-text)] my-6 hover:text-[var(--color-primary)]'>Home</p>
        </Link>
        <Link to="/about" onClick={onClose}>
          <p className='cursor-pointer text-[var(--color-text)] my-6 hover:text-[var(--color-primary)]'>About</p>
        </Link>
        <Link to="/contact" onClick={onClose}>
          <p className='cursor-pointer text-[var(--color-text)] my-6 hover:text-[var(--color-primary)]'>Contact</p>
        </Link>
        <Link to="/policypage" onClick={onClose}>
          <p className='cursor-pointer text-[var(--color-text)] my-6 hover:text-[var(--color-primary)]'>FAQs & Booking Policy</p>
        </Link>

        {/* New Links for Locations */}
        <Link to="/virar" onClick={onClose}>
          <p className='md:hidden cursor-pointer text-[var(--color-text)] my-6 hover:text-[var(--color-primary)]'>Virar</p>
        </Link>
        <Link to="/karjat" onClick={onClose}>
          <p className='md:hidden cursor-pointer text-[var(--color-text)] my-6 hover:text-[var(--color-primary)]'>Karjat</p>
        </Link>
        <Link to="/mahabaleshwar" onClick={onClose}>
          <p className='md:hidden cursor-pointer text-[var(--color-text)] my-6 hover:text-[var(--color-primary)]'>Mahabaleshwar</p>
        </Link>
        <Link to="/goa" onClick={onClose}>
          <p className='md:hidden cursor-pointer text-[var(--color-text)] my-6 hover:text-[var(--color-primary)]'>Goa</p>
        </Link>
        <Link to="/thailand" onClick={onClose}>
          <p className='md:hidden cursor-pointer text-[var(--color-text)] my-6 hover:text-[var(--color-primary)]'>Thailand</p>
        </Link>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
