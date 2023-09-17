import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        name: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const newErrors = {};

        if (name.trim() === '') {
            newErrors.name = 'Name is required';
        }

        if (email.trim() === '') {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Invalid email format';
        }

        if (message.trim() === '') {
            newErrors.message = 'Message is required';
        }

        if (Object.keys(newErrors).length === 0) {
            console.log(formData);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="max-w-md mx-auto h-[75vh]">
            <h2 className="text-5xl font-semibold m-20 flex justify-center">Contact Me</h2>

            <form
                onSubmit={handleSubmit}
                action="/send-email"
                method="POST"
                className="space-y-4 mx-8"
                data-netlify="true"
            >

                <input type="hidden" name="form-name" value="contact" />

                <div className="flex flex-col">
                    <label htmlFor="name" className="text-lg font-medium mb-1">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                    />
                    {errors.name && (
                        <p className="text-red-500 mt-1">{errors.name}</p>
                    )}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg font-medium mb-1">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                    />
                    {errors.email && (
                        <p className="text-red-500 mt-1">{errors.email}</p>
                    )}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-lg font-medium mb-1">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 mt-1">{errors.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    href="contact"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
                    focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm 
                    px-5 py-2.5 text-center mr-2 mb-2"
                >
                    Submit
                </button>
            </form>


        </div>
    );

}
