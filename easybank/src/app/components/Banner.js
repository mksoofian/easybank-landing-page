/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import Btn from "./Btn";

const Banner = () => {
  const ReqBtn = (
    <Btn
      link="#"
      color="white"
      cssPlus="
        margin: 3.6rem 0 0 0;
		width: fit-content;
		  @media (max-width: 750px) {margin: 3.1rem auto 6.5rem auto;};
		"
    >
      {" "}
      Request Invite
    </Btn>
  );
  return (
    <section
      className="bannerSection"
      css={css`
        width: 100%;
        height: 45.6vw;
        display: flex;
        flex-direction: row-reverse;
        background-color: var(--verylightgrey);
        @media (max-width: 750px) {
          flex-direction: column;
          height: auto;
        }
      `}
    >
      <div
        className="bannerImages"
        css={css`
          position: relative;
          width: 78%;
          height: auto;
          display: flex;
          align-item: center;
          justify-content: center;
          //   @media (max-width: 1250px) {
          //     width: 52%;
          //   }
          @media (max-width: 750px) {
            width: 100%;
            height: 79.5vw;
          }
        `}
      >
        <div
          className="bannerBgContainer"
          css={css`
            width: 100%;
            height: 100%;
            @media (min-width: 750px) {
            }
          `}
        >
          {" "}
          <Image
            className="bannerMobileBg"
            src="/bg-intro-mobile.svg"
            width="0"
            height="0"
            css={css`
              width: 100%;
              height: auto;
              z-index: 50;
              display: none;
              position: relative;
              @media (max-width: 750px) {
                display: flex;
                top: -6.45rem;
              }
            `}
            alt="banner background mobile design"
          />
          <Image
            className="bannerDesktopBg"
            src="/bg-intro-desktop.svg"
            width={0}
            height={0}
            css={css`
              width: 100%;
              height: auto;
              z-index: 50;
              scale: 1.58;
              transform: translate(10vw, -3.1vw);
              position: relative;
              z-index: 30;
              @media (max-width: 750px) {
                display: none;
                scale: 1;
                transform: translate(0, 0);
              }
            `}
            alt="banner background desktop design"
          />
        </div>

        <Image
          className="phoneMockups"
          src="/image-mockups.png"
          width={2000}
          height={2000}
          css={css`
            transform: translate(10.5vw, -8.5vw);
            width: 95%;
            height: auto;
            z-index: 55;
            position: absolute;
            display: flex;
            @media (max-width: 750px) {
              bottom: 0;
              width: 92%;
              transform: translate(0, 0);
            }
          `}
          alt="banner background overlay of phones with app loaded"
        />
      </div>
      <div
        className="bannerTextArea"
        css={css`
          margin: 11.7vw 0rem 0rem 11.5vw;
          width: 45%;
          @media (max-width: 1100px) {
            margin: 5vw 0rem 0rem 11.5vw;
            width: 52%;
          }
          @media (max-width: 900px) {
            margin: 2vw 0rem 0rem 11.5vw;
          }
          @media (max-width: 750px) {
            padding: 2.5rem;
            text-align: center;
            margin: 0;
            width: 100%;
          }
        `}
      >
        <h1
          className="bannerHeader"
          css={css`
            color: var(--darkblue);
            font-size: 5.6rem;
            font-weight: 300;
            letter-spacing: -0.03ch;
            margin-bottom: 2rem;
            @media (max-width: 1230px) {
              font-size: 4.8rem;
            }
            @media (max-width: 950px) {
              font-size: 4.2rem;
            }
            @media (max-width: 750px) {
              font-size: 3.9rem;
              margin-bottom: 1.77rem;
              letter-spacing: 0ch;
            }
          `}
        >
          Next generation digital banking{" "}
        </h1>{" "}
        <p
          css={css`
            color: var(--grayishblue);
            font-size: 1.8rem;
            padding-right: 1.1vw;
            font-weight: 300;
            line-height: 2.6ch;
            margin: 2.25rem 0;
            letter-spacing: -0.02ch;
            @media (max-width: 1230px) {
              font-size: 1.4rem;
            }
            @media (max-width: 750px) {
              font-size: 1.5rem;
              line-height: 2.5rem;
              margin-bottom: 3rem;
              padding-right: 0;
              margin: 1.8rem 0;
            }
          `}
        >
          {" "}
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        {ReqBtn}
      </div>
    </section>
  );
};
export default Banner;
