import React from 'react';
import { Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import { Link } from 'react-router-dom';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: '', university: '', isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Username"
              name="username"
              type="text"
              placeholder="Enter Your Username"
            />
            <CustomSelect
              label="Your School"
              name="university"
              placeholder="Select Your University"
            >
              <option value="">Choose Your University Please</option>
              <option value="bogazici">Cambridge University</option>
              <option value="gsu">Harvard University</option>
              <option value="odtü">Stanford University</option>
              <option value="itü">University of Oxford</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Save
            </button>
            <Link className="formLink" to="/">
              Go to Main Form
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
