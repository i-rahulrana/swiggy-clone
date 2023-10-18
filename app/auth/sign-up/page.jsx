"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    isVerified: false,
    isAdmin: false,
  });

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.firstName.length > 0 &&
      user.lastName.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  // On clicking the signup button
  const onSubmit = async (e) => {
    console.log("Button Clicked");
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post("/api/sign-up", user);
      if (response.status === 200) {
        router.push("/login");
      }
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div id="signup-container" className="">
      <header className="h-14 flex border items-center px-8 py-2 justify-between z-10">
        <div id="logo" className="flex">
          <span className="font-mono text-2xl">Swiggy</span>
        </div>
      </header>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <header className="flex items-end justify-between w-96">
          <h1 className="font-body text-5xl">Sign up</h1>
          <div className="flex items-center">
            <Image
              className="mr-2"
              src="/icons/lock.png"
              alt="lock-icon"
              width={16}
              height={16}
            />
            <p className="font-body text-base text-gray-400 m-0 p-0">
              Secured connection
            </p>
          </div>
        </header>
        <div
          id="existing-user"
          className="my-4 w-96 font-display flex items-center"
        >
          <div>
            <span className="mr-2">Already a registered user?</span>
          </div>
          <div>
            <Link
              className="font-display text-sm text-blue-600"
              href="/auth/login"
            >
              Login
            </Link>
          </div>
        </div>
        <div
          typeof="onSubmit"
          id="signup-form"
          className="w-96 flex flex-col justify-center items-center"
        >
          <div id="email" className="my-4">
            <input
              className="font-body border w-96 h-14 p-4 focus:outline-none focus:ring-2 focus:ring-white"
              type="text"
              id="email"
              value={user.email}
              placeholder="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div id="firstName" className="my-4">
            <input
              className="font-body border w-96 h-14 p-4 focus:outline-none focus:ring-2 focus:ring-white"
              type="text"
              id="firstName"
              value={user.firstName}
              placeholder="First Name"
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </div>
          <div id="lastName" className="my-4">
            <input
              className="font-body border w-96 h-14 p-4 focus:outline-none focus:ring-2 focus:ring-white"
              type="text"
              id="lastName"
              value={user.lastName}
              placeholder="Last Name"
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
          <div id="password" className="my-4">
            <input
              className="font-body border w-96 h-14 p-4 focus:outline-none focus:ring-2 focus:ring-white"
              type="password"
              id="password"
              value={user.password}
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div
            id="signup-button"
            className="my-4 w-96 font-body flex items-center justify-center"
          >
            <button
              className="font-display text-xl border w-96 p-4 bg-button-background text-white flex items-center justify-center hover:bg-button-hover hover:text-white cursor-pointer"
              onClick={onSubmit}
              disabled={buttonDisabled}
            >
              {loading ? <BounceLoader className={""} /> : "Sign Up"}
            </button>
          </div>
          <div
            id="divider"
            className="after:bg-gray-500 before:bg-gray-500 w-96 flex items-center justify-center"
          >
            <span className="font-display text-xs p-2 text-gray-500 border rounded-full border-gray-500">
              OR
            </span>
          </div>
          <div className="my-4 w-96 font-body flex items-center justify-center">
            <Link
              href=""
              className="flex items-center justify-center font-display text-lg border w-96 p-4 text-gray-500"
            >
              <Image
                src="https://assets.toptal.io/assets/front/static/platform/icons/social/google_30739e.svg"
                alt="google-logo"
                width={14}
                height={14}
                className="mr-4"
              />
              Sign Up with Google
            </Link>
          </div>
          <div className="my-4 w-96 font-body flex items-center justify-center">
            <Link
              href=""
              className="flex items-center justify-center font-display text-lg border w-96 p-4 text-white bg-blue-600"
            >
              <Image
                src="https://assets.toptal.io/assets/front/static/platform/icons/social/linkedin_0eebe0.svg"
                alt="linkedin-logo"
                width={14}
                height={14}
                className="mr-4"
              />
              Sign Up with LinkedIn
            </Link>
          </div>
          <div>
            <p className="font-display text-xs">
              By clicking Sign in with LinkedIn, you agree to let Swiggy store
              your LinkedIn profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
