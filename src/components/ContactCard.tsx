import { ContactType } from "@/pages/contacts";
import React, { FC } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { FiSmartphone } from "react-icons/fi";

type propsType = {
  contact: ContactType;
};
const ContactCard: FC<propsType> = ({ contact }) => {
  const handleDelete = (id: number) => {
    console.log(id);
  };
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
          onClick={() => handleDelete(contact.id)}
        />
      </div>
    </div>
  );
};

export default ContactCard;
