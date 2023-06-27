/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";

// Assets
import iconFacebook from "../../../public/icon-facebook.svg";
import iconYoutube from "../../../public/icon-youtube.svg";
import iconTwitter from "../../../public/icon-twitter.svg";
import iconPintrest from "../../../public/icon-pinterest.svg";
import iconInstagram from "../../../public/icon-instagram.svg";

const socialMedia = [
  {
    icon: iconFacebook,
    alt: "facebook icon",
  },
  {
    icon: iconYoutube,
    alt: "youtube icon",
  },
  {
    icon: iconTwitter,
    alt: "twitter icon",
  },
  {
    icon: iconPintrest,
    alt: "pintrest icon",
  },
  {
    icon: iconInstagram,
    alt: "instagram icon",
  },
];

const Socials = () => (
  <>
    <div
      className="socialMediaContainer"
      css={css`
        width: fit-content;
      	display: flex;
      	align-items: center;
	  	gap: 1.65rem;
            //   @media (max-width: 750px) {

              }
            `}
    >
      {socialMedia.map((socialMedia) => (
        <Image
          className="socialMediaIcons"
          src={socialMedia.icon}
          key={socialMedia.alt}
          width={0}
          height={0}
          css={css`
            @media (max-width: 750px) {
              width: 2.35rem;
              height: auto;
            }
          `}
          alt={socialMedia.alt}
        />
      ))}
    </div>
  </>
);

export default Socials;
