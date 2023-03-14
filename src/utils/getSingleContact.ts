import axios from "axios";
export const getSingleContact = async (id: any) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/contacts/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
