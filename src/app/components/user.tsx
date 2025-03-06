'use client'
import { useState } from "react";
import Image from "next/image";

export default function User() {
  const [hoverText, setHoverText] = useState("Hi, My name is");
  const [mainText, setMainText] = useState("Lance Parker");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg text-center">
        <div className="mb-4">
          {/* Placeholder for the person's photo */}
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-300"></div>
        </div>
        <p className="text-gray-600">{hoverText}</p>
        <h1 className="text-2xl font-bold mb-4">{mainText}</h1>
        <div className="flex justify-center gap-4">
          <div
            className="hover:animate-pulse hover:bg-green-500 rounded-full p-2"
            onMouseEnter={() => {
              setHoverText("Hi, My name is");
              setMainText("Lance Parker");
            }}
            
          >
            <Image src="/name.png" alt="Person" width={50} height={24} />
          </div>
          <div
            className="hover:animate-pulse hover:bg-green-500 rounded-full p-2"
            onMouseEnter={() => {
              setHoverText("My email address is");
              setMainText("lance.parker@example.com");
            }}
            
          >
            <Image src="/email.png" alt="Email" width={50} height={24} />
          </div>
          <div
            className="hover:animate-pulse hover:bg-green-500 rounded-full p-2"
            onMouseEnter={() => {
              setHoverText("My birthday is");
              setMainText("January 1, 1990");
            }}
            
          >
            <Image src="/birthday.png" alt="Birthday" width={50} height={24} />
          </div>
          <div
            className="hover:animate-pulse hover:bg-green-500 rounded-full p-2"
            onMouseEnter={() => {
              setHoverText("My address is");
              setMainText("123 Main St, Anytown, USA");
            }}
            
          >
            <Image src="/address.png" alt="Address" width={50} height={24} />
          </div>
          <div
            className="hover:animate-pulse hover:bg-green-500 rounded-full p-2"
            onMouseEnter={() => {
              setHoverText("My phone number is");
              setMainText("(123) 456-7890");
            }}
            
          >
            <Image src="/phone.png" alt="Phone" width={50} height={24} />
          </div>
          <div
            className="hover:animate-pulse hover:bg-green-500 rounded-full p-2"
            onMouseEnter={() => {
              setHoverText("My password is");
              setMainText("happy1");
            }}
            
          >
            <Image src="/password.png" alt="Password" width={50} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
}