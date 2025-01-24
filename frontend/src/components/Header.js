import React from 'react';
import './Header.css';
import { Icon } from '@iconify/react'; // Use Iconify for fire icon
import fireIcon from '@iconify-icons/emojione/fire';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={fireIcon} className="fire-icon" /> Wildfire Tracker (Powered By NASA)
      </h1>
    </header>
  );
};

export default Header;
