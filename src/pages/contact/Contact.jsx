import React from "react";
import { ContactForm } from "../../components/ui/ContactForm";
import ContactInfo from "./misc/ContactInfo";

const Contact = ({ isMobile = false }) => {
  return (
    <div>
      <div className="px-2">
        <h3 className="text-center text-3xl sm:text-4xl md:text-5xl text-textSecondary font-bold mb-4 sm:mb-6">
          Get in Touch
        </h3>
        <p className="max-w-2xl mx-auto text-center text-sm sm:text-base md:text-lg text-textPrimary leading-relaxed mb-8 sm:mb-12">
          Have a project in mind or want to collaborate? I'd love to hear from
          you. Send me a message and I'll get back to you as soon as possible.
        </p>
        <div
          className={`${isMobile ? "space-y-8 sm:space-y-12" : "grid md:grid-cols-2 gap-12"}`}
        >
          <div className="space-y-6">
            <h4 className="relative flex items-center text-lg sm:text-2xl text-textSecondary font-bold">
              <span className="absolute h-[1em] w-1 top-1 -left-3 bg-teal-500"></span>
              <span>Contact Information</span>
            </h4>
            {/* Contact Information */}
            <ContactInfo />
          </div>
          <div>
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
