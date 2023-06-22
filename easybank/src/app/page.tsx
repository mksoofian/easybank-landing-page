"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import Image from "next/image";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Btn from "./components/Btn";
import Banner from "./components/Banner";
export default function Home() {
  const linkedItems = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Careers", href: "#" },
  ];
  return (
    <>
      <Header>
        <Navigation linkItems={linkedItems} />
        <Btn
          link="#"
          color="white"
          cssPlus="@media (max-width: 750px) {display: none};"
        >
          {" "}
          Request Invite
        </Btn>
      </Header>
      <main>
        <Banner />
      </main>
      <footer> This is the Footer section</footer>
    </>
  );
}
