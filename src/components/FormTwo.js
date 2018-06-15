import React from 'react';
import { Field, Form } from 'formik';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

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

class FormTwo extends React.Component {
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
            id="slug"
            component={TextField}
            name="slug"
            label="Slug Gerado"
            //placeholder="Enter your slug"
            value={values.slug}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              marginLeft: 10
            }}
          />
        </div>
        {errors.slug &&
          touched.slug && <div className="input-feedback">{errors.slug}</div>}

        <div className={classes.children}>
          <Field
            component={Checkbox}
            id="accept"
            checked={values.accept}
            value={values.accept}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              marginLeft: 10
            }}
          />
        </div>
        {errors.accept &&
          touched.accept && <div className="input-feedback">{errors.accept}</div>}
        <button
          className={classes.button}
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          Finish
        </button>
      </Form>
    );
  }
}
export default withStyles(styles)(FormTwo);
