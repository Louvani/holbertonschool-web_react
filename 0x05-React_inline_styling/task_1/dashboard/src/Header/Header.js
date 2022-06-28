import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from "aphrodite";
// import Hoc from '../HOC/WithLogging';

function Header() {
  return (
    <header className={css(styles.header)}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
    </header>
  )
}

const cssVars = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  header: {
    margin:'20px 20px 0 20px',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'left',
    color: cssVars.mainColor,
    fontSize: "20px",
  },

  img: {
    width: "200px",
  },

  h1: {
    margin: 'auto auto auto 0',
  }
});

export default Header;
