import axios from "axios";
export const getSingleContact = async (id: any) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/contacts/${id}`);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};
