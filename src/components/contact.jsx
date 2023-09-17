import React, { useState } from 'react';


export default function Contact() {

    return (
        <div className="max-w-md mx-auto h-[75vh]">
            <h2 className="text-5xl font-semibold m-20 flex justify-center">Contact Me</h2>

            <form name="Contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="Contact" />
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <textarea name="message" placeholder="Message"></textarea>
                <div className="form-btn"><button type="submit">SUBMIT</button></div>
            </form>
        </div>
    );
}



