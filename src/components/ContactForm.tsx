import { useRouter } from "next/router";
import React from "react";
import FormikContainer from "./formik/FormikContainer";

const ContactForm = ({ initialValues, validationSchema, onSubmit }: any) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <section>
      <div className="container">
        <h2 className="mb-6 text-center">
          {id ? "Edit Contact" : "Add Contact"}
        </h2>
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
