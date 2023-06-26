/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";

// const reasonTile = () => {
//   <div className="reasonTile">
//     <Image className="reasonIcon" src="" width={0} height={0} alt="" />
//     <h3 className="reasonHeader"></h3>
//     <p className="reasonDesc"></p>
//   </div>;
// };

const WhyUs = ({ reasonInfo }) => {
  return (
    <section
      className="whyUsSection"
      css={css`
        width: 100%;
        position: relative;
        z-index: 32;
        padding: 7vw 11.5vw;
        background-color: var(--lightgrayishblue);
        @media (max-width: 750px) {
          padding: 6.25rem 2.5rem 1rem 2.5rem;
          text-align: center;
          height: auto;
        }
      `}
    >
      <div
        className="whyUsHeaderContainer"
        css={css`
          width: 60%;
          @media (max-width: 750px) {
            width: 100%;
          }
        `}
      >
        <h2
          className="whyUsHeader"
          css={css`
            font-weight: 400;
            font-size: 4.2rem;
            letter-spacing: -0.08ch;
            margin-top: 0.15rem;
            @media (max-width: 750px) {
              font-weight: 400;
              font-size: 3.2rem;
              letter-spacing: -0.03ch;
              margin-top: 0;
            }
          `}
        >
          Why choose Easybank?
        </h2>
        <p
          className="whyUsText"
          css={css`
            letter-spacing: -0.03ch;
            line-height: 2.6ch;
            margin: 2.45rem 0 0 0;
            font-size: 1.8rem;
            color: var(--grayishblue);
            @media (max-width: 750px) {
              line-height: 2.77ch;
              letter-spacing: -0.03ch;
              margin: 1.5rem 0 0 0;
              font-size: 1.5rem;
            }
          `}
        >
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.{" "}
        </p>
      </div>
      <div
        className="reasonTileContainer"
        css={css`
          display: flex;
          width: 100%;
          margin: 7rem 0rem;
          gap: 2.7%;
          @media (max-width: 750px) {
            flex-direction: column;
            width: 100%;
            margin: 5.5rem 0;
            gap: 3.1rem;
          }
        `}
      >
        {reasonInfo.map((reason) => (
          <div
            className="reasonTile"
            css={css`
              width: 25%;
              @media (max-width: 750px) {
                width: 100%;
              }
            `}
          >
            <Image
              className="reasonIcon"
              src={reason.iconPath}
              width={0}
              height={0}
              css={css`
                @media (max-width: 750px) {
                }
              `}
              alt=""
            />
            <h3
              className="reasonHeader"
              key={reason.title}
              css={css`
                font-weight: 400;
                font-size: 2.4rem;
                margin-top: 3.75rem;
                letter-spacing: -0.03ch;
                @media (max-width: 750px) {
                  font-weight: 400;
                  font-size: 2rem;
                  margin-top: 2.25rem;
                  letter-spacing: -0.03ch;
                }
              `}
            >
              {reason.title}
            </h3>
            <p
              className="reasonDesc"
              css={css`
                color: var(--grayishblue);
                line-height: 2.72ch;
                letter-spacing: -0.025ch;
                margin: 2.5rem 0 0 0;
                font-size: 1.6rem;
                @media (max-width: 750px) {
                  line-height: 2.72ch;
                  letter-spacing: -0.025ch;
                  margin: 1.94rem 0 0 0;
                  font-size: 1.5rem;
                }
              `}
            >
              {reason.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WhyUs;
