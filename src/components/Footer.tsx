import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-main text-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <Link href="/">
              <h1 className="text-2xl font-bold">Logo</h1>
            </Link>
            <ul className="flex gap-4">
              <li>
                <Link href={"/"}>
                  <Image
                    src={"/linkedin.svg"}
                    alt="logo"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Image
                    src={"/youtube.svg"}
                    alt="logo"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Image
                    src={"/spotify.svg"}
                    alt="logo"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Image
                    src={"/x.svg"}
                    alt="logo"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Image
                    src={"/tiktok.svg"}
                    alt="logo"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Image
                    src={"/instagram.svg"}
                    alt="logo"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                </Link>
              </li>
            </ul>
            <p className="text-sm">We run on Intercom</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-lg">Resources</h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href={"/"}>Product Changes</Link>
                </li>
                <li>
                  <Link href={"/"}>Blog</Link>
                </li>
                <li>
                  <Link href={"/"}>Webinars</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-lg">Support</h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href={"/"}>Developers</Link>
                </li>
                <li>
                  <Link href={"/"}>Community</Link>
                </li>
                <li>
                  <Link href={"/"}>Academy</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-lg">Company</h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/"}>About</Link>
                </li>
                <li>
                  <Link href={"/"}>Terms</Link>
                </li>
                <li>
                  <Link href={"/"}>Privacy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
