import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
// import Hoc from '../HOC/WithLogging';

function Footer() {
  return (
    <footer>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </footer>
  )
}

export default Footer;
