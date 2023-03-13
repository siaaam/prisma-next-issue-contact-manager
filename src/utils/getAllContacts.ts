import axios from "axios";
export const getAllContacts = async () => {
  try {
    return await axios.get("api/contacts/getContatcs");
  } catch (err) {
    console.log(err);
  }
};
