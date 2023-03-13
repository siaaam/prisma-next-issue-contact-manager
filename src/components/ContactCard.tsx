import { ContactType } from "@/pages/contacts";
import React, { FC } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { FiSmartphone } from "react-icons/fi";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
type propsType = {
  contact: ContactType;
};
const handleDelete = async (id: number) => {
  try {
    await axios.delete(`api/contacts/${id}`);
  } catch (err) {
    console.log(err);
  }
};
const ContactCard: FC<propsType> = ({ contact }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: number) => handleDelete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
  return (
    <div className="bg-gray-700 p-4">
      <h3 className="mb-2 flex gap-3 items-center">
        <RxAvatar />
        {contact.name}
      </h3>
      <h3 className="mb-2 flex gap-3 items-center">
        <HiOutlineMail />
        {contact.email}
      </h3>
      <p className="mb-2 flex gap-3 items-center">
        <FiSmartphone className="text-[1.75rem] " />
        {contact.phone}
      </p>
      <div className="flex gap-4 mt-5 justify-center">
        <AiOutlineEdit className="text-3xl text-purple-400" />
        <AiOutlineDelete
          className="text-3xl text-pink-400"
          onClick={() => mutation.mutate(contact.id)}
        />
      </div>
    </div>
  );
};

export default ContactCard;
