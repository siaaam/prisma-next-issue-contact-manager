import { Formik, Form } from "formik";
import React from "react";
import FormControl from "./FormControl";

const FormikContainer = ({
  initialValues,
  validationSchema,
  onSubmit,
}: any) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormControl control="input" type="text" label="Name" name="name" />
          <FormControl control="input" type="text" label="Email" name="email" />
          <FormControl
            control="input"
            type="number"
            label="Phone"
            name="phone"
          />
          <button
            className="bg-gray-800 px-6 py-3 rounded-lg mt-4"
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
