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
	  	margin: 2.1rem 0;
		width: fit-content;
		margin: auto;
		//   @media (min-width: 750px) {display: none};
		  "
    >
      {" "}
      Request Invite
    </Btn>
  );
  return (
    <div
      className="bannerSection"
      css={css`
        width: 100%;
        height: 60vh;
        display: flex;
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
          width: 50%;
          height: auto;
          display: flex;
		  align-item: center:
		  justify-content: center;
          @media (max-width: 750px) {
            width: 100%;
    		height: 79.5vw;
			justify-content: center;

          }
        `}
      >
        <Image
          className="bannerMobileBg"
          src="/bg-intro-mobile.svg"
          width="0"
          height="0"
          css={css`
            width: 100%;
            height: auto;
            z-index: 50;
            position: absolute;
            display: none;
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
            position: absolute;
            @media (max-width: 750px) {
              display: none;
            }
          `}
          alt="banner background desktop design"
        />
        <Image
          className="phoneMockups"
          src="/image-mockups.png"
          width={1000}
          height={1000}
          css={css`
            width: 100%;
            height: auto;
            z-index: 55;
            position: absolute;
            display: flex;
            @media (max-width: 750px) {
              //   display: none;
              //   transform: translateY(-5%);
              bottom: 0;
              width: 92%;
            }
          `}
          alt="banner background overlay of phones with app loaded"
        />
      </div>
      <div
        className="bannerTextArea"
        css={css`
          //   width: 100%s
          text-align: center;
          @media (max-width: 750px) {
            // height: 45vh;
            padding: 2.5rem;
          }
        `}
      >
        <h1
          className="bannerHeader"
          css={css`
            color: var(--darkblue);
            font-size: 3.9rem;
            font-weight: 300;
            @media (max-width: 750px) {
              margin-bottom: 1.77rem;
            }
          `}
        >
          Next generation digital banking{" "}
        </h1>{" "}
        <p
          css={css`
            color: var(--grayishblue);
            @media (max-width: 750px) {
              line-height: 2.5rem;
              margin-bottom: 3rem;
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
    </div>
  );
};
export default Banner;
