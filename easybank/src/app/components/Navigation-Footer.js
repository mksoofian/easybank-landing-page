/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const FooterNav = ({ linkItems }) => {
  return (
    <nav
      css={css`
        margin-left: 9vw;
        @media (max-width: 950px) {
          margin: 0 0 0 3vw;
        }
        @media (max-width: 750px) {
          margin-left: 0;
        }
      `}
    >
      <ul
        className="footer-nav-list"
        css={css`
          display: flex;
          flex-direction: column;
          gap: 1.65rem;
          flex-wrap: wrap;
          max-height: 10rem;
          width: auto;
          @media (max-width: 750px) {
            gap: 1.65rem;
            flex-wrap: nowrap;
            max-height: fit-content;
          }
        `}
      >
        {linkItems.map((linkedItem2) => (
          <li
            className="ListItem1"
            key={linkedItem2.title}
            css={css`
              text-decoration: none;
              list-style-type: none;
      		  margin: 0 7.65vw 0 0;
                &:hover > a {
                  color: rgba(49, 211, 92, 1);
                }
			  @media (max-width: 950px) {
      		  margin: 0 0vw 0 0;
                }
			  @media (max-width: 750px) {
				margin: 0;
                }
              }
            `}
          >
            <a
              className="listItem2"
              href={linkedItem2.href}
              onClick={(e) => setIsMenuOpen(false)}
              css={css`
                color: var(--white);
                margin: auto;
                @media (max-width: 750px) {
                  font-size: 1.4rem;
                  color: var(--white);
                  letter-spacing: 0.03ch;
                }
              `}
            >
              {linkedItem2.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default FooterNav;
