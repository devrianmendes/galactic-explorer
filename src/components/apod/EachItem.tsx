import { FC } from "react";
import { ApodResponseProps } from "../../services/apod";
import SmallText from "../SmallText";
import SecondaryTitle from "../SecondaryTitle";

const EachItem: FC<{ content: ApodResponseProps }> = ({ content }) => {
  if (!content) return null;
  return (
    <>
      {content ? (
        Array.isArray(content) ? (
          <ul>
            {content.map((eachData) => (
              <li
                className="mb-6 bg-gray-900 p-1 rounded-md"
                key={eachData.title}
              >
                <SecondaryTitle
                  title={eachData.title}
                  subtitle={eachData.date.split("-").reverse().join("/")}
                />
                <div className="mb-2">
                  <img src={eachData.url} alt={eachData.title} />
                  {eachData.copyright ? (
                    <SmallText content={`Créditos: ${eachData.copyright}`} />
                  ) : null}
                </div>
                <p>{eachData.explanation}</p>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <h3>{content.title}</h3>
            <img src={content.url} alt={content.title} />
            <p>{content.explanation}</p>
          </>
        )
      ) : null}
    </>
  );
};

export default EachItem;
