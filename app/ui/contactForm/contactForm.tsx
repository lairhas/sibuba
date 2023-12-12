'use client'

import { useState } from "react"

export default function ContactForm() {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        console.log("Full name: ", fullname);
        console.log("Email: ", email);
        console.log("Message: ", message);

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                fullname, email, message,
            }),
        });

        const { msg, success } = await res.json();

        if (success) {
            setFullname("");
            setEmail("");
            setMessage("");
            alert(msg)
        } else {
            alert("Please input your ".concat(msg).concat("."))
        }
    }

    return (
        <form id="contact" className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
                <label className="input-label" htmlFor="name">Full Name:</label>
                <input
                    type="text"
                    id="name"
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                    />
            </div>
            <div className="flex flex-col gap-1">
                <label className="input-label" htmlFor="email">Email Address:</label>
                <input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
            </div>
            <div className="flex flex-col gap-1">
                <label className="input-label" htmlFor="message">Your Message:</label>
                <textarea
                    className="resize-none hover:resize-y"
                    rows={6}
                    id="message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
            </div>
            <button type="submit" className="p-2 bg-[#04724d] text-[#f2f2f2] rounded font-medium hover:bg-[#005632]">Send</button>
        </form>
    )
}