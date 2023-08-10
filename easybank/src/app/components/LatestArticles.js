/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";

const LatestArticles = ({ articleInfo }) => {
  return (
    <section
      className="LatestArticlesSection"
      css={css`
        padding: 6vw 11.5vw 1vw 11.5vw;
        background-color: var(--verylightgrey);
        @media (max-width: 750px) {
          padding: 6.25rem 2.5rem 5.6rem 2.5rem;
        }
      `}
    >
      <h2
        className="LatestArticlesHeader"
        css={css`
          font-weight: 400;
          font-size: 4.2rem;
          letter-spacing: -0.06ch;
          color: var(--darkblue);

          @media (max-width: 750px) {
            font-weight: 400;
            font-size: 3.2rem;
            letter-spacing: -0.03ch;
            margin-top: 2.25rem;
            text-align: center;
          }
        `}
      >
        Latest Articles
      </h2>
      <div
        className="articlesContainer"
        css={css`
          display: flex;
          margin: 4.75rem 0rem;
          justify-content: space-evenly;
          flex-wrap: wrap;
          gap: 10rem;
          @media (max-width: 750px) {
            flex-direction: column;
            width: 100%;
            margin: 3.25rem 0;
            gap: 2.4rem;
          }
        `}
      >
        {articleInfo.map((article) => (
          <div
            className="articleCard"
            key={article.title}
            css={css`
              width: 23%;
              min-width: 25rem;
              background-color: var(--verylightgrey);
              @media (max-width: 750px) {
                width: 100%;
              }
            `}
          >
            <Image
              className="articleImage"
              src={article.imagePath}
              width={0}
              height={0}
              css={css`
                border-radius: 0.5rem 0.5rem 0 0;
                object-fit: cover;
                width: 100%;
                max-height: 20rem;

                @media (max-width: 750px) {
                  //   max-height: 20rem;
                }
              `}
              alt={article.imageAlt}
            />
            <div
              className="textContainer"
              css={css`
                background-color: var(--white);
                display: flex;
                flex-direction: column;
                gap: 1rem;
                border-radius: 0 0 0.5rem 0.5rem;
                padding: 2.5rem 3rem 2rem 2.5rem;
                @media (max-width: 750px) {
                  padding: 2.5rem 3rem 2rem 3rem;
                }
              `}
            >
              <p
                className="author"
                css={css`
                  color: var(--grayishblue);
                  font-size: 1rem;
                  letter-spacing: -0.03ch;
                  //
                  @media (max-width: 750px) {
                    font-size: 1rem;
                    letter-spacing: -0.03ch;
                  }
                `}
              >
                {" "}
                By {article.author}
              </p>
              <a
                href={article.href}
                css={css`
                  &:hover {
                    color: var(--limegreen);
                  }
                `}
              >
                <h3
                  className="articleTitle"
                  css={css`
                    color: var(--darkblue);
                    font-weight: 400;
                    font-size: 1.6rem;
                    letter-spacing: -0.04ch;
                    line-height: 2ch;
                    &:hover {
                      color: var(--limegreen);
                    }
                    @media (max-width: 750px) {
                      font-weight: 400;
                      font-size: 1.6rem;
                      letter-spacing: -0.04ch;
                      line-height: 2ch;
                      // margin-top: 2.25rem;
                    }
                  `}
                >
                  {article.title}
                </h3>
              </a>
              <p
                className="articleText"
                css={css`
                  color: var(--grayishblue);
                  line-height: 2.4ch;
                  letter-spacing: 0.04ch;
                  font-size: 1.2rem;
                  margin-bottom: 2.25rem;
                  @media (max-width: 750px) {
                    line-height: 2.4ch;
                    letter-spacing: 0.04ch;
                    font-size: 1.2rem;
                    margin-bottom: 2.25rem;
                  }
                `}
              >
                {article.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default LatestArticles;
