import React from 'react';

export default function Contact() {


    return (
        <div className="max-w-md mx-auto h-[75vh]">
            <h2 className="text-5xl font-semibold m-20 flex justify-center">Contact Me</h2>

            <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>


        </div>
    );

}
