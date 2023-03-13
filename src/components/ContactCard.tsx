import { ContactType } from "@/pages/contacts";
import React, { FC } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { FiSmartphone } from "react-icons/fi";
import { useMutation, useQueryClient } from "react-query";
import { handleDelete } from "@/utils/deleteContact";
import { useRouter } from "next/router";

type propsType = {
  contact: ContactType;
};

const ContactCard: FC<propsType> = ({ contact }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: number) => handleDelete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
  return (
    <div className="bg-gray-700 p-4 w-[100%]">
      <h3 className="mb-2 flex gap-3 items-center">
        <RxAvatar />
        {contact.name}
      </h3>
      <h3 className="mb-2 flex gap-3 items-center max-w-[90%]">
        <HiOutlineMail />
        {contact.email}
      </h3>
      <p className="mb-2 flex gap-3 items-center">
        <FiSmartphone className="text-[1.75rem] " />
        {contact.phone}
      </p>
      <div className="flex gap-4 mt-5 justify-center">
        <AiOutlineEdit
          className="text-3xl text-purple-400"
          onClick={() => router.push(`/contact/edit/${contact.id}`)}
        />
        <AiOutlineDelete
          className="text-3xl text-pink-400"
          onClick={() => mutation.mutate(contact.id)}
        />
      </div>
    </div>
  );
};

export default ContactCard;
