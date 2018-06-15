import React from 'react'
import { withFormik } from 'formik';
import Yup from 'yup';

class FormTest extends React.Component {

  handleSubmit = (values) => {
    values.preventDefault();
    console.log(values)
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 1000);
    //setSubmitting(false);
    //return this.props.onSubmit(values);
  }

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
    } = this.props;

    console.log("PROPS",this.props )
    return (
      <form onSubmit={this.handleSubmit}>

         {/* <input
          id="email"
          placeholder="Enter your email"
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.email && touched.email ? 'text-input error' : 'text-input'
          }
        /> */}
        <label htmlFor="email" style={{ display: 'block' }}>
          Email
      </label>
        <input
          id="email"
          placeholder="Enter your email"
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? 'text-input error' : 'text-input'}
        />
        {errors.email &&
          touched.email && <div className="input-feedback">{errors.email}</div>}
        <button type="submit" disabled={!isValid || isSubmitting}>
          Submit
      </button>
      </form>
    );
  }
}

// const EnhancedForm = withFormik({
//   mapPropsToValues: () => ({ email: '' }),
//   // validationSchema: Yup.object().shape({
//   //   email: Yup.string().email('Invalid email address').required('Email is required!'),
//   // }),
//   validate: (values, props) => {
//     const errors = {};
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//     ) {
//       errors.email = 'Invalid email address';
//     }
//     return errors;
//   },
//   // handleSubmit: (values, { setSubmitting }) => {
//   //   setTimeout(() => {
//   //     alert(JSON.stringify(values, null, 2));
//   //     setSubmitting(false);
//   //   }, 1000);
//   // },
//   displayName: 'BasicForm', // helps with React DevTools
// })(FormTest);

export default FormTest
