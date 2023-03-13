import axios from "axios";
export const updateContact = async (id: any, values: any) => {
  try {
    await axios.put(`http://localhost:3000/api/contacts/${id}`, values);
  } catch (err) {
    console.log(err);
  }
};
