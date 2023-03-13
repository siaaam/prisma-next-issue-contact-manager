import { Formik, Form } from "formik";
import React from "react";
import FormControl from "./FormControl";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { addContact, MyFormValues } from "@/utils/addContact";

const FormikContainer = ({
  initialValues,
  validationSchema,
  onSubmit,
}: any) => {
  const router = useRouter();
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
