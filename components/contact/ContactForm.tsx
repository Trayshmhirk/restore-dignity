import React, { useState } from "react";
import Button from "../common/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div className="flex flex-col gap-6 mb-4 md:flex-row md:gap-4">
        <div className="w-full">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="border border-input px-4 py-3 rounded-md w-full outline-none focus:ring-[1.3px] focus:ring-primary transition-all duration-200"
          />
        </div>
        <div className="w-full">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="border border-input px-4 py-3 rounded-md w-full outline-none focus:ring-[1.3px] focus:ring-primary transition-all duration-200"
          />
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="border border-input px-4 py-3 rounded-md w-full outline-none focus:ring-[1.3px] focus:ring-primary transition-all duration-200"
        />
      </div>

      <div className="mb-6">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          className="border border-input px-4 py-3 rounded-md w-full h-32 outline-none focus:ring-[1.3px] focus:ring-primary transition-all duration-200 resize-none"
        />
      </div>

      <Button
        // type="submit"
        // disabled={formStatus === "submitting"}
        className="w-full rounded-md"
      >
        {formStatus === "submitting"
          ? "Sending..."
          : formStatus === "success"
          ? "Message Sent!"
          : "Send Message"}
      </Button>

      {formStatus === "success" && (
        <p className="mt-4 text-green-600 text-center">
          Thank you for your message! We&apos;ll get back to you soon.
        </p>
      )}

      {formStatus === "error" && (
        <p className="mt-4 text-red-600 text-center">
          There was an error sending your message. Please try again.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
