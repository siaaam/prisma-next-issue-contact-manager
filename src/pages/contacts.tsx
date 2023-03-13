import ContactCard from "@/components/ContactCard";
import React from "react";
import { prisma } from "@/lib/prisma";

const contactsData: ContactType[] = [
  {
    id: 1,
    name: "Abullah Al Siam",
    email: "siam@gmail.com",
    phone: "01927150439",
  },
  {
    id: 2,
    name: "Lionel Messi",
    email: "messi@gmail.com",
    phone: "01923234732",
  },
  {
    id: 3,
    name: "Cristiano Ronaldo",
    email: "ronaldo@gmail.com",
    phone: "01320120012",
  },
  {
    id: 4,
    name: "Nikola Tesla",
    email: "tesla@gmail.com",
    phone: "01309238236",
  },
];

export type ContactType = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const contacts = ({ contacts }: any) => {
  return (
    <section>
      <div className="container">
        <h3 className="md:mb-6 mb-4">All Contacts </h3>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((data: any) => (
            <ContactCard key={data.id} contact={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  const contacts = await prisma.contact.findMany();
  return {
    props: {
      contacts,
    },
  };
}

export default contacts;
