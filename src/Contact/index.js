import React from "react";
import { useFormik } from "formik";
import validations from "./validations";

const Contact = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
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
    validationSchema: validations,
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
            onBlur={handleBlur("firstName")}
          />
          {errors.firstName && touched.firstName && (
            <div className="text-red-500">{errors.firstName}</div>
          )}
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
            onBlur={handleBlur("lastName")}
          />
          {errors.lastName && touched.lastName && (
            <div className="text-red-500">{errors.lastName}</div>
          )}
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
            onBlur={handleBlur("email")}
          />
          {errors.email && touched.email && (
            <div className="text-red-500">{errors.email}</div>
          )}
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
            rows={4}
            className="form-input w-full border border-gray-400 rounded-md"
            value={values.message}
            disabled={isSubmitting}
            onChange={handleChange("message")}
            onBlur={handleBlur("message")}
          />
          {errors.message && touched.message && (
            <div className="text-red-500">{errors.message}</div>
          )}
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
