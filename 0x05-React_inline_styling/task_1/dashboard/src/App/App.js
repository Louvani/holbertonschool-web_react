import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";
// import Hoc from '../HOC/WithLogging';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';


import { getLatestNotification } from '../utils/utils';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
]

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onLogginOut = this.onLogginOut.bind(this);
  }

  onLogginOut(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onLogginOut);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onLogginOut);
  }

  render() {
    return (
      <Fragment>
        <Notifications listNotifications={listNotifications} />
        <div className={css(styles.app)}>
          <Header />
          <div className={css(styles.body)}>
            {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
            ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat felis id tortor venenatis sollicitudin. Suspendisse at ipsum ac lectus semper ornare id finibus lorem. Praesent non mi eu diam pulvinar mollis. </p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: function () {},
};


const cssVars = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  app: {
    position: 'relative',
    minHeight: '100vh',
    padding: '2px 8px',
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    margin: '48px 32px 48px 32px',
    justifyContent: "center",
    borderBottom: `3px solid ${cssVars.mainColor}`,
    borderTop: `3px solid ${cssVars.mainColor}`,
    padding: '2px 8px',
  },

  footer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    fontStyle: "italic",
  },
});

export default App;
