import React from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import Hoc from '../HOC/WithLogging';

function Footer() {
  return (
    <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </footer>
  )
}

export default Hoc(Footer);
