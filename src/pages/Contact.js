import React from "react";
import { useFormik } from "formik";

const Contact = () => {
  const { handleSubmit, handleChange, values, isSubmitting } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));
      console.log(values);
      bag.resetForm();
    },
  });
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Page</h1>
      <form onSubmit={handleSubmit} className="max-w-sm">
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-bold mb-1">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Jane"
            className="form-input w-full border border-gray-400 rounded-md"
            value={values.firstName}
            disabled={isSubmitting}
            onChange={handleChange("firstName")}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block font-bold mb-1">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            className="form-input w-full border border-gray-400 rounded-md"
            value={values.lastName}
            disabled={isSubmitting}
            onChange={handleChange("lastName")}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            className="form-input w-full border border-gray-400 rounded-md"
            value={values.email}
            disabled={isSubmitting}
            onChange={handleChange("email")}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-bold mb-1">
            Message
          </label>
          <input
            id="message"
            name="message"
            placeholder="Message"
            type="message"
            as="textarea"
            rows={4}
            className="form-input w-full border border-gray-400 rounded-md"
            value={values.message}
            disabled={isSubmitting}
            onChange={handleChange("message")}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
