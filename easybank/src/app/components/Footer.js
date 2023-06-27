/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import Btn from "../components/Btn";

const Footer = ({ children }) => (
  <footer
    css={css`
      width: 100%;
      background-color: var(--darkblue);
      height: auto; // UPDATE THIS ASAP
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4rem 11.5vw;
      z-index: 94;
      @media (max-width: 750px) {
        flex-direction: column;
        justify-content: center;
      }
    `}
  >
    <div
      className="container1"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
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
          @media (max-width: 750px) {
            width: 14rem;
            height: auto;
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
        text-align: center;
        @media (max-width: 750px) {
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
        align-items: center;
        @media (max-width: 750px) {
        }
      `}
    >
      {children[2]}
      <p
        css={css`
          color: var(--white);
          etter-spacing: -0.03ch;
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
