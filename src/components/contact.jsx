import React from "react";

export default function Contact() {
  return (
    <div className="max-w-md mx-auto h-[75vh]">
      <h2 className="text-5xl font-semibold m-20 flex justify-center">
        Contact Me
      </h2>
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label>
            First name <br />
            <input type="text" name="first-name" />
          </label>
        </div>

        <div>
          <label htmlFor="email">Email</label> <br />
          <input id="email" type="email" name="email" />
        </div>

        <div>
          <label>
            Message <br />
            <textarea name="comments"></textarea>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
