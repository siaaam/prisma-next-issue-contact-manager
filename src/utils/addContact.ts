import axios from "axios";
export type MyFormValues = {
  name: string;
  email: string;
  phone: string;
};

export const addContact = async (values: MyFormValues) => {
  try {
    return await axios.post("http://localhost:3000/api/create", values);
  } catch (err) {
    console.log(err);
  }
};
