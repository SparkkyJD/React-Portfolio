import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="max-w-md mx-auto h-[100vh] dark:text-white">
      <h2 className="text-5xl font-semibold m-20 flex justify-center">
        Contact Me
      </h2>
      <form
        name="contact"
        method="post"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <input
          type="hidden"
          name="form-name"
          value="contact"
          className="mb-4"
        />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          <input
            type="text"
            name="first-name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="First Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            name="comments"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
