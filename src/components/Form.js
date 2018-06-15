import React from 'react';
import { Field, Form } from 'formik';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: 'auto',
    alignItems: 'center',
    border: '3px solid red'
  },
  children: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20
  },
  button: {
    marginTop: 30
  }
});

class FormTest extends React.Component {
  render() {
    const {
      values,
      touched,
      errors,
      dirty,
      isSubmitting,
      isValid,
      handleChange,
      handleBlur,
      handleSubmit,
      classes
    } = this.props;

    return (
      <Form className={classes.container}>
        <div className={classes.children}>
          <Field
            id="email"
            component={TextField}
            name="email"
            label="E-mail"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              marginLeft: 10
            }}
          />
        </div>
        {errors.email &&
          touched.email && <div className="input-feedback">{errors.email}</div>}

        <div className={classes.children}>
          <Field
            component={TextField}
            id="name"
            placeholder="Enter your name"
            label="Nome"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              marginLeft: 10
            }}
          />
        </div>
        {errors.name &&
          touched.name && <div className="input-feedback">{errors.name}</div>}
        <button
          className={classes.button}
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          Submit
        </button>
      </Form>
    );
  }
}
export default withStyles(styles)(FormTest);
