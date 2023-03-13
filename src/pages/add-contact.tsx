import FormikContainer from "@/components/formik/FormikContainer";
import React from "react";

const AddContact = () => {
  return (
    <section>
      <div className="container">
        <h2 className="mb-6 text-center">Add Contact</h2>
        <div className="w-[450px] mx-auto">
          <FormikContainer />
        </div>
      </div>
    </section>
  );
};

export default AddContact;
