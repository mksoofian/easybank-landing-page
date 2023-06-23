"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import Image from "next/image";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Btn from "./components/Btn";
import Banner from "./components/Banner";
import WhyUs from "./components/WhyUs";

// Assets
import iconOnlineBanking from "../../public/icon-online.svg";
import iconBudgeting from "../../public/icon-budgeting.svg";
import iconOnboarding from "../../public/icon-onboarding.svg";
import iconApi from "../../public/icon-api.svg";

export default function Home() {
  const linkedItems = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Careers", href: "#" },
  ];
  const reasons = [
    {
      title: "Online Banking",
      iconPath: iconOnlineBanking,
      text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      title: "Simple Budgeting",
      iconPath: iconBudgeting,
      text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
      title: "Fast Onboarding",
      iconPath: iconOnboarding,
      text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      title: "Open API",
      iconPath: iconApi,
      text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
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
        <WhyUs reasonInfo={reasons} />
      </main>
      <footer> This is the Footer section</footer>
    </>
  );
}
