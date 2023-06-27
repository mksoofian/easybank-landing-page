/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";

const Header = ({ children }) => (
  <header
    css={css`
      position: sticky;
      width: 100%;
      background-color: var(--white);
      //   box-shadow: 0rem 0rem 2rem 0rem rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.8rem;
      padding: 0rem 11.5vw;
      z-index: 94;
      @media (max-width: 850px) {
        padding: 2rem 5vw;
      }
      @media (max-width: 600px) {
        padding: 2.25rem 6.25vw;
      }
    `}
  >
    <Image
      src={"/logo-header.svg"}
      alt="logo"
      width="0"
      height="0"
      css={css`
        fill: black;
        width: auto;
        height: auto;
      `}
    />

    {children}
  </header>
);

export default Header;
