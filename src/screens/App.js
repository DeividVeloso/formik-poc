import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router';
import FormTest from '../components/Form';
import { Formik, Field, Form } from 'formik';

class App extends Component {
  handleClick = () => {
    this.props.history.push('/step-two');
  };

  handleSubmit = values => {
    console.log('Values', values);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Form onSubmit={this.handleSubmit} /> */}
        <Formik
          initialValues={{ email: '', name: '', color: 'red' }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
          validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                if(!values.name) {
                  errors.name = 'Required';
                }
                return errors;
              }}
          component={FormTest}
        />
      </div>
    );
  }
}

export default withRouter(App);
