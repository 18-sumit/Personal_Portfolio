"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sentMessage, setSentMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSentMessage("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          setSentMessage("Failed to send message. Please try again.");
          console.error("EmailJS error:", error);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      <div className="max-w-2xl mx-auto p-6 relative z-10">
        <h1 className="text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Contact Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm md:text-base text-center">
          Lets connect and create something amazing together.
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col md:flex-row gap-4 mt-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Say Hi! enter your Name "
            required
            className="rounded-lg border p-3 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full bg-neutral-950 placeholder:text-neutral-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email here"
            required
            className="rounded-lg border p-3 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full bg-neutral-950 placeholder:text-neutral-700"
          />
          <input
            type="text"
            name="message"
            placeholder="Enter your message here"
            required
            className="rounded-lg border p-3 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full bg-neutral-950 placeholder:text-neutral-700"
          />
          <button
            type="submit"
            disabled={isSending}
            className="bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg py-3 px-6 font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>

        {sentMessage && (
          <p className="text-sm text-center text-teal-400 mt-3">{sentMessage}</p>
        )}

        <p className="text-neutral-700 text-xs mt-3 text-center">
          I respect your privacy. No spam, ever.
        </p>
      </div>
    </div>
  );
}
