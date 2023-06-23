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
        height: 45.6vw;
        // padding: 7.5vw 11.7vw;
        background-color: var(--lightgrayishblue);
        @media (max-width: 750px) {
          padding: 2.5rem;
        }
      `}
    >
      <div className="whyUsHeaderContainer">
        <h2 className="whyUsHeader">Why choose Easybank?</h2>
        <p className="whyUsText">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.{" "}
        </p>
      </div>
      <div
        className="reasonTileContainer"
        css={css`
          display: flex;
          width: 20%;
        `}
      >
        {reasonInfo.map((reason) => (
          <div className="reasonTile" css={css``}>
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
            <h3 className="reasonHeader" key={reason.title}></h3>
            <p className="reasonDesc">{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WhyUs;
