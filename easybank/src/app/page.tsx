"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import Image from "next/image";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Btn from "./components/Btn";
import Banner from "./components/Banner";
import WhyUs from "./components/WhyUs";
import LatestArticles from "./components/LatestArticles";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import FooterNav from "./components/Navigation-Footer";

// Assets
import iconOnlineBanking from "../../public/icon-online.svg";
import iconBudgeting from "../../public/icon-budgeting.svg";
import iconOnboarding from "../../public/icon-onboarding.svg";
import iconApi from "../../public/icon-api.svg";
import imageConfetti from "../../public/image-confetti.jpg";
import imageCurrency from "../../public/image-currency.jpg";
import imagePlane from "../../public/image-plane.jpg";
import imageRestaurant from "../../public/image-restaurant.jpg";
import iconFacebook from "../../public/icon-facebook.svg";
import iconYoutube from "../../public/icon-youtube.svg";
import iconTwitter from "../../public/icon-twitter.svg";
import iconPintrest from "../../public/icon-pinterest.svg";
import iconInstagram from "../../public/icon-instagram.svg";

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
  const articles = [
    {
      imagePath: imageCurrency,
      imageAlt: "Image of various currencies",
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … ",
    },
    {
      imagePath: imageRestaurant,
      imageAlt: "Image of plated food at a restaurant",
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      imagePath: imagePlane,
      imageAlt: "Image of an aircraft",
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … ",
    },
    {
      imagePath: imageConfetti,
      imageAlt: "Image of party confetti with a blue backdrop",
      author: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...",
    },
  ];
  const linkedItems2 = [
    { title: "About Us", href: "#" },
    { title: "Contact", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Support", href: "#" },
    { title: "Privacy Policy", href: "#" },
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
        <LatestArticles articleInfo={articles} />
      </main>
      <Footer>
        <Socials />
        <FooterNav linkItems={linkedItems2} />
        <Btn
          link="#"
          color="white"
          cssPlus="
		  margin: 0 0 0 auto;
		  @media (max-width: 750px) {width: fit-content; margin: 0;};"
        >
          {" "}
          Request Invite
        </Btn>
      </Footer>
    </>
  );
}
