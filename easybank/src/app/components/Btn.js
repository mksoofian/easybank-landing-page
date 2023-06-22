/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Btn = ({ color, link, children, cssPlus }) => {
  return (
    <button
      css={css`
        ${cssPlus}
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.25rem 3.15rem;
        font-size: 1.8rem;
        border-radius: 3rem;
        background: rgb(49, 211, 92);
        background: linear-gradient(
          90deg,
          rgba(49, 211, 92, 1) 35%,
          rgba(43, 183, 218, 1) 100%
        );
        color: ${color};
        cursor: pointer;
        border: none;
        &:hover {
          opacity: 0.75;
        }
        height: fit-content;
      `}
    >
      <a href={link}>{children}</a>
    </button>
  );
};
export default Btn;
