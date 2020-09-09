import React, { Component } from 'react';
import "./scss/styles.scss";
import PageDetails from './components/pageDetails'
import ContactForm from './components/contactForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <h1 className="pageHeading">Contact Us</h1>
          <div className="main-section">
            <div className="left-section">
              <PageDetails />
            </div>
            <div className="right-section">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
