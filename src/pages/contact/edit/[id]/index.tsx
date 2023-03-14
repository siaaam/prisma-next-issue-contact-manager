import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ContactForm from "@/components/ContactForm";
import * as Yup from "yup";
import { MyFormValues } from "@/utils/addContact";
import { useQuery } from "react-query";
import { getSingleContact } from "@/utils/getSingleContact";
import { updateContact } from "@/utils/updateContact";

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["contacts", id],
    queryFn: () => getSingleContact(id),
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  const contact = data?.contact;
  const initialValues: any = {
    name: contact?.name,
    email: contact?.email,
    phone: contact?.phone,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("required"),
    email: Yup.string().email().required("required"),
    phone: Yup.string().required("required"),
  });
  const onSubmit = async (values: MyFormValues) => {
    updateContact(id, values);
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

export default index;
