import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "PL-AIDS – Partners In Learning About AIDS",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="wrap">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <>
      <div id="logo">
        <h1>
          <a href="/">
            <Image
              src="/logo-1.png"
              alt="pl-aids logo"
              width={210}
              height={65}
            />
          </a>
        </h1>
      </div>
      <div id="navb"></div>
      <div id="navt">
        <ul>
          <li>
            <a href="/hiv-facts/">hiv facts</a>
          </li>
          {/*<li>*/}
          {/*  <a href="/news-events/">news &amp; events</a>*/}
          {/*</li>*/}
          <li>
            <a href="/our-people/">our people</a>
          </li>
          <li>
            <a href="/about/">about</a>
          </li>
          <li>
            <a href="/donate/" id="donate">
              donate
            </a>
          </li>
          {/*<li>*/}
          {/*  <a href="/exposed/ ">exposed to hiv?</a>*/}
          {/*</li>*/}
        </ul>
      </div>
    </>
  );
}

function Footer() {
  return (
    <div id="footer">
      <div id="sitemap">
        <a href="/hiv-facts/">HIV Facts</a>
        {/*<a href="/news-events/">News &amp; Events</a>*/}
        <a href="/our-people/">Our People</a>
        <a href="/about/">About</a>
        <a href="/volunteer/">Volunteer</a>
        <a href="/donate/">Donate</a>
        {/*<a href="/submission/">HIV Exposure Form</a>*/}
        <a href="http://www.facebook.com/pages/PL-AIDS/133647486671333">
          Facebook
        </a>
      </div>
      <div id="copy">&copy; 2011-2024</div>
    </div>
  );
}
