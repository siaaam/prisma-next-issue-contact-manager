import React from "react";
import FormikContainer from "./formik/FormikContainer";

const ContactForm = ({ initialValues, validationSchema, onSubmit }: any) => {
  return (
    <section>
      <div className="container">
        <h2 className="mb-6 text-center">Add Contact</h2>
        <div className="w-[450px] mx-auto">
          <FormikContainer
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
