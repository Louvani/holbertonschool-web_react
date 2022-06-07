import React, { Fragment } from 'react';
import './App.css';
import Header from'../Header/Header';
import Footer from'../Footer/Footer';
import Login from'../Login/Login';
import Notifications from'../Notifications/Notifications';

function App() {
  return (
    <Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <body className="App-body">
          <Login />
        </body>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
