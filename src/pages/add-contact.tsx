import ContactForm from "@/components/ContactForm";
import React from "react";
import { useRouter } from "next/router";
import { addContact, MyFormValues } from "@/utils/addContact";
import * as Yup from "yup";

const AddContact = () => {
  const router = useRouter();
  const initialValues: any = {
    name: "",
    email: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("required"),
    email: Yup.string().email().required("required"),
    phone: Yup.string().required("required"),
  });
  const onSubmit = async (values: MyFormValues) => {
    addContact(values);
    router.push("/contacts");
  };

  return (
    <ContactForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default AddContact;
