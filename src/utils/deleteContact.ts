import axios from "axios";
export const handleDelete = async (id: number) => {
  try {
    await axios.delete(`api/contacts/${id}`);
  } catch (err) {
    console.log(err);
  }
};
