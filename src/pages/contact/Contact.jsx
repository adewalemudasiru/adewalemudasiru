import React from "react";
import { myData } from "../../components/data/allData";
import Input from "../../components/elements/form/Input";
import TextArea from "../../components/elements/form/TextArea";

const Contact = () => {
  return (
    <div>
      <div>
        <h3 className="text-center text-5xl font-bold mb-6">Contact</h3>
        <div className=" grid md:grid-cols-2 gap-12">
          <div className="grid grid-cols-1 space-y-8">
            {myData.contact.map((item) => (
              <div
                key={item.name}
                className="flex items-center p-4 gap-4 bg-amber-50 rounded-2xl"
              >
                <div>
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="text-sm tracking-widest">{item.name}</h4>
                  <p className="text-md font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <form action="post">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name">Name</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="johndoe@email.com"
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="subject">Subject</label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Web Development"
                  className="mt-2"
                />
              </div>
              <div className="mt-6">
                <label htmlFor="message">Message</label>
                <TextArea
                  id="message"
                  placeholder="Your Message"
                  rows={6}
                  className="mt-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
