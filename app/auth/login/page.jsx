"use client";
import { Checkbox, Typography } from "@cred/neopop-web/lib/components";
import {
  FontVariant,
  colorGuide,
  colorPalette,
} from "@cred/neopop-web/lib/primitives";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", user);
      if (response.status === 200) {
        router.push("/profile");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div id="login-container" className="">
      <header className="h-14 flex border items-center px-8 py-2 justify-between z-10">
        <div id="logo" className="flex">
          <span className="font-mono text-2xl">Swiggy</span>
        </div>
      </header>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <header className="flex items-end justify-between w-96">
          <h1 className="font-body text-5xl">Log in</h1>
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
        <div className="my-4 w-96 font-display flex items-center">
          <div>
            <span className="mr-2">Create an account</span>
          </div>
          <div>
            <Link
              className="font-display text-sm text-blue-600"
              href="/auth/sign-up"
            >
              Signup
            </Link>
          </div>
        </div>
        <div className="w-96 flex flex-col justify-center items-center">
          <div className="my-4">
            <input
              className="font-body border w-96 h-14 p-4 focus:outline-none focus:ring-2 focus:ring-white"
              type="text"
              id="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="my-4">
            <input
              className="font-body border w-96 h-14 p-4 focus:outline-none focus:ring-2 focus:ring-white"
              type="password"
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="my-4 w-96 font-display flex justify-between items-center">
            <div>
              <Checkbox
                isChecked={isChecked}
                colorConfig={colorGuide.lightComponents.checkbox}
                handleChange={handleChange}
              >
                <Typography
                  {...FontVariant.BodyRegular16}
                  color={colorPalette.popBlack[100]}
                >
                  Remember me
                </Typography>
              </Checkbox>
            </div>
            <div>
              <Link
                className="font-display text-sm text-blue-600"
                href="/auth/forgot-password"
              >
                Lost Password?
              </Link>
            </div>
          </div>
          <div className="my-4 w-96 font-body flex items-center justify-center">
            <button
              className="font-display text-xl border w-96 p-4 bg-button-background text-white hover:bg-button-hover hover:text-white cursor-pointer"
              onClick={onSubmit}
              disabled={buttonDisabled}
            >
              {loading ? <PropagateLoader /> : "Sign In"}
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
              Log in with Google
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
              Sign in with LinkedIn
            </Link>
          </div>
          <div>
            <p className="font-display text-xs">
              By clicking Sign in with LinkedIn, you agree to let Toptal store
              your LinkedIn profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
