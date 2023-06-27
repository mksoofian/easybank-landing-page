/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import Btn from "../components/Btn";

const Footer = ({ children }) => (
  <footer
    css={css`
      width: 100%;
      height: 19rem;
      background-color: var(--darkblue);
      display: flex;
      align-items: center;
      //   justify-content: space-between;
      z-index: 94;
      padding: 4.5rem 11.5vw 5rem 11.5vw;
      @media (max-width: 750px) {
        flex-direction: column;
        justify-content: center;
        height: auto;
        padding: 4rem 11.5vw;
      }
    `}
  >
    <div
      className="container1"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        // gap: 2rem;
        height: 100%;
        justify-content: space-between;
        @media (max-width: 750px) {
          gap: 8.5vw;
        }
      `}
    >
      <Image
        src={"/logo-footer.svg"}
        alt="logo"
        width="0"
        height="0"
        css={css`
          width: 14rem;
          height: auto;
          margin: 0 auto 0 0;
          @media (max-width: 750px) {
            width: 14rem;
            height: auto;
            margin: 0;
          }
        `}
      />
      {children[0]}
    </div>
    <div
      className="container2"
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        // margin: 0 10rem 0 0;
        @media (max-width: 750px) {
          text-align: center;
          margin: 3.65rem 0 3.65rem 0;
          gap: 1rem;
        }
      `}
    >
      {children[1]}
    </div>
    <div
      className="container3"
      css={css`
        display: flex;
        flex-direction: column;
        height: 95%;
        justify-content: space-between;
        margin: 0 0 0 auto;
        @media (max-width: 750px) {
          align-items: center;
          height: auto;
          margin: 0;
        }
      `}
    >
      {children[2]}
      <p
        css={css`
          color: var(--white);
          letter-spacing: -0.03ch;
          @media (max-width: 750px) {
            margin-top: 3rem;
          }
        `}
      >
        © Easybank. All Rights Reserved
      </p>
    </div>
  </footer>
);

export default Footer;
