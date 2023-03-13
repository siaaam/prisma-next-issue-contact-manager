import { Formik, Form } from "formik";
import React from "react";
import FormControl from "./FormControl";
import * as Yup from "yup";

type MyFormValues = {
  name: string;
  email: string;
  phone: string;
};

const FormikContainer = () => {
  const initialValues: MyFormValues = {
    name: "",
    email: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("required"),
    email: Yup.string().email().required("required"),
    phone: Yup.string().required("required"),
  });

  const onSubmit = (values: MyFormValues) => {
    console.log(values);
  };

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
