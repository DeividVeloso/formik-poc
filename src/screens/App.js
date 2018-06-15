import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router';
import FormTest from '../components/Form';
import FormTwo from '../components/FormTwo';
import { Formik } from 'formik';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      slug: '',
      accept: false
    };
  }

  handleClick = () => {
    this.props.history.push('/step-two');
  };

  handleSubmitStepOne = (values, actions) => {
    //actions.setErrors({email: 'error email', name: 'erro name'})
    this.setState({
      name: values.name,
      email: values.email,
      slug: `${Date.now()} - Slug`
    }, state => {
      actions.setSubmitting(false)
      console.log("handleSubmitStepOne", this.state);
    });
  };

  handleSubmitStepTwo = (values, actions) => {
    this.setState({
      slug: values.slug,
      accept: values.accept
    }, state => {
      actions.setSubmitting(false)
      console.log("handleSubmitStepTwo", this.state);
    });
    setTimeout(() => {
      alert(JSON.stringify(this.state, null, 2));
    }, 1000);
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
        <Formik
          initialValues={{ ...this.state }}
          onSubmit={this.handleSubmitStepOne}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.name) {
              errors.name = 'Required';
            }
            return errors;
          }}
          key="formik1"
          component={FormTest}
        />
        {this.state.slug ? (
          <Formik
            key="formik2"
            enableReinitialize
            initialValues={{ ...this.state }}
            onSubmit={this.handleSubmitStepTwo}
            validate={values => {
              const errors = {};
              if (!values.slug) {
                errors.slug = 'Required';
              }
              if (!values.accept) {
                errors.accept = 'Required';
              }
              return errors;
            }}
            component={FormTwo}
          />
        ) : null}
      </div>
    );
  }
}

export default withRouter(App);
