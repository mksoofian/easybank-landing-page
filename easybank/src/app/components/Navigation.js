/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import Btn from "./Btn";
import Image from "next/image";
import { gsap } from "gsap";

const Navigation = ({ linkItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //   console.log(isMenuOpen); // for debugging

  const closeMenuToggleRef = useRef(null);

  const rotateAndFade = () => {
    if (closeMenuToggleRef.current) {
      gsap.to(closeMenuToggleRef.current, {
        duration: 0.5,
        rotation: isMenuOpen ? 0 : 90,
        opacity: isMenuOpen ? 1 : 0,
      });
    }
  };

  useEffect(() => {
    if (closeMenuToggleRef.current) {
      rotateAndFade();
    }
  }, [isMenuOpen]);

  const CloseMobileNavIcon = (
    <Image
      ref={closeMenuToggleRef}
      width={0}
      height={0}
      src={"/icon-close.svg"}
      alt="close mobile navigation menu icon"
      onClick={handleMenuToggle}
      css={css`
        @media (max-width: 750px) {
          width: auto;
          height: auto;
        }
      `}
    />
  );

  const HamburgerIcon = (
    <div
      css={css`
        width: 2.4rem;
        height: 1px;
        background-color: black;
        position: relative;
      `}
    >
      <div
        className="openMenuToggle"
        css={css`
          width: 2.4rem;
          height: 1px;
          background-color: black;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: transform 0.3s ease-in-out;
          &::before,
          &::after {
            content: "";
            width: 2.4rem;
            height: 1px;
            background-color: black;
            position: absolute;
            transition: transform 0.3s ease-in-out;
          }
          &::before {
            transform: translateY(-5px);
          }
          &::after {
            transform: translateY(5px);
          }
        `}
      />
    </div>
  );

  const ReqBtn = (
    <Btn
      link="#"
      color="white"
      cssPlus="
	  	margin: 2.1rem 0;
		  @media (min-width: 750px) {display: none};
		  "
    >
      {" "}
      Request Invite
    </Btn>
  );

  return (
    <nav css={css``}>
      <div
        className="innerNavContainer"
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: -25;

          @media (max-width: 750px) {
            position: fixed;
            inset: 6.5rem 0rem 0rem 0rem;
            display: ${isMenuOpen ? "flex" : "none"};
            align-items: center;
            background: ${isMenuOpen
              ? "rgb(255,255,255);background: linear-gradient(180deg, rgba(255,255,255,0) 33%, rgba(255,255,255,1) 100%);"
              : ""};
          }
        `}
      >
        <ul
          id="primary-navigation"
          className={`menu ${isMenuOpen ? "open" : ""}`}
          css={css`
		  position: relative;
          display: flex;
          padding: 0 0 0 2rem;
          align-items: center;
          @media (max-width: 750px) {
            display: none;
            &.open {
              display: flex;
			  flex-direction: column;
			  align-items: center;
			  justify-content: space-evenly;
			  background-color: white;
			  z-index: 98;
			  height: 26.6rem;
			  width: 32.8rem;
			  border-radius: 0.5rem;
			  padding: ${isMenuOpen ? "1rem 1rem 0.75rem 1rem" : "0"};
    		  margin-top: 3.25vh;
            }
			
        `}
        >
          {linkItems.map((linkedItem) => (
            <li
              className="ListItem1"
              key={linkedItem.title}
              css={css`
                text-decoration: none;
                list-style-type: none;
                display: flex;
                border-bottom: 2.5px solid transparent;
                padding: ${isMenuOpen ? "0" : "3rem 0"};
                width: 100%;
                &:hover {
                  background: linear-gradient(white, white) padding-box,
                    linear-gradient(
                      90deg,
                      rgba(49, 211, 92, 1) 35%,
                      rgba(43, 183, 218, 1) 100%
                    );
                  &:hover > a {
                    color: black;
                  }
                }
              `}
            >
              <a
                className="listItem2"
                href={linkedItem.href}
                onClick={(e) => setIsMenuOpen(false)}
                css={css`
                  color: var(--grayishblue);
                  margin: auto;
                  width: 7rem;
                  text-align: center;
                  @media (max-width: 750px) {
                    font-size: 1.8rem;
                    color: black;
                  }
                `}
              >
                {linkedItem.title}
              </a>
            </li>
          ))}
        </ul>
        {isMenuOpen ? ReqBtn : null}
      </div>
      <div
        className="menuToggle"
        onClick={handleMenuToggle}
        css={css`
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99;
          @media (min-width: 750px) {
            display: none;
          }
          //   @media (max-width: 750px) {
          //     padding: 2rem;
          //   }
        `}
      >
        {isMenuOpen ? CloseMobileNavIcon : HamburgerIcon}
      </div>
    </nav>
  );
};
export default Navigation;
