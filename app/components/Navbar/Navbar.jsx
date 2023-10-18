"use client";
import { Button } from "@cred/neopop-web/lib/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="h-14 flex border items-center px-8 py-2 justify-between z-10">
      <div id="logo" className="flex">
        <span className="font-mono text-2xl">Swiggy</span>
      </div>
      <div id="nav-link" className="flex items-center justify-center mx-4">
        <div id="nav-search" className="font-body text-xl mx-4">
          <a href="" className="flex items-center">
            <Image
              className="mr-2"
              src="/icons/search.png"
              alt="search-icon"
              width={14}
              height={14}
            />
            <span className="ml-1 text-gray-700">Search</span>
          </a>
        </div>
        <div id="nav-search" className="font-body text-xl mx-4">
          <a href="" className="flex items-center">
            <Image
              className="mr-2"
              src="/icons/discount.png"
              alt="offers-icon"
              width={14}
              height={14}
            />
            <span className="ml-1 text-gray-700">Offers</span>
          </a>
        </div>
        <div id="nav-search" className="font-body text-xl mx-4">
          <a href="" className="flex items-center">
            <Image
              className="mr-2"
              src="/icons/life-ring.png"
              alt="help-icon"
              width={14}
              height={14}
            />
            <span className="ml-1 text-gray-700">Help</span>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button
          className="font-body"
          variant="primary"
          kind="elevated"
          size="medium"
          colorMode="dark"
          onClick={() => {
            router.push("/auth/login");
          }}
        >
          Sign In
        </Button>
      </div>
    </header>
  );
}
