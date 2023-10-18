"use client";
import { useState } from "react";

export default function ForgotPassword() {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div id="forgot-password-container" className="">
      <header className="h-14 flex border items-center px-8 py-2 justify-between z-10">
        <div id="logo" className="flex">
          <span className="font-mono text-2xl">Swiggy</span>
        </div>
      </header>
      <div className="flex flex-col items-center justify-between p-24">
        <header className="flex items-end justify-between w-96">
          <h1 className="font-body text-5xl">Forgot your password?</h1>
        </header>
        <div className="my-4 w-96 font-display flex items-center">
          <div>
            <span className="">
              Enter your email address below and we will send you a link where
              you can enter a new password.
            </span>
          </div>
        </div>
        <div className="w-96 flex flex-col justify-center items-center">
          <div className="my-4">
            <input
              className="font-body border w-96 h-14 p-4"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="my-4 w-96 font-body flex items-center justify-center">
            <button
              className="font-display text-lg border w-96 p-4 bg-button-background text-white hover:bg-button-hover hover:text-white cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            >
              Restore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
