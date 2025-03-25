import React from "react";
import { myData } from "../../components/data/allData";
import ContactForm from "../../components/elements/form/ContactForm";

const Contact = () => {
  return (
    <div>
      <div>
        <h3 className="text-center text-5xl text-textSecondary font-bold mb-6">
          Get in Touch
        </h3>
        <p className="max-w-2xl mx-auto text-center text-lg text-textPrimary leading-relaxed mb-12">
          Have a project in mind or want to collaborate? I'd love to hear from
          you. Send me a message and I'll get back to you as soon as possible.
        </p>
        <div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-2xl text-textSecondary font-bold">
                Contact Information
              </h4>
              <div className="grid grid-cols-1 gap-y-6">
                {myData.contact.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center p-4 gap-4 bg-cardBackground border border-borderLight hover:border-teal-500 transition ease-in-out duration-300 rounded-2xl"
                  >
                    <div className="bg-teal-500/10 p-2 rounded-lg">
                      <item.icon color="teal" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-textPrimary tracking-widest">
                        {item.name}
                      </h4>
                      <p className="text-md text-textSecondary font-semibold">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
